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

@Entity('forum')
class Forum {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column()
    user_id: string

    @ManyToOne(() => User, user => user.forum)
    @JoinColumn({name: 'user_id'})
    author: User

    @Column()
    title: string

    @Column()
    content: string

    @Column()
    slug: string

    @Column()
    resolved: boolean 

    @CreateDateColumn()
    created_at: Date

    @UpdateDateColumn()
    updated_at: Date

}

export default Forum