import { 
    Column, 
    CreateDateColumn, 
    Entity, 
    JoinColumn, 
    ManyToOne, 
    PrimaryGeneratedColumn, 
    UpdateDateColumn 
} from 'typeorm'

import User from './User'

@Entity('news')
class News {
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

    @CreateDateColumn()
    created_at: Date

    @UpdateDateColumn()
    updated_at: Date

}