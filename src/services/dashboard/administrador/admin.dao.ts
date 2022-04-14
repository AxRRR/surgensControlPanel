import { Auth } from '../../auth/auth.model';
import { TypesPropUser } from './admin.types';

export const updateUser = (id: string, props: TypesPropUser) => {
  return Auth.findByIdAndUpdate(id, props)
    .then((user: any) => user)
    .catch(() => 'No se pudo encontrar a este usuario');
};

export const deleteUser = (id: string, props: TypesPropUser) => {
  return Auth.findByIdAndDelete(id, props)
    .then((user: any) => user)
    .catch(() => 'No se pudo encontrar a este usuario');
};

export const getLastUsers = () => {
  return Auth.find().sort({ createdAt: 1 }).limit(3)
    .then((user: any) => user)
    .catch(() => 'No se pudo encontrar a este usuario');
};
