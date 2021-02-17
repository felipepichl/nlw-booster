import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export default class createPointItems1610485107439
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'points_items_items',
        columns: [
          {
            name: 'id',
            type: 'integer',
            unsigned: true,
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment',
          },
          {
            name: 'pointsId',
            type: 'integer',
          },
          {
            name: 'itemsId',
            type: 'integer',
          },
          // {
          //   name: 'created_at',
          //   type: 'timestamp',
          //   default: 'now()',
          // },
          // {
          //   name: 'updated_at',
          //   type: 'timestamp',
          //   default: 'now()',
          // },
        ],

        foreignKeys: [
          {
            name: 'Point',
            columnNames: ['pointsId'],
            referencedTableName: 'points',
            referencedColumnNames: ['id'],
            onUpdate: 'CASCADE',
            onDelete: 'CASCADE',
          },
          {
            name: 'Items',
            columnNames: ['itemsId'],
            referencedTableName: 'items',
            referencedColumnNames: ['id'],
            onUpdate: 'CASCADE',
            onDelete: 'CASCADE',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('points_items_items');
  }
}
