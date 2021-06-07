import { 
    Column, 
    CreateDateColumn, 
    Entity, 
    JoinColumn, 
    JoinTable, 
    ManyToMany, 
    ManyToOne, 
    PrimaryGeneratedColumn, 
    UpdateDateColumn 
} from 'typeorm'

import Category from './Category'
import User from './User'

@Entity('publications')
class Publication {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column()
    user_id: string

    @ManyToOne(() => User)
    @JoinColumn({name: 'user_id'})
    author: User

    @Column()
    title: string

    @Column()
    subtitle: string

    @Column()
    content: string

    @Column()
    main_image: string

    @ManyToMany(type => Category, category => category.publications, {
        eager: true
    })
    @JoinTable({name: 'publications_categories'})
    categories: Category[]

    @CreateDateColumn()
    created_at: Date

    @UpdateDateColumn()
    updated_at: Date

}

export default Publication