import { Router } from 'express'
import multer from 'multer'

import uploadConfig from '../config/upload'
import CreateUserService from '../services/CreateUserService'


const usersRouter = Router()
const upload = multer(uploadConfig)

usersRouter.post('/', async (request, response) => {
    try {
        const {first_name, last_name, email, password, city, uf, whatsapp} = request.body

        const avatar = 'http://localhost:3333/files/unknown.png'
        
        const createUser = new CreateUserService()

        const user = await createUser.execute({
            first_name, 
            last_name, 
            email, 
            password, 
            city, 
            uf, 
            whatsapp,
            avatar
        })

        delete user.password

        return response.json(user)
    } catch (err) {
        return response.status(400).json({ error: err.message })
    }
})

export default usersRouter