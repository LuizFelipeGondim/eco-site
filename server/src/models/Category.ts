import { 
    Column, 
    Entity, 
    JoinTable, 
    ManyToMany, 
    PrimaryGeneratedColumn 
} from 'typeorm'

import Publication from './Publication'

@Entity('categories')
class Category {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column()
    category_name: string

    @ManyToMany(() => Publication, publication => publication.categories)
    @JoinTable({name: 'publications_categories'})
    publications: Publication[]

}

export default Category