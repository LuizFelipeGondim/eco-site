import {MigrationInterface, QueryRunner, Table} from "typeorm";

export default class CreateTagForum1626121077893 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'tags_forum',
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
                        name: 'forum_id',
                        type: 'uuid',
                        isNullable: true
                    },
                ]
            }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('tags_forum')
    }

}
