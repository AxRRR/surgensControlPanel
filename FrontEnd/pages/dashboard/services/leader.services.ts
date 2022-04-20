import { client } from 'axiosDefault';
import { objectivesTypes } from '../models/leader.models';

export const getObjectives = (
  role: string
): Promise<objectivesTypes> => {
  return client
    .post('leader/get_objectives?clan=Surgens Beta', {
      member_role: role,
    })
    .then(({ data: { data } }) => data)
    .catch((error) => console.log(error));
};
