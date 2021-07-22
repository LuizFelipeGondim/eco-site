import { Router } from 'express'
import { getRepository } from 'typeorm'
import Publication from '../models/Publication'

const HomeRouter = Router()

HomeRouter.get('/', async (request, response) => {
	try {
		const publicationsRepository = getRepository(Publication)

		const latest_publications = await publicationsRepository.find({
			take: 10,
			relations: ['categories'],
			select:["main_image", "id", "title", "subtitle", "created_at", "slug"],
			order: {
				created_at: "DESC",
			}
		})

		const first_publications = await publicationsRepository.find({
			take: 10,
			relations: ['categories'],
			select:["main_image", "id", "title", "subtitle", "created_at", "slug"],
			order: {
				created_at: "ASC",
			}
		})

		const most_viewed = await publicationsRepository.find({
			take: 4,
			relations: ['categories'],
			select:["main_image", "id", "title", "subtitle", "created_at", "slug"],
			order: {
				created_at: "ASC",
			}
		})

		return response.json({
			latest_publications,
			first_publications,
			most_viewed
        })
	} catch (err) {
		return response.status(400).json({ error: err.message })
	}

})

export default HomeRouter
