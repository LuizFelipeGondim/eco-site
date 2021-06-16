import { Router } from 'express'
import { getRepository } from 'typeorm'
import multer from 'multer'

import uploadConfig from '../../config/upload'
import Publication from '../../models/Publication'
import ensureAuthenticated from '../../middlewares/ensureAuthenticated'
import verifyAdminStatus from '../../middlewares/verifyAdminStatus'
import CreateTagService from '../../services/admin/CreateTagService'
import CreateCategoryService from '../../services/admin/CreateCategoryService'
import User from '../../models/User'

const PublicationsRouter = Router()
const upload = multer(uploadConfig)

PublicationsRouter.post(
    '/create', 
    ensureAuthenticated, 
    verifyAdminStatus,
    upload.single('main_image'), 
    async (request, response) => {

	try {
        let { title, subtitle, content } = request.body

        const slug = title.toLowerCase().replace(/\s+/g, "-")
        const situation = Boolean(request.body.situation)

        content = content.replace(/class/g, "className")
                        .replace(/oembed/g, "embed")
                        .replace(/url/g, "src")

        const tags = request.body.tags.split(',') 
        let categories = request.body.categories.split(',') 

        const user_id = request.user.id

        const main_image = request.file.filename
  
        const publicationsRepository = getRepository(Publication)

        const createTag = new CreateTagService()
        const createCategory = new CreateCategoryService()

        const publication = publicationsRepository.create({
            user_id,
            title,
            subtitle,
            content,
            slug,
            situation,
            main_image: `http://localhost:3333/files/${main_image}`
        })
        await publicationsRepository.save(publication) 
        
        const publication_id: string = publication.id

        const createdCategories = await createCategory.execute({
            categories,
            publication_id
        }) 

        const createdTags = await createTag.execute({
			tags,
			publication_id
        })
 
		return response.json({
            "publication": publication, 
            "tags": createdTags,
            "categories": createdCategories
        })

	} catch (err) {
		return response.status(400).json({ error: err.message })
	}
})

PublicationsRouter.post(
    '/edit', 
    ensureAuthenticated, 
    verifyAdminStatus,
    upload.single('main_image'), 
    async (request, response) => {

	try {
        const { title, subtitle, content } = request.body

        const situation = Boolean(request.body.situation)

        const tags = request.body.tags.split(',') 
        const categories = request.body.categories.split(',') 

        const main_image = request.file.filename
        
        const user_id = request.user.id

        const publicationsRepository = getRepository(Publication)

        const createTag = new CreateTagService()
        const createCategory = new CreateCategoryService()

        const publication = publicationsRepository.create({
            user_id,
            title,
            subtitle,
            content,
            situation,
            main_image: `http://localhost:3333/files/${main_image}`
        })
        await publicationsRepository.save(publication) 
        
        const publication_id: string = publication.id

        const createdCategories = await createCategory.execute({
            categories,
            publication_id
        }) 

        const createdTags = await createTag.execute({
			tags,
			publication_id
        })
 
		return response.json({
            "publication": publication, 
            "tags": createdTags,
            "categories": createdCategories
        })

	} catch (err) {
		return response.status(400).json({ error: err.message })
	}
})

PublicationsRouter.get('/', async (request, response) => {
	try {
		const page = request.query.page as unknown as number | 1
		const limit = request.query.limit as unknown as number | null
 
		const skip = page * limit
		
        const publicationsRepository = getRepository(Publication)
        const usersRepository = getRepository(User)

		const publications = await publicationsRepository.find({
			skip,
			take: limit,
			order: {
				updated_at: "DESC",
			}
        })

        const count = await publicationsRepository.count()

        const users = await usersRepository.find({
            where: {
                is_staff: true
            }
        })

        return response.json({
            publications,
            count,
            users
        })

	} catch (err) {
		return response.status(400).json({ error: err.message })
	}

})

PublicationsRouter.delete(
    '/delete/:id',
    ensureAuthenticated,
    verifyAdminStatus, 
    async (request, response) => {
        const { id } = request.params

        try {
            const publicationsRepository = getRepository(Publication)
            publicationsRepository.delete({
                id
            })

        } catch (err) {
            return response.status(400).json({ err: err.message })
        }
    })

export default PublicationsRouter
