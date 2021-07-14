import { Router } from 'express'
import { getRepository } from 'typeorm'
import crypto from 'crypto'

import ensureAuthenticated from '../middlewares/ensureAuthenticated'
import Forum from '../models/Forum'
import CreateTagForumService from '../services/CreateTagForumService'

const ForumRouter = Router()

ForumRouter.post(
    '/create', 
    ensureAuthenticated, 
    async (request, response) => {

	try {
        let { title, content, tags } = request.body

        const slugHash = crypto.randomBytes(5).toString('hex')
        const slug = `${slugHash}-${title.toLowerCase().replace(/\s+/g, "-")}`

        
        content = content.replace(/class/g, "className")
                        .replace(/oembed/g, "embed")
                        .replace(/url/g, "src")


        const user_id = request.user.id
  
        const forumRepository = getRepository(Forum)

        const createTag = new CreateTagForumService()

        const forum = forumRepository.create({
            user_id,
            title,
            content,
            slug

        })
        await forumRepository.save(forum) 
        
        const forum_id: string = forum.id

        const createdTags = await createTag.execute({
			tags,
			forum_id
        })
 
		return response.json({
            "forum": forum, 
            "tags": createdTags,
        })

	} catch (err) {
		return response.status(400).json({ error: err.message })
	}
})

export default ForumRouter