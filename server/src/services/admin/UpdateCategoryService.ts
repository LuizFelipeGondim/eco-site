import Publication from '../../models/Publication'
import Category from '../../models/Category'

import { getConnection, getRepository } from 'typeorm'
import { response } from 'express'

interface Request {
    categories: string[]
    publication_id: string
}

class UpdateCategoryService {
    public async execute({categories, publication_id}: Request): Promise<string[]>{
        
        const categoriesRepository = getRepository(Category)
        const publicationsRepository = getRepository(Publication)
        
        const publication = await publicationsRepository.findOne({
            where: {
                id:publication_id
            }
        })

        let filteredCategories = categories

        categories.forEach((category_name: string) => {
            let equalCategory = ''
            publication.categories.forEach(category => {
                if(category.category_name == category_name){
                    equalCategory = category.category_name
                }
            })

            filteredCategories = filteredCategories.filter(cat => cat !== equalCategory)
        })

 
        //Adiciona o que tem no array que não tem na publicação
        filteredCategories.forEach( async (category_name: string) => {
            category_name.toLowerCase()
            category_name = category_name[0].toUpperCase() + category_name.substr(1)

            const categoryAlreadyCreated = await categoriesRepository.findOne({
                where: { category_name }
            })
   
            await getConnection()
                .createQueryBuilder()
                .relation(Publication, "categories")
                .of(publication_id)
                .add(categoryAlreadyCreated)
            
        })

        let removeCategories = publication.categories.map(category => category.category_name)

        publication.categories.forEach((category) => {
            let equalCategory = ''
            categories.forEach(category_name => {
                if(category_name == category.category_name){
                    equalCategory = category.category_name
                }
            })

            removeCategories = removeCategories.filter(cat => cat !== equalCategory)
        })

        //Remove o que tem na publicação mas não tem no array de edição
        removeCategories.forEach( async (category_name) => {

            const categoryAlreadyCreated = await categoriesRepository.findOne({
                where: { category_name }
            })

            await getConnection()
                .createQueryBuilder()
                .relation(Publication, "categories")
                .of(publication_id)
                .remove(categoryAlreadyCreated)
        
        })
        
        return categories
    }
}

export default UpdateCategoryService