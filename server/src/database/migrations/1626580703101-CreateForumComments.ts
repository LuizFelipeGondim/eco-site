import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

export default class CreateForumComments1626580703101 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable( new Table({
            name: 'forum_comments',
            columns: [
                {
                    name: 'id',
                    type: 'uuid',
                    isPrimary: true,
                    generationStrategy: 'uuid',
                    default: 'uuid_generate_v4()' 
                },
                {
                    name: 'content',
                    type: 'varchar'
                },
                {
                    name: 'user_id',
                    type: 'uuid',
                    isNullable: true
                },
                {
                    name: 'forum_id',
                    type: 'uuid',
                    isNullable: true
                },
                {
                    name: 'created_at',
                    type: 'timestamp',
                    default: 'now()',
                },
            ]
        }))

        await queryRunner.createForeignKey('forum_comments', new TableForeignKey({
			name: 'CommentUser',
			columnNames: ['user_id'],
			referencedColumnNames: ['id'],
			referencedTableName: 'users',
			onDelete: 'CASCADE',
			onUpdate: 'CASCADE',
		}))

        await queryRunner.createForeignKey('forum_comments', new TableForeignKey({
			name: 'ForumId',
			columnNames: ['forum_id'],
			referencedColumnNames: ['id'],
			referencedTableName: 'forum',
			onDelete: 'CASCADE',
			onUpdate: 'CASCADE',
		}))
    }
    

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('forum_comments', 'ForumId')
        await queryRunner.dropForeignKey('forum_comments', 'CommentUser')

        await queryRunner.dropTable('forum_comments')
    }

}
