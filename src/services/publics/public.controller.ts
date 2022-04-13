import { Request, Response } from 'express';
import {
  getClan,
  getMembers,
  getSpecificUser,
  getSpecificUserUpChest,
  getSpecificWarLog,
} from './public.dao';
import { statusResolve } from '../../utils/status';
import { getAllClans } from './public.utilies';
import { TypeTag, TypeClan, TypesTopClan, TypesTopClans, TypeMember, TypesDonations, TypesWarlog, TypeAllClan } from './public.types';

export const getListOfClans = async (req: Request, res: Response) => {
  const gettingClans: Array<TypeClan> = await getAllClans();

  if (!gettingClans) {
    return res.status(statusResolve.badRequest).json({
      status: false,
      message: 'Ocurrio un error al realizar la solicitud',
    });
  }

  return res.status(statusResolve.success).json({
    status: true,
    items: gettingClans,
  });
};

export const getSpecificClan = async (req: Request, res: Response) => {
  let clan_payload: TypeAllClan = await getClan(req.query.tagname as string || '#Q0QGU0LR');

  if (!clan_payload) {
    return res.status(statusResolve.badRequest).json({
      status: false,
      message: 'Ocurrio un error al realizar la solicitud',
    });
  }

  return res.status(statusResolve.success).json({
    status: true,
    payload: clan_payload,
  });
};

export const getListOfMembers = async (req: Request, res: Response) => {
  const tags: Array<TypeTag> = [];
  const completeListMembers: Array<TypeClan> = [];

  const gettingClans: Array<TypeClan> = await getAllClans();

  // Obtenemos los clanes
  // y luego pusheamos todos los tags que encuentra
  gettingClans.map((tag: TypeTag) => tags.push(tag));

  if (!tags) {
    res.status(statusResolve.badRequest).json({
      status: false,
      message: 'No se pudo recuperar información. Intentalo más tarde.',
    });
  }

  // Buscamos todos los tags que arroje items
  // Recorremos con un map y una funcion anonima asincrona
  // y hacemos push a un array para devolver todo los mimebros.
  await Promise.all(
    tags.map(async ({ tag }: TypeTag) => {
      const { memberList } = await getMembers(tag);

      // Convertimos el Array a un Objecto y pusheamos todos los miembros
      // a una unica lista junta.
      Object.assign({}, memberList) as TypeMember;
      memberList.map((member: TypeClan) => completeListMembers.push(member));
    })
  );

  return res.status(statusResolve.success).json({
    status: true,
    memberList: completeListMembers,
  });
};

export const getSpecificMember = async (req: Request, res: Response) => {
  let member_payload = await getSpecificUser(req.query.tagname as string || '#R8JUPV2');

  if (!member_payload) {
    return res.status(statusResolve.badRequest).json({
      status: false,
      message:
        'Ocurrio al intentar recuperar a este miembro. Intentalo más tarde.',
    });
  }

  return res.status(statusResolve.success).json({
    status: true,
    payload: member_payload,
    upcomingChest: await getSpecificUserUpChest(
      req.query.tagname as string || '#R8JUPV2'
    ),
  });
};

export const getTopSpecificClan = async (req: Request, res: Response) => {
  const { tagname, max, type } = req.query as unknown as TypesTopClan;

  let { memberList } = await getClan(tagname || '#Q0QGU0LR');

  if (!memberList) {
    return res.status(statusResolve.badRequest).json({
      status: false,
      message:
        'Ocurrio al intentar recuperar la información. Intente más tarde.',
    });
  }

  // Buscamos todos los miembros del clan
  // luego iteramos todos los miembros del array
  // pusheamos los miembros que esten en el top a otro array
  // cuando llegue al valor máximo se corta
  const nextListMember: Array<TypeMember> = [];
  memberList.map(
    (member: TypeMember, index: number) =>
      index <= max && nextListMember.push(member)
  );

  // Si el type sea igual a 'DESC' invertimos la lista
  // ... si se omite el parametro será ASC automaticamente.
  return res.status(statusResolve.success).json({
    status: true,
    topMembers: type === 'DESC' ? nextListMember.reverse() : nextListMember,
  });
};

