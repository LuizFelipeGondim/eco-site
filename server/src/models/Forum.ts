import { 
    Column, 
    CreateDateColumn, 
    Entity, 
    JoinColumn, 
    ManyToOne, 
    OneToMany, 
    PrimaryGeneratedColumn, 
    UpdateDateColumn 
} from 'typeorm'
import ForumComment from './ForumComment'
import TagForum from './TagForum'

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

    @OneToMany(() => TagForum, tags => tags.forum)
    @JoinColumn()
    tags: TagForum[]

    @OneToMany(() => ForumComment, comments => comments.forum)
    @JoinColumn()
    comments: ForumComment[]

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