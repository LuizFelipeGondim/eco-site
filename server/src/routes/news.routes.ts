import { Router } from 'express'
import { getRepository } from 'typeorm'
import multer from 'multer'

import uploadConfig from '../config/upload'
import News from '../models/News'
import ensureAuthenticated from '../middlewares/ensureAuthenticated'

const NewsRouter = Router()
const upload = multer(uploadConfig)

NewsRouter.post('/create', ensureAuthenticated, upload.single('main_image') , async (request, response) => {
	try {
        console.log(request.body.user_id)
        const { user_id, title, subtitle, content } = request.body
        const main_image = request.file.filename

        const newsRepository = getRepository(News)

        const news = newsRepository.create({
            user_id,
            title,
            subtitle,
            content,
            main_image
        })

        await newsRepository.save(news)

		return response.json(news)

	} catch (err) {
		return response.status(400).json({ error: err.message })
	}

})

/*
 Preciso salvar os datos da requisição
*/

export default NewsRouter
