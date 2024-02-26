import { MigrationInterface, QueryRunner, Table, TableUnique } from "typeorm";

export class BookFavourite1708950977173 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "book_favourite",
                columns: [
                    {
                        name: "id",
                        type: "int",
                        isPrimary: true,
                        isGenerated: true,
                        generationStrategy: "increment",
                    },
                    {
                        name: "user_id",
                        type: "int",
                        isNullable: true,
                    },
                    {
                        name: "book_id",
                        type: "int",
                        isNullable: true,
                    },
                ],
                foreignKeys: [
                    {
                        columnNames: ["user_id"],
                        referencedTableName: "users",
                        referencedColumnNames: ["id"],
                        onDelete: "CASCADE"
                    },
                    {
                        columnNames: ["book_id"],
                        referencedTableName: "books",
                        referencedColumnNames: ["id"],
                        onDelete: "CASCADE"
                    }
                ],
                uniques: [
                    new TableUnique({
                       name: "user_book_unique",
                       columnNames: ["user_id", "book_id"],
                    }),
                 ],

            }),
            true          //IF NOT EXIST
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("books");
    }

}
