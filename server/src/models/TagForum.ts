import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm'
import Forum from './Forum'

@Entity('tags_forum')
class TagForum {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column()
    tag_name: string

    @Column()
    forum_id: string

    @ManyToOne(() => Forum, forum => forum.tags)
    @JoinColumn({name: 'forum_id'})
    forum: Forum
}

export default TagForum