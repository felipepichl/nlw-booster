import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export default class AddProjectFieldsToUsers1628111917705
  implements MigrationInterface {
  private columns(): TableColumn[] {
    const column1 = new TableColumn({
      name: 'avatar_url',
      type: 'varchar',
      isNullable: true,
    });

    const column2 = new TableColumn({
      name: 'bio',
      type: 'varchar',
      isNullable: true,
    });

    const column3 = new TableColumn({
      name: 'whatsapp',
      type: 'varchar',
      isNullable: true,
    });

    const columns: TableColumn[] = [];

    columns.push(column1, column2, column3);

    return columns;
  }

  public async up(queryRunner: QueryRunner): Promise<void> {
    const columns = this.columns();

    await queryRunner.addColumns('users', columns);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    const columns = this.columns();

    await queryRunner.dropColumns('users', columns);
  }
}
