interface ICreateClassSchedule {
  schedule_item: {
    week_day: number;
    from: number;
    to: number;
  }[];
  class_id: string;
}

export { ICreateClassSchedule };
