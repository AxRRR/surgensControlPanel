export interface ReportTypes {
  _id: string;
  report_user: {
    name_member: string;
  };
  report_title: string;
  report_invoice: string;
  report_createdAt: Date;
  report_status: true;
}

export interface recommendationTypes {
  _id: string;
  ascent_member: {
    name_member: string;
    _id: string;
  };
  recommended_clan: string;
  recommended_description: string;
  recommended_name: {
    name_member: string;
    _id: string;
  };
  recommended_type: string;
}
