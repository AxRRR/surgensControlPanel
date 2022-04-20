import { Auth } from '../../auth/auth.model';
import { Recomendations } from '../globals/recommendation.model';
import { TypesPropUser } from './admin.types';

export const updateUser = (id: string, props: TypesPropUser) => {
  return Auth.findByIdAndUpdate(id, props)
    .then((user: any) => user)
    .catch(() => 'No se pudo encontrar a este usuario');
};

export const deleteUser = (id: string) => {
  return Auth.findByIdAndDelete(id)
    .then((user: any) => user)
    .catch(() => 'No se pudo encontrar a este usuario');
};

export const getLastUsers = () => {
  return Auth.find()
    .sort({ createdAt: 1 })
    .limit(3)
    .select('tag_member')
    .select('name_member')
    .select('verification_code')
    .then((user: any) => user)
    .catch(() => 'No se pudo encontrar a este usuario');
};

export const getAllRecomendations = async () => {
  return await Recomendations.find()
    .populate({
      path: 'ascent_member',
      select: 'name_member',
    })
    .populate({
      path: 'recommended_name',
      select: 'name_member',
    });
};
