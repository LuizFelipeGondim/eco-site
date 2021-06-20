import { Router } from 'express'
import { getRepository } from 'typeorm'

import Publication from '../models/Publication'
import Tag from '../models/Tag'
import User from '../models/User'

const PublicationsRouter = Router()

PublicationsRouter.get('/:slug', async (request, response) => {
	try {
		const { slug } = request.params
		const publicationsRepository = getRepository(Publication)
		const usersRepository = getRepository(User)
		const tagsRepository = getRepository(Tag)

		const publications = await publicationsRepository.findOne({
			where: {
				slug
			}
		})

		const tags = await tagsRepository.find({
            where: {
                publication_id: publications.id
            }
		})

		const user = await usersRepository.findOne({
            where: {
                id: publications.user_id
            }
		})

		delete user.password
		delete user.created_at
		delete user.updated_at

        return response.json({
			publications,
			user,
			tags,
		})

	} catch (err) {
		return response.status(400).json({ error: err.message })
	}

})

export default PublicationsRouter
