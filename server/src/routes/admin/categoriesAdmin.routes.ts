import { Router } from 'express'
import { getRepository } from 'typeorm'

import ensureAuthenticated from '../../middlewares/ensureAuthenticated'
import verifyAdminStatus from '../../middlewares/verifyAdminStatus'
import Category from '../../models/Category'

const CategoriesRouter = Router()

CategoriesRouter.get(
    '/', 
    async (request, response) => {
        try {

            const publicationsRepository = getRepository(Category)
            const categories = await publicationsRepository.find()

            return response.json(categories)

        } catch (err) {
            return response.status(400).json({ error: err.message })
        }
    })

export default CategoriesRouter