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
    async (request, response) => {
        console.log(request.user.id)
	try {
        const { title, subtitle, content, tags, categories } = request.body
        console.log(title)
        console.log(subtitle)
        console.log(content)
        console.log(tags)
        console.log(categories)     
        const user_id = request.user.id

        const main_image = "teste.png" //request.file.filename
        console.log(66666)
        const publicationsRepository = getRepository(Publication)

        const createTag = new CreateTagService()
        const createCategory = new CreateCategoryService()
    
        const publication = publicationsRepository.create({
            user_id,
            title,
            subtitle,
            content,
            main_image: `http://localhost:3333/files/${main_image}`
        })
        
        await publicationsRepository.save(publication) 

        const publication_id: string = publication.id

        const createdTags = await createTag.execute({
			tags,
			publication_id
        })
        
        const createdCategories = await createCategory.execute({
			categories,
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
/*
 Preciso salvar os datos da requisição
*/

export default PublicationsRouter
