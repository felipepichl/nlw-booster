import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export default class FixToFieldToClassSchedule1628535179850
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn('class_schedule', 'to ');

    await queryRunner.addColumn(
      'class_schedule',
      new TableColumn({
        name: 'to',
        type: 'number',
        isNullable: true,
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn('class_schedule', 'to');

    await queryRunner.addColumn(
      'class_schedule',
      new TableColumn({
        name: 'to ',
        type: 'number',
        isNullable: true,
      }),
    );
  }
}
