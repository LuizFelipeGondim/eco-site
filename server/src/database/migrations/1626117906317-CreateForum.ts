import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

export class CreateForum1626117906317 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable( new Table({
            name: 'forum',
            columns: [
                {
                    name: 'id',
                    type: 'uuid',
                    isPrimary: true,
                    generationStrategy: 'uuid',
                    default: 'uuid_generate_v4()' 
                },
                {
                    name: 'title',
                    type: 'varchar'
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
                    name: 'slug',
                    type: 'varchar',
                },
                {
                    name: 'resolved',
                    type: 'boolean',
                    default: false
                },
                {
                    name: 'created_at',
                    type: 'timestamp',
                    default: 'now()',
                },
                {
                    name: 'updated_at',
                    type: 'timestamp',
                    default: 'now()',
                },
            ]
        }))

        await queryRunner.createForeignKey('forum', new TableForeignKey({
			name: 'ForumAuthor',
			columnNames: ['user_id'],
			referencedColumnNames: ['id'],
			referencedTableName: 'users',
			onDelete: 'SET NULL',
			onUpdate: 'CASCADE',
		}))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('forum', 'ForumAuthor')

        await queryRunner.dropTable('forum')
    }

}
