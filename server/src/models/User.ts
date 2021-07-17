import { 
    Entity, 
    Column, 
    PrimaryGeneratedColumn, 
    CreateDateColumn, 
    UpdateDateColumn, 
    OneToMany
} from 'typeorm'
import Forum from './Forum'

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

    @CreateDateColumn()
    created_at: Date

    @UpdateDateColumn()
    updated_at: Date
    
}

export default User