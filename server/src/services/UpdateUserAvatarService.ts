import { getRepository } from 'typeorm'
import path from 'path'
import fs from 'fs'

import uploadConfig from '../config/upload'
import User from '../models/User'

interface Request {
	user_id: string
	avatarFilename: string
}

class UpdateUserAvatarService {
	public async execute({ user_id, avatarFilename }: Request): Promise<User> {
		const usersRepository = getRepository(User)
		
		const user = await usersRepository.findOne(user_id)
		
		if (!user) {
			throw new Error('Only authenticated users can change avatar.')
		}
		if (user.avatar) {
			// Deletar avatar anterior
			const [, filename] = user.avatar.split('/files/')
			
			if(filename !== 'unknown.png'){
				const userAvatarFilePath = path.join(uploadConfig.directory, filename)
				const userAvatarFileExists = await fs.promises.stat(userAvatarFilePath)
				
				if (userAvatarFileExists) {
					await fs.promises.unlink(userAvatarFilePath)
				}
			}

		}

		user.avatar = `http://localhost:3333/files/${avatarFilename}`

		await usersRepository.save(user)

		return user
	}
}

export default UpdateUserAvatarService