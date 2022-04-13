import { client } from '../../utils/axios';

export const getClans = async () => {
  return await client
    .get('clans?name=Surgens')
    .then(({ data }: any) => data)
    .catch((error: any) => error);
};
export const getClan = async (clan_tag: string) => {
  return await client
    .get(`clans/%23${clan_tag.substring(1)}`)
    .then(({ data }: any) => data)
    .catch((error: any) => error);
};
export const getMembers = async (clan_tag: string) => {
  return await client
    .get(`clans/%23${clan_tag.substring(1)}`)
    .then(({ data }: any) => data)
    .catch((error: any) => error);
};
export const getSpecificUser = async (user_tag: string) => {
  return await client
    .get(`players/%23${user_tag.substring(1)}`)
    .then(({ data }: any) => data)
    .catch((error: any) => error);
};
export const getSpecificUserUpChest = async (user_tag: string) => {
  return await client
    .get(`players/%23${user_tag.substring(1)}/upcomingchests`)
    .then(({ data }: any) => data)
    .catch((error: any) => error);
};
export const getSpecificWarLog = async (clan_tag: string) => {
  return await client
    .get(`clans/%23${clan_tag.substring(1)}/currentriverrace`)
    .then(({ data }: any) => data)
    .catch((error: any) => error);
};
