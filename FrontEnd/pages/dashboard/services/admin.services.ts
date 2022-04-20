import { client } from 'axiosDefault';
import { lastestMembersTypes } from '../models/admin.models';

export const getLastestMembers = (
  role: string
): Promise<Array<lastestMembersTypes>> => {
  return client
    .post('admin/get_lastmember_registed', {
      member_role: role,
    })
    .then(({ data: { users } }) => users)
    .catch((error) => console.log(error));
};
