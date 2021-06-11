import { Router } from 'express'
import { getRepository } from 'typeorm'
import multer from 'multer'

import uploadConfig from '../../config/upload'
import Publication from '../../models/Publication'
import ensureAuthenticated from '../../middlewares/ensureAuthenticated'
import verifyAdminStatus from '../../middlewares/verifyAdminStatus'
import CreateTagService from '../../services/admin/CreateTagService'
import CreateCategoryService from '../../services/admin/CreateCategoryService'

const PublicationsRouter = Router()
const upload = multer(uploadConfig)

PublicationsRouter.post(
    '/create', 
    ensureAuthenticated, 
    verifyAdminStatus,
    upload.single('main_image'), 
    async (request, response) => {

	try {
        const { title, subtitle, content } = request.body

        const slug = title.toLowerCase().replace(' ', '-')

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

export default PublicationsRouter
