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
            category_name.toLowerCase()
            category_name = category_name[0].toUpperCase() + category_name.substr(1)

            const categoryAlreadyCreated = await categoriesRepository.findOne({
                where: { category_name }
            })

            if (!categoryAlreadyCreated){

                const createdCategory = categoriesRepository.create({
                    category_name,
                })

                await categoriesRepository.save(createdCategory)
    
                await getConnection()
                    .createQueryBuilder()
                    .relation(Publication, "categories")
                    .of(publication_id)
                    .add(createdCategory)

            } else {

                await getConnection()
                    .createQueryBuilder()
                    .relation(Publication, "categories")
                    .of(publication_id)
                    .add(categoryAlreadyCreated)
            }
        });

        return categories
    }
}

export default CreateCategoryService