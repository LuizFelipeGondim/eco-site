import { Request, Response, NextFunction } from 'express'
import { getRepository } from 'typeorm'

import User from '../models/User'

export default async function verifyAdminStatus (
    request: Request, 
    response: Response, 
    next: NextFunction
): Promise<any>{
    try{

        const id = request.user.id
        const usersRepository = getRepository(User)

        const user = await usersRepository.findOne({
            where: { id }
        })
        
        if(!user.is_staff){
            throw new Error('You are not allowed to access this page.')
        }

        return next()

    } catch(err) {
        return response.status(400).json({ error: err.message })
    }
   
}