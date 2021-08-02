import { Router } from 'express'
import { getRepository, Like } from 'typeorm'
import multer from 'multer'
import crypto from 'crypto'
import path from 'path'
import fs from 'fs'

import uploadConfig from '../../config/upload'
import Publication from '../../models/Publication'
import ensureAuthenticated from '../../middlewares/ensureAuthenticated'
import verifyAdminStatus from '../../middlewares/verifyAdminStatus'
import CreateTagService from '../../services/admin/CreateTagService'
import CreateCategoryService from '../../services/admin/CreateCategoryService'
import User from '../../models/User'
import UpdateCategoryService from '../../services/admin/UpdateCategoryService'
import UpdateTagService from '../../services/admin/UpdateTagService'
import UpdateMainImageService from '../../services/admin/UpdateMainImageService'

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

        const slugHash = crypto.randomBytes(5).toString('hex')
        const slug = `${slugHash}-${title.toLowerCase().replace(/\s+/g, "-")}`

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
    '/edit/:id', 
    ensureAuthenticated, 
    verifyAdminStatus,
    async (request, response) => {

	try {

        const { id } = request.params
        const { title, subtitle, tags, categories } = request.body 
        let { content } = request.body
        
        const slugHash = crypto.randomBytes(5).toString('hex')
        const slug = `${slugHash}-${title.toLowerCase().replace(/\s+/g, "-")}`

        content = content.replace(/class/g, "className")
                        .replace(/oembed/g, "embed")
                        .replace(/url/g, "src")

        const publicationsRepository = getRepository(Publication)
   
        const updatedTag = new UpdateTagService()
        const updatedCategory = new UpdateCategoryService()
    
        const publication = await publicationsRepository.findOne(id)

        publication.title = title
        publication.subtitle = subtitle
        publication.content = content
        publication.slug = slug

        await publicationsRepository.save(publication)
  
        const publication_id: string = publication.id

        const updatedCategories = await updatedCategory.execute({
            categories,
            publication_id
        }) 

        const updatedTags = await updatedTag.execute({
			tags,
			publication_id
        })

		return response.json({
            "publication": publication, 
            "tags": updatedTags,
            "categories": updatedCategories
        })

	} catch (err) {
		return response.status(400).json({ error: err.message })
	}
})

PublicationsRouter.patch(
    '/main-image/:id', 
    ensureAuthenticated, 
    verifyAdminStatus, 
    upload.single('main_image'), 
    async (request, response) => {
    try {

        const { id } = request.params
		const updateMainImage = new UpdateMainImageService()

		const publication = await updateMainImage.execute({
			publication_id: id,
			imageFilename: request.file.filename
        })
        
		return response.json(publication)
	} catch (err) {
		return response.status(400).json({ error: err.message })
	}
})

PublicationsRouter.get('/latest-publications', async (request, response) => {

    const publicationsRepository = getRepository(Publication)

    const publications = await publicationsRepository.find({
        take: 3,
        order: {
            created_at: "DESC",
        }
    })

    return response.json(publications)
})

PublicationsRouter.get('/', async (request, response) => {
	try {
		const page = request.query.page as unknown as number | 1
		const limit = request.query.limit as unknown as number | null
        const name = request.query.name || null

		const skip = page * limit
		
        const publicationsRepository = getRepository(Publication)
        const usersRepository = getRepository(User)

        const publications = name ? 
            await publicationsRepository.find({
                skip,
                take: limit,
                order: {
                    updated_at: "DESC",
                },
                where:  {
                    title: Like(`%${name}%`)
                } 
            })
            :
            await publicationsRepository.find({
                skip,
                take: limit,
                order: {
                    updated_at: "DESC",
                }
            })

        const publicationsLength = name ?
            await publicationsRepository.count({
                where:  {
                    title: Like(`%${name}%`)
                }
            })
            :
            await publicationsRepository.count()

            const totalPublications = await publicationsRepository.count()

        const users = await usersRepository.find({
            where: {
                is_staff: true
            }
        })

        return response.json({
            publications,
            totalPublications,
            users,
            publicationsLength
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

            const publication = await publicationsRepository.findOne({
                id
            })

            const [, image] = publication.main_image.split('/files/')

            const imageFilePath = path.join(uploadConfig.directory, image)
			const imageFileExists = await fs.promises.stat(imageFilePath)

			if (imageFileExists) {
				await fs.promises.unlink(imageFilePath)
            }
            
            publicationsRepository.delete({
                id
            })

        } catch (err) {
            return response.status(400).json({ err: err.message })
        }
    })

export default PublicationsRouter
