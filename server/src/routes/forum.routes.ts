import { Router } from 'express'
import { getRepository, Like } from 'typeorm'
import crypto from 'crypto'

import ensureAuthenticated from '../middlewares/ensureAuthenticated'
import Forum from '../models/Forum'
import CreateTagForumService from '../services/CreateTagForumService'
import ForumComment from '../models/ForumComment'

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

ForumRouter.get('/', async (request, response) => {
	try {

		const page = request.query.page as unknown as number | 1
		const limit = request.query.limit as unknown as number | null
        const name = request.query.name || null

		const skip = page * limit
		
        const forumRepository = getRepository(Forum)

        const forums = name ? 
            await forumRepository.find({
                skip,
                take: limit,
                relations: ["author"],
                order: {
                    updated_at: "DESC",
                },
                where:  {
                    title: Like(`%${name}%`),
                },
                
            })
            :
            await forumRepository.find({
                skip,
                take: limit,
                relations: ["author"],
                order: {
                    updated_at: "DESC",
                },

            })

        forums.forEach(forum => {
            delete forum.author.password
            delete forum.author.email
            delete forum.author.city
            delete forum.author.uf
            delete forum.author.created_at
            delete forum.author.updated_at
            delete forum.author.whatsapp
            delete forum.author.is_staff
        })

        const forumLength = name ?
            await forumRepository.count({
                where:  {
                    title: Like(`%${name}%`)
                }
            })
            :
            await forumRepository.count()

        const totalForum = await forumRepository.count()

        return response.json({
            forums,
            totalForum,
            forumLength
        })

	} catch (err) {
		return response.status(400).json({ error: err.message })
	}

})

ForumRouter.get('/:slug', async (request, response) => {
	try {
		const { slug } = request.params
		const forumRepository = getRepository(Forum)
        
		const forum = await forumRepository.findOne({
            relations: ['author', 'tags'],
			where: {
                slug
			}
		})

        delete forum.author.password
        delete forum.author.email
        delete forum.author.city
        delete forum.author.uf
        delete forum.author.created_at
        delete forum.author.updated_at
        delete forum.author.whatsapp
        delete forum.author.is_staff

        return response.json(forum)

	} catch (err) {
		return response.status(400).json({ error: err.message })
	}

})

ForumRouter.get('/comments/:id', async (request, response) => {
	try {
		const { id } = request.params
        
		const commentRepository = getRepository(ForumComment)
		const comments = await commentRepository.find({
            relations: ['user'],
			where: {
                forum_id : id
			}
		})

        comments.forEach(comment => {
            delete comment.user.password
            delete comment.user.email
            delete comment.user.city
            delete comment.user.uf
            delete comment.user.created_at
            delete comment.user.updated_at
            delete comment.user.whatsapp
            delete comment.user.is_staff
        })

        return response.json(comments)

	} catch (err) {
		return response.status(400).json({ error: err.message })
	}

})

ForumRouter.post('/comments/create', ensureAuthenticated, async (request, response) => {
	try {
        
        let { forum_id, content } = request.body
        const user_id = request.user.id

		const commentRepository = getRepository(ForumComment)

        content = content.replace(/class/g, "className")
                        .replace(/oembed/g, "embed")
                        .replace(/url/g, "src")

        const comment = commentRepository.create({
            forum_id,
            user_id,
            content,
        })
        await commentRepository.save(comment) 

        return response.json(comment)

	} catch (err) {
		return response.status(400).json({ error: err.message })
	}

})

ForumRouter.get('/to-close/:slug', ensureAuthenticated, async (request, response) => {
	try {
        
        const { slug } = request.params

        const forumRepository = getRepository(Forum)
		const forum = await forumRepository.findOne({
            where:  {
                slug,
            },
        })

        forum.resolved = true

        await forumRepository.save(forum)

        return response.json(forum)

	} catch (err) {
		return response.status(400).json({ error: err.message })
	}

})

ForumRouter.delete('/comments/delete/:id', ensureAuthenticated, async (request, response) => {

    try {
            const { id } = request.params
            
            const commentsRepository = getRepository(ForumComment)

            await commentsRepository.delete({id})

        } catch (err) {
            return response.status(400).json({ err: err.message })
        }
})

ForumRouter.get('/profile/doubts', ensureAuthenticated, async (request, response) => {
	try {
		
        const forumRepository = getRepository(Forum)

 
        const forum = await forumRepository.find({
                select: ["title", "resolved", "created_at", "id"],
                order: {
                    updated_at: "DESC",
                },
                where: {
                    user_id: request.user.id
                }
            })

        return response.json(forum)

	} catch (err) {
		return response.status(400).json({ error: err.message })
	}

})

ForumRouter.delete('/delete/doubts/:id', ensureAuthenticated, async (request, response) => {
	try {
		const { id } = request.params

        const forumRepository = getRepository(Forum)

        await forumRepository.delete({id})

	} catch (err) {
		return response.status(400).json({ error: err.message })
	}

})

export default ForumRouter