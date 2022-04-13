import { getClans } from './dao';
import { TypeClan } from './types';

export const getOnlyContry = (arr: Array<TypeClan>, query: string) => {
  return arr.filter(({ location }: any) => location.name === query);
};

export const getAllClans = async () => {
  let { items }: { items: Array<TypeClan> } = await getClans();
  return (items = await getOnlyContry(items, 'Mexico'));
};
