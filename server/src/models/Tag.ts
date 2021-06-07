import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm'
import Publication from './Publication'

@Entity('tags')
class Tag {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column()
    tag_name: string

    @Column()
    publication_id: string

    @ManyToOne(() => Publication)
    @JoinColumn({name: 'publication_id'})
    post: Publication
}

export default Tag