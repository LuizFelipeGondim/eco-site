import {MigrationInterface, QueryRunner, TableColumn} from "typeorm";

export default class AddIsStaffFieldToUsers1611797151330 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn('users', new TableColumn({
            name: 'is_staff',
            type: 'boolean',
            default: false,
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumn('users', 'is_staff')
    }

}
