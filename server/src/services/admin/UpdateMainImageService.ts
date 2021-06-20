import { getRepository } from 'typeorm'
import path from 'path'
import fs from 'fs'

import uploadConfig from '../../config/upload'
import Publication from '../../models/Publication'

interface Request {
	publication_id: string
	imageFilename: string
}

class UpdateMainImageService {
	public async execute({ publication_id, imageFilename }: Request): Promise<Publication> {
		const publicationsRepository = getRepository(Publication)

		const publication = await publicationsRepository.findOne(publication_id)

		if (!publication) {
			throw new Error("publication don't exists.")
		}

		if (publication.main_image) {
            // Deletar imagem anterior
            
            const [, filename] = publication.main_image.split('/files/')

			const publicationImageFilePath = path.join(uploadConfig.directory, filename)
			const publicationImageFileExists = await fs.promises.stat(publicationImageFilePath)

			if (publicationImageFileExists) {
				await fs.promises.unlink(publicationImageFilePath)
			}

        }

		publication.main_image = `http://localhost:3333/files/${imageFilename}`

		await publicationsRepository.save(publication)

		return publication
	}
}

export default UpdateMainImageService