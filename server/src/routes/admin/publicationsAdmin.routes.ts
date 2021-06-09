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
        const categories = request.body.categories.split(',') 

        console.log(title)
        console.log(subtitle)
        console.log(content)
        console.log(tags)
        console.log(categories)
        console.log(request.file.filename)
        const user_id = request.user.id

        const main_image = request.file.filename
        console.log(66666)
        const publicationsRepository = getRepository(Publication)

        const createTag = new CreateTagService()
        const createCategory = new CreateCategoryService()
        console.log(1)
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
        console.log(publication_id)

        const createdCategories = await createCategory.execute({
            categories,
            publication_id
        }) 
        console.log(3)
        const createdTags = await createTag.execute({
			tags,
			publication_id
        })
        console.log(4)
		return response.json({
            "publication": publication, 
            "tags": createdTags,
            "categories": createdCategories
        })

	} catch (err) {
		return response.status(400).json({ error: err.message })
	}
})
/*
 Preciso salvar os datos da requisição
*/

export default PublicationsRouter
