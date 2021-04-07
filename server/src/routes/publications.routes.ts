import { Router } from 'express'
import { getRepository } from 'typeorm'

import Publication from '../models/Publication'

const PublicationsRouter = Router()

PublicationsRouter.get('/', async (request, response) => {
	try {

		const publicationsRepository = getRepository(Publication)
		const publications = await publicationsRepository.find()

        return response.json(publications)

	} catch (err) {
		return response.status(400).json({ error: err.message })
	}

})

export default PublicationsRouter
