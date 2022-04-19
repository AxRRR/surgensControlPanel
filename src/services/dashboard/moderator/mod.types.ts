export interface TypesUpdate {
  post_text: string;
  post_title: string;
  post_img: string;
  post_createdAt: Date;
}

export interface TypesReports {
  report_user: string;
  report_description: string;
  report_title: string;
  report_invoice: string;
  report_createdAt: Date;
  report_status: boolean;
}

export interface TypesTask {
  task_title: string;
  task_description: string;
  task_createAt?: Date;
  task_invoice?: string;
  task_status: boolean;
}
