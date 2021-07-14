import TagForum from '../models/TagForum'

import { getRepository } from 'typeorm'

interface Request {
    tags: string[]
    forum_id: string
}

class CreateTagForumService {
    public async execute({tags, forum_id}: Request): Promise<string[]>{

        const tagsRepository = getRepository(TagForum)

        tags.forEach( async (tag_name: string) => {
            const createdTag = tagsRepository.create({
                tag_name,
                forum_id
            })
            await tagsRepository.save(createdTag)
        })

        return tags
    }
}

export default CreateTagForumService