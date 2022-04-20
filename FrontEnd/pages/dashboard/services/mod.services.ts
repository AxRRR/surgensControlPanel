import { client } from 'axiosDefault';
import { recommendationTypes, ReportTypes } from '../models/mod.models';

export const getReports = (role: string): Promise<Array<ReportTypes>> => {
  return client
    .post('mod/get_reports', {
      member_role: role,
    })
    .then(({ data: { message } }) => message)
    .catch((error) => console.log(error));
};

export const getRecommendatios = (role: string): Promise<Array<recommendationTypes>> => {
  return client
    .post('global/recommended/get_all', {
        member_role: role,
    })
    .then(({ data: { data } }) => data)
    .catch((error) => console.log(error));
};
