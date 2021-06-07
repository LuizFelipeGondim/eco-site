import {MigrationInterface, QueryRunner, Table} from "typeorm";

export default class CreateTags1612148618171 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'tags',
                columns: [
                    {
                        name: 'id',
                        type: 'uuid',
                        isPrimary: true,
                        generationStrategy: 'uuid',
                        default: 'uuid_generate_v4()' 
                    },
                    {
                        name: 'tag_name',
                        type: 'varchar'
                    },
                    {
                        name: 'publication_id',
                        type: 'uuid',
                        isNullable: true
                    },
                ]
            }))
    }


    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('tags')
    }

}
