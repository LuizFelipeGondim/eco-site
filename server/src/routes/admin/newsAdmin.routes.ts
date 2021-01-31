import { Router } from 'express'
import { getRepository } from 'typeorm'
import multer from 'multer'

import uploadConfig from '../../config/upload'
import News from '../../models/News'
import ensureAuthenticated from '../../middlewares/ensureAuthenticated'
import verifyAdminStatus from '../../middlewares/verifyAdminStatus'

const NewsRouter = Router()
const upload = multer(uploadConfig)

NewsRouter.get('/create', ensureAuthenticated,  verifyAdminStatus, async (request, response) => {
	try {
       

		return response.json({ok: true})

	} catch (err) {
		return response.status(400).json({ error: err.message })
	}

})

/*
 Preciso salvar os datos da requisição
*/

export default NewsRouter
