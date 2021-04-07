import {MigrationInterface, QueryRunner} from "typeorm";

export default class RelationNewsTag1612492314380 implements MigrationInterface {
    name = 'RelationNewsTag1612492314380'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "publications_tags" ("publicationsId" uuid NOT NULL, "tagsId" uuid NOT NULL, CONSTRAINT "PK_d365fb32048db98221ac8537ce2" PRIMARY KEY ("publicationsId", "tagsId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_582fa57d7772a6b79efdaa4e53" ON "publications_tags" ("publicationsId") `);
        await queryRunner.query(`CREATE INDEX "IDX_7d64a60f90ba81b7ee3cb02dc2" ON "publications_tags" ("tagsId") `);
        await queryRunner.query(`ALTER TABLE "publications_tags" ADD CONSTRAINT "FK_582fa57d7772a6b79efdaa4e538" FOREIGN KEY ("publicationsId") REFERENCES "publications"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "publications_tags" ADD CONSTRAINT "FK_7d64a60f90ba81b7ee3cb02dc24" FOREIGN KEY ("tagsId") REFERENCES "tags"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "publications_tags" DROP CONSTRAINT "FK_7d64a60f90ba81b7ee3cb02dc24"`);
        await queryRunner.query(`ALTER TABLE "publications_tags" DROP CONSTRAINT "FK_582fa57d7772a6b79efdaa4e538"`);
        await queryRunner.query(`DROP INDEX "IDX_7d64a60f90ba81b7ee3cb02dc2"`);
        await queryRunner.query(`DROP INDEX "IDX_582fa57d7772a6b79efdaa4e53"`);
        await queryRunner.query(`DROP TABLE "publications_tags"`);
    }

}
