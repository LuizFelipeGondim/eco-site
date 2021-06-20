import Tag from '../../models/Tag'

import { getRepository } from 'typeorm'

interface Request {
    tags: string[]
    publication_id: string
}

class CreateTagService {
    public async execute({tags, publication_id}: Request): Promise<string[]>{

        const tagsRepository = getRepository(Tag)

        const publicationsTags = await tagsRepository.find({
            where: {
                publication_id
            }
        })

        let filteredTags = tags

        tags.forEach((tag_name) => {
            let equalCategory = ''
            publicationsTags.forEach(tag => {
                if(tag.tag_name === tag_name){
                    equalCategory = tag.tag_name
                }
            })

            filteredTags = filteredTags.filter(tag => tag !== equalCategory)
        })

        filteredTags.forEach( async (tag_name: string) => {

            const createdTag = tagsRepository.create({
                tag_name,
                publication_id
            })
            await tagsRepository.save(createdTag)

        })


        let removeTags = publicationsTags.map(tag => tag.tag_name)

        publicationsTags.forEach((tag) => {
            let equalCategory = ''
            tags.forEach(tag_name => {
                if(tag_name === tag.tag_name){
                    equalCategory = tag.tag_name
                }
            })

            removeTags = removeTags.filter(tag => tag !== equalCategory)
        })


        removeTags.forEach( async (tag_name) => {

            const tagRemoved = await tagsRepository.findOne({
                where: {
                    tag_name
                }
            })
            
            await tagsRepository.delete({
                id: tagRemoved.id
            })

        })

        return tags
    }
}

export default CreateTagService