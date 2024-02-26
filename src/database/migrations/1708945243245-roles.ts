import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class Roles1708945243245 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {  //se ejecuta para agregar tabla
        await queryRunner.createTable(
            new Table({
                name: "roles",
                columns: [
                    {
                        name: "id",
                        type: "int",
                        isPrimary: true,
                        isGenerated: true,
                        generationStrategy: "increment",
                    },
                    {
                        name: "name",
                        type: "varchar",
                        length: "50",
                    },
                ],
            }),
            true          //IF NOT EXIST
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {     //se ejecuta para revertir cambios si nos equivocamos
        await queryRunner.dropTable("roles");      //Eliminar tabla
    }

}
