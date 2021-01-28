import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

export default class CreateNews1611799700397 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable( new Table({
            name: 'news',
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
                    name: 'subtitle',
                    type: 'varchar'
                },
                {
                    name: 'content',
                    type: 'varchar'
                },
                {
                    name: 'main_image',
                    type: 'varchar'
                },
                {
                    name: 'user_id',
                    type: 'uuid',
                    isNullable: true
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
                }
            ]
        }))

        await queryRunner.createForeignKey('news', new TableForeignKey({
			name: 'NewsAuthor',
			columnNames: ['user_id'],
			referencedColumnNames: ['id'],
			referencedTableName: 'users',
			onDelete: 'SET NULL',
			onUpdate: 'CASCADE',
		}))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('news', 'NewsAuthor')

        await queryRunner.dropTable('news')
    }

}
