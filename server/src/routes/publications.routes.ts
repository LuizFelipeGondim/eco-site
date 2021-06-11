import { Router } from 'express'
import { getRepository } from 'typeorm'

import Publication from '../models/Publication'

interface Teste extends Publication{
	skip(n:number): Publication
}

const PublicationsRouter = Router()

PublicationsRouter.get('/', async (request, response) => {
	try {
		const page = request.query.page as unknown as number | 1
		const limit = request.query.limit as unknown as number | null
 
		const skip = (page - 1) * limit
		
		const publicationsRepository = getRepository(Publication)
		const publications = await publicationsRepository.find({
			skip,
			take: limit,
			order: {
				created_at: "DESC",
			}
		})

        return response.json(publications)

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
