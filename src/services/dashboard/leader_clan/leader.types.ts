export interface ReciveObjectives {
  objective_user: string;
  objective_clan: string;
  objective_createAt: Date;
  objective_invoice: string;
  objective_tasks?: Array<string>;
}

export interface ReciveTasks {
  _id?: string,
  task_title: string;
  task_description: string;
  task_createAt: Date;
  task_invoice: string;
  task_status: boolean;
}
