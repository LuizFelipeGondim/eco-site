import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

export default class CreateNews1611799700397 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable( new Table({
            name: 'publications',
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
                    name: 'slug',
                    type: 'varchar',
                },
                {
                    name: 'situation',
                    type: 'boolean',
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

        await queryRunner.createForeignKey('publications', new TableForeignKey({
			name: 'PublicationAuthor',
			columnNames: ['user_id'],
			referencedColumnNames: ['id'],
			referencedTableName: 'users',
			onDelete: 'SET NULL',
			onUpdate: 'CASCADE',
		}))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('publications', 'PublicationAuthor')

        await queryRunner.dropTable('publications')
    }

}