export const getListOfTopClans = async (req: Request, res: Response) => {
  const { max = 10, type } = req.query as unknown as TypesTopClans;

  const tags: Array<TypeTag> = [];
  let completeListMembers: Array<TypeMember> = [];
  const gettingClans: Array<TypeClan> = await getAllClans();

  // Obtenemos los clanes
  // y luego pusheamos todos los tags que encuentra
  gettingClans.map((tag: TypeTag) => tags.push(tag));

  if (!tags) {
    res.status(statusResolve.badRequest).json({
      status: false,
      message: 'No se pudo recuperar información. Intentalo más tarde.',
    });
  }

  // Buscamos todos los tags que arroje items
  // Recorremos con un map y una funcion anonima asincrona
  // y hacemos push a un array para devolver todo los mimebros.
  await Promise.all(
    tags.map(async ({ tag }: TypeTag) => {
      const { memberList } = await getMembers(tag);

      // Convertimos el Array a un Objecto y pusheamos todos los miembros
      // a una unica lista junta.
      Object.assign({}, memberList) as TypeMember;
      memberList.map((member: TypeMember) => completeListMembers.push(member));
    })
  );

  // Ordenamos los elementos por el atributo trophies
  const OrderList: Array<TypeMember> = completeListMembers
    .sort((fMember, sMember) => {
      if (fMember.trophies > sMember.trophies) {
        return 1;
      }
      if (fMember.trophies < sMember.trophies) {
        return -1;
      }
      return 0;
    })
    .reverse();

  // Recorremos el array para ordenar solamente el numero de elementos
  // del top, hacemos un max-1 para que no itere una extra vez.
  const nextListComplete: Array<TypeMember> = [];

  OrderList.map(
    (member: TypeMember, index: number) =>
      index <= max - 1 && nextListComplete.push(member)
  );

  // Si el type sea igual a 'DESC' dejamos la lista igual
  // ... si se omite la lista estara inversa.
  return res.status(statusResolve.success).json({
    status: true,
    topMembers: type === 'DESC' ? nextListComplete.reverse() : nextListComplete,
  });
};

export const getSpecificDonationsClan = async (req: Request, res: Response) => {
  let { donationsPerWeek } = await getClan(req.query.tagname as string || '#Q0QGU0LR') as TypeClan;

  if (!donationsPerWeek) {
    return res.status(statusResolve.badRequest).json({
      status: false,
      message: 'Ocurrio un error al realizar la solicitud',
    });
  }

  return res.status(statusResolve.success).json({
    status: true,
    donations: donationsPerWeek,
  });
};

export const getDonationsClans = async (req: Request, res: Response) => {
  const gettingClans: Array<TypeClan> = await getAllClans();
  const donationsByClan: Array<TypesDonations> = [];

  if (!gettingClans) {
    return res.status(statusResolve.badRequest).json({
      status: false,
      message: 'Ocurrio un error al realizar la solicitud',
    });
  }

  await Promise.all(
    gettingClans.map(async (clan: TypesDonations) => {
      let { donationsPerWeek, name } = await getClan(clan.tag || '#Q0QGU0LR');
      donationsByClan.push({
        name,
        donationsPerWeek,
      });
    })
  );

  return res.status(statusResolve.success).json({
    status: true,
    donations: donationsByClan,
  });
};

export const getSpecificWar = async (req: Request, res: Response) => {
  let payload_warlog: Array<TypesWarlog> = await getSpecificWarLog(
    req.query.tagname as string || '#Q0QGU0LR'
  );

  if (!payload_warlog) {
    return res.status(statusResolve.badRequest).json({
      status: false,
      message: 'Ocurrio un error al realizar la solicitud',
    });
  }

  return res.status(statusResolve.success).json({
    status: true,
    warLog: payload_warlog,
  });
};

export const getWarlogClans = async (req: Request, res: Response) => {
  const gettingClans: Array<TypeClan> = await getAllClans();
  const warLogByClan: Array<TypesWarlog> = [];

  await Promise.all(
    gettingClans.map(async (clan: TypeClan) => {
      let payload_warlog = await getSpecificWarLog(clan.tag || '#Q0QGU0LR');
      warLogByClan.push(payload_warlog);
    })
  );

  if (!warLogByClan) {
    return res.status(statusResolve.badRequest).json({
      status: false,
      message: 'Ocurrio un error al realizar la solicitud',
    });
  }

  return res.status(statusResolve.success).json({
    status: true,
    warLog: warLogByClan,
  });
};
