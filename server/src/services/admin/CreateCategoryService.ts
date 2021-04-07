import Publication from '../../models/Publication'
import Category from '../../models/Category'

import { getConnection, getRepository } from 'typeorm'

interface Request {
    categories: string[]
    publication_id: string
}

class CreateCategoryService {
    public async execute({categories, publication_id}: Request): Promise<string[]>{
        
        const categoriesRepository = getRepository(Category)
        
        categories.forEach( async (category_name: string) => {
            const createdCategory = categoriesRepository.create({
                category_name
            })
            await categoriesRepository.save(createdCategory)

            await getConnection()
                .createQueryBuilder()
                .relation(Publication, "categories")
                .of(publication_id)
                .add(createdCategory)

        });

        return categories
    }
}

export default CreateCategoryService