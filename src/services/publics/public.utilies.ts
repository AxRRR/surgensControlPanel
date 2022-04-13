import { getClans } from './public.dao';
import { TypeClan } from './public.types';

export const getOnlyContry = (arr: Array<TypeClan>, query: string) => {
  return arr.filter(({ location }: any) => location.name === query);
};

export const getAllClans = async () => {
  let { items }: { items: Array<TypeClan> } = await getClans();
  return (items = await getOnlyContry(items, 'Mexico'));
};
