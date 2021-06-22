import { Router } from 'express'
import multer from 'multer'
import { getRepository, Like } from 'typeorm'

import uploadConfig from '../../config/upload'
import ensureAuthenticated from '../../middlewares/ensureAuthenticated'
import User from '../../models/User'
import CreateUserService from '../../services/CreateUserService'
import UpdateUserAvatarService from '../../services/UpdateUserAvatarService'

const UsersRouter = Router()
const upload = multer(uploadConfig)

UsersRouter.post('/', async (request, response) => {

    try {
        const {first_name, last_name, email, password, city, uf, whatsapp, is_staff} = request.body

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
            is_staff,
            avatar
        })

        delete user.password

        return response.json(user)
    } catch (err) {
        return response.status(400).json({ error: err.message })
    }
})

UsersRouter.post('/edit', ensureAuthenticated, async (request, response) => {
    try {
        
        const id = request.user.id
        const { first_name, last_name, city, uf, whatsapp } = request.body 
        
    
        const usersRepository = getRepository(User)
    
        const user = await usersRepository.findOne(id)
    
        user.first_name = first_name
        user.last_name = last_name
        user.city = city
        user.uf = uf
        user.whatsapp = whatsapp
    
        await usersRepository.save(user)
    
        return response.json(user)
    
    } catch (err) {
        return response.status(400).json({ error: err.message })
    }
})

UsersRouter.patch('/avatar', ensureAuthenticated, upload.single('avatar'), async (request, response) => {
    try {
		const updateUserAvatar = new UpdateUserAvatarService()

		const user = await updateUserAvatar.execute({
			user_id: request.user.id,
			avatarFilename: request.file.filename
		})

		return response.json(user.avatar)
	} catch (err) {
		return response.status(400).json({ error: err.message })
	}
})

UsersRouter.get('/profile', ensureAuthenticated, async (request, response) => {
    try {
        const usersRepository = getRepository(User)

		const user = await usersRepository.findOne({
			id: request.user.id,
		})

		delete user.password

		return response.json(user)
	} catch (err) {
		return response.status(400).json({ error: err.message })
	}
})

UsersRouter.get('/', ensureAuthenticated, async (request, response) => {
    try {
		const page = request.query.page as unknown as number | 1
		const limit = request.query.limit as unknown as number | null
        const name = request.query.name || null

		const skip = page * limit
		
        const usersRepository = getRepository(User)

        const users = name ? 
            await usersRepository.find({
                skip,
                take: limit,
                order: {
                    created_at: "DESC",
                },
                where:  {
                    first_name: Like(`%${name}%`)
                } 
            })
            :
            await usersRepository.find({
                skip,
                take: limit,
                order: {
                    created_at: "DESC",
                }
            })

        const usersLength = name ?
            await usersRepository.count({
                where:  {
                    first_name: Like(`%${name}%`)
                }
            })
            :
            await usersRepository.count()

            const totalUsers = await usersRepository.count()

        return response.json({
            users,
            totalUsers,
            usersLength
        })

	} catch (err) {
		return response.status(400).json({ error: err.message })
	}
})

export default UsersRouter

