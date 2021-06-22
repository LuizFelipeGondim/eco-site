import User from '../models/User'

import { getRepository } from 'typeorm'
import { hash } from 'bcryptjs'

interface Request {
    first_name: string
    last_name: string 
    email: string
    password: string
    city: string
    uf: string
    whatsapp: string
    is_staff?: boolean
    avatar: string
}

class CreateUserService {
    public async execute(
        { 
            first_name, 
            last_name, 
            email, 
            password, 
            city, 
            uf, 
            whatsapp, 
            is_staff,
            avatar
        }: Request): Promise<User> {

        const usersRepository = getRepository(User)

        const checkUserExists = await usersRepository.findOne({
            where: { email }
        })

        if (checkUserExists) {
            throw new Error('Email address already used.')
        }

        const hashedPassword = await hash(password, 8)

        const user = usersRepository.create({
            first_name,
            last_name, 
            email,
            password: hashedPassword,
            city,
            uf,
            whatsapp,
            is_staff,
            avatar
        })

        await usersRepository.save(user)

        return user
    }
}

export default CreateUserService