import { Router } from 'express'
import { getRepository, Like } from 'typeorm'

import ensureAuthenticated from '../../middlewares/ensureAuthenticated'
import verifyAdminStatus from '../../middlewares/verifyAdminStatus'
import Category from '../../models/Category'


const CategoriesRouter = Router()

CategoriesRouter.get(
    '/', 
    async (request, response) => {
        try {
            
            const categoriesRepository = getRepository(Category)
            const categories = await categoriesRepository.find()

            return response.json(categories)

        } catch (err) {
            return response.status(400).json({ error: err.message })
        }
    })
    
CategoriesRouter.get(
    '/pagination', 
    async (request, response) => {
        try {
            
            const page = request.query.page as unknown as number | 1
            const limit = request.query.limit as unknown as number | null
            const name = request.query.name || null

            const skip = page * limit
            
            const categoriesRepository = getRepository(Category)

            const categories = name ? 
                await categoriesRepository.find({
                    relations: ["publications"],
                    skip,
                    take: limit,
                    where:  {
                        category_name: Like(`%${name}%`)
                    } 
                })
                :
                await categoriesRepository.find({
                    skip,
                    take: limit,
                })


            const categoriesLength = name ?
                await categoriesRepository.count({
                    where:  {
                        category_name: Like(`%${name}%`)
                    }
                })
                :
                await categoriesRepository.count()

            const totalCategories = await categoriesRepository.count()

            return response.json({
                categories,
                totalCategories,
                categoriesLength
            })

        } catch (err) {
            return response.status(400).json({ error: err.message })
        }
    }
)

CategoriesRouter.post(
    '/create',
    ensureAuthenticated,
    verifyAdminStatus, 
    async (request, response) => {
        try {
            const { category_name } = request.body
            const categoriesRepository = getRepository(Category)
            
            const category = categoriesRepository.create({
                category_name,
            })
            
            await categoriesRepository.save(category) 

            return response.json(category)

        } catch (err) {
            return response.status(400).json({ error: err.message })
        }
    })

CategoriesRouter.delete(
    '/delete/:id',
    ensureAuthenticated,
    verifyAdminStatus, 
    async (request, response) => {
        const { id } = request.params
        console.log(id)
        try {
            const categoriesRepository = getRepository(Category)
            categoriesRepository.delete({
                id
            })

        } catch (err) {
            return response.status(400).json({ err: err.message })
        }
    })

export default CategoriesRouter