import { client } from '../../utils/axios';
import axios from 'axios';

  // export const getClans = async() => {
  //   return await axios
  //     .get('clans?name=Surgens')
  //     .then(({ data }) => data)
  //     .catch((error) => error);
  // };

  // export const getClan = async(clan_tag: string) => {
  //   return await axios
  //     .get(`clans/%23${clan_tag.substring(1)}`)
  //     .then(({ data }) => data)
  //     .catch((error) => error);
  // },
  // async getMembers(clan_tag: string) {
  //   return await axios
  //     .get(`clans/%23${clan_tag.substring(1)}`)
  //     .then(({ data }) => data)
  //     .catch((error) => error);
  // },
  export const getSpecificUser = async(user_tag: any) => {
    return await client
      .get(`players/%23${user_tag.substring(1)}`)
      .then(({ data }: any) => data)
      .catch((error: any) => error);
  };
  export const getSpecificUserUpChest = async(user_tag: any) => {
    return await client
      .get(`players/%23${user_tag.substring(1)}/upcomingchests`)
      .then(({ data }: any) => data)
      .catch((error: any) => error);
  };
  // async getSpecificWarLog(clan_tag: string) {
  //   return await axios
  //     .get(`clans/%23${clan_tag.substring(1)}/currentriverrace`)
  //     .then(({ data }) => data)
  //     .catch((error) => error);
  // },
