import { Router } from 'express'
import { getRepository } from 'typeorm'

import Publication from '../models/Publication'

const PublicationsRouter = Router()

PublicationsRouter.get('/', async (request, response) => {
	try {
		const page = request.query.page as unknown as number | 1
		const limit = request.query.limit as unknown as number | null
 
		const skip = page * limit
		
		const publicationsRepository = getRepository(Publication)
		const publications = await publicationsRepository.find({
			skip,
			take: limit,
			order: {
				created_at: "DESC",
			}
		})

		const count = await publicationsRepository.count()

        return response.json({
			publications,
			count
		})

	} catch (err) {
		return response.status(400).json({ error: err.message })
	}

})

PublicationsRouter.get('/:id', async (request, response) => {
	try {
		const id = request.params.id
		console.log(1)
		const publicationsRepository = getRepository(Publication)
		console.log(2)
		const publication = await publicationsRepository.findOne(id)
        return response.json(publication)

	} catch (err) {
		return response.status(400).json({ error: err.message })
	}

})

export default PublicationsRouter
