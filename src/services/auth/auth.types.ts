export interface DataUser {
  member_info: {
    tag_member: string;
    name_member: string;
    email_member: string;
    password_member: string;
    role_member: string;
    verification_code: string;
  };
}

export interface User {
  tag_member: string;
  name_member: string;
  email_member: string;
  password_member: string;
  role_member: string;
  verification_code: string;
}
