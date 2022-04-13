import { getClans } from './dao';

export const getOnlyContry = (arr: any, query: string) => {
  return arr.filter(({ location }: any) => location.name === query);
};

export const getAllClans = async () => {
  let { items } = await getClans();
  return (items = await getOnlyContry(items, 'Mexico'));
};
