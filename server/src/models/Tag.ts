import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity('tags')
class Tag {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column()
    tag_name: string
}

export default Tag