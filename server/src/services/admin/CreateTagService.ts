import Publication from '../../models/Publication'
import Tag from '../../models/Tag'

import { getConnection, getRepository } from 'typeorm'

interface Request {
    tags: string[]
    publication_id: string
}

class CreateTagService {
    public async execute({tags, publication_id}: Request): Promise<string[]>{

        const tagsRepository = getRepository(Tag)

        tags.map( async (tag_name: string) => {
            const createdTag = tagsRepository.create({
                tag_name
            })
            await tagsRepository.save(createdTag)

            await getConnection()
                .createQueryBuilder()
                .relation(Publication, "tags")
                .of(publication_id)
                .add(createdTag)
            
        })

        return tags
    }
}

export default CreateTagService