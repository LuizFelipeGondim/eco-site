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
import Forum from './Forum'
import TagForum from './TagForum'

import User from './User'

@Entity('forum_comments')
class ForumComment {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column()
    user_id: string

    @Column()
    forum_id: string

    @ManyToOne(() => Forum, forum => forum.comments)
    @JoinColumn({name: 'forum_id'})
    forum: Forum

    @ManyToOne(() => User, user => user.comment)
    @JoinColumn({name: 'user_id'})
    user: User

    @Column()
    content: string

    @CreateDateColumn()
    created_at: Date

}

export default ForumComment