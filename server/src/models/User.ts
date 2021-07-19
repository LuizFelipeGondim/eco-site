import { 
    Entity, 
    Column, 
    PrimaryGeneratedColumn, 
    CreateDateColumn, 
    UpdateDateColumn, 
    OneToMany,
    JoinColumn
} from 'typeorm'
import Forum from './Forum'
import ForumComment from './ForumComment'

@Entity('users')
class User {

    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column()
    first_name: string

    @Column()
    last_name: string
    
    @Column()
    email: string

    @Column()
    password: string

    @Column()
    city: string

    @Column()
    uf: string

    @Column()
    whatsapp: string

    @Column()
    avatar: string

    @Column()
    is_staff: boolean 

    @OneToMany(() => Forum, forum => forum.author)
    forum: Forum[]

    @OneToMany(() => ForumComment, comment => comment.user)
    @JoinColumn({name: 'comment'})
    comment: ForumComment

    @CreateDateColumn()
    created_at: Date

    @UpdateDateColumn()
    updated_at: Date
    
}

export default User