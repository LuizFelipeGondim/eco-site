import Tag from '../../models/Tag'

import { getRepository } from 'typeorm'

interface Request {
    tags: string[]
    publication_id: string
}

class CreateTagService {
    public async execute({tags, publication_id}: Request): Promise<string[]>{

        const tagsRepository = getRepository(Tag)

        tags.forEach( async (tag_name: string) => {
            const createdTag = tagsRepository.create({
                tag_name,
                publication_id
            })
            await tagsRepository.save(createdTag)
        })

        return tags
    }
}

export default CreateTagService