import { Request, Response } from 'express';
import {
  getClan,
  getMembers,
  getSpecificUser,
  getSpecificUserUpChest,
  getSpecificWarLog,
} from './dao';
import { statusResolve } from '../../utils/status';
import { getAllClans } from './utils';

// TODO: Agregar todos los tipos

export const getListOfClans = async (req: Request, res: Response) => {
  const gettingClans = await getAllClans();

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
  let clan_payload = await getClan(req.query.tagname || '#Q0QGU0LR');

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

// TODO: Eliminar todos los anys

export const getListOfMembers = async (req: Request, res: Response) => {
  const tags: any = [];
  const completeListMembers: any = [];
  const gettingClans = await getAllClans();

  // Obtenemos los clanes
  // y luego pusheamos todos los tags que encuentra
  gettingClans.map(({ tag }: any) => tags.push(tag));

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
    tags.map(async (tag: string) => {
      const { memberList } = await getMembers(tag);

      // Convertimos el Array a un Objecto y pusheamos todos los miembros
      // a una unica lista junta.
      Object.assign({}, memberList);
      memberList.map((member: any) => completeListMembers.push(member));
    })
  );

  return res.status(statusResolve.success).json({
    status: true,
    memberList: completeListMembers,
  });
};

export const getSpecificMember = async (req: Request, res: Response) => {
  let member_payload = await getSpecificUser(req.query.tagname || '#R8JUPV2');

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
      req.query.tagname || '#R8JUPV2'
    ),
  });
};

export const getTopSpecificClan = async (req: Request, res: Response) => {
  // const { tagname, max, type }: { tagname: string, max: number, type: string } = req.query;
  const { tagname, max, type }: any = req.query;

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
  const nextListMember: any = [];
  memberList.map(
    (member: string, index: number) =>
      index <= parseInt(max) && nextListMember.push(member)
  );

  // Si el type sea igual a 'DESC' invertimos la lista
  // ... si se omite el parametro será ASC automaticamente.
  return res.status(statusResolve.success).json({
    status: true,
    topMembers: type === 'DESC' ? nextListMember.reverse() : nextListMember,
  });
};

export const getListOfTopClans = async(req: Request, res: Response) => {

    const { max = 10, type }: any = req.query;

    const tags: any = [];
    let completeListMembers: any = [];
    let ListOfMembers: any = [];
    const gettingClans = await getAllClans();

    // Obtenemos los clanes
    // y luego pusheamos todos los tags que encuentra
    gettingClans.map(({ tag }: any) => tags.push(tag));

    if(!tags){
        res.status(statusResolve.badRequest).json({
            status: false,
            message: 'No se pudo recuperar información. Intentalo más tarde.'
        })
    }

    // Buscamos todos los tags que arroje items
    // Recorremos con un map y una funcion anonima asincrona
    // y hacemos push a un array para devolver todo los mimebros.
    await Promise.all(
        tags.map(async(tag: any) => {
            const { memberList } = await getMembers(tag);

            // Convertimos el Array a un Objecto y pusheamos todos los miembros
            // a una unica lista junta.
            Object.assign({}, memberList);
            memberList.map((member: string) => completeListMembers.push(member))

        })
    );

    // Ordenamos los elementos por el atributo trophies
    ListOfMembers = completeListMembers.sort((fMember: any, sMember: any) => {
        if (fMember.trophies > sMember.trophies) {
            return 1;
        }
        if (fMember.trophies < sMember.trophies) {
            return -1;
        }
    }).reverse();

    // Recorremos el array para ordenar solamente el numero de elementos
    // del top, hacemos un max-1 para que no itere una extra vez.
    let nextListComplete: any = [];

    // FIXME: En el max estaba 'max-1' para que el indice 0 no afecte, buscar la solución.
    ListOfMembers
        .map((member: string, index: number) => index <= parseInt(max) && nextListComplete.push(member))

    // Si el type sea igual a 'DESC' dejamos la lista igual
    // ... si se omite la lista estara inversa.
    return res.status(statusResolve.success).json({
        status: true,
        topMembers: nextListComplete
    })
}

export const getSpecificDonationsClan = async(req: Request, res: Response) => {
    let { donationsPerWeek } = await getClan(req.query.tagname || '#Q0QGU0LR');

    if(!donationsPerWeek){
        return res.status(statusResolve.badRequest).json({
            status: false,
            message: 'Ocurrio un error al realizar la solicitud'
        })
    }

    return res.status(statusResolve.success).json({
        status: true,
        donations: donationsPerWeek
    })
}

export const getDonationsClans = async(req: Request, res: Response) => {

    const gettingClans = await getAllClans();
    const donationsByClan: any = [];

    if(!gettingClans){
        return res.status(statusResolve.badRequest).json({
            status: false,
            message: 'Ocurrio un error al realizar la solicitud'
        })
    }

    await Promise.all(
        gettingClans.map(async(clan: any) => {
            let { donationsPerWeek, name } = await getClan(clan.tag || '#Q0QGU0LR');
            donationsByClan.push({
                name,
                donationsPerWeek
            })
        })
    )

    return res.status(statusResolve.success).json({
        status: true,
        donations: donationsByClan
    })
}

export const getSpecificWar = async(req: Request, res: Response) => {
    let payload_warlog = await getSpecificWarLog(req.query.tagname || '#Q0QGU0LR');

    if(!payload_warlog){
        return res.status(statusResolve.badRequest).json({
            status: false,
            message: 'Ocurrio un error al realizar la solicitud'
        })
    }

    return res.status(statusResolve.success).json({
        status: true,
        warLog: payload_warlog
    })
}

export const getWarlogClans = async(req: Request, res: Response) => {
    const gettingClans = await getAllClans();
    const warLogByClan: any = [];

    await Promise.all(
        gettingClans.map(async(clan: any) => {
            let payload_warlog = await getSpecificWarLog(clan.tag || '#Q0QGU0LR');
            warLogByClan.push(payload_warlog)
        })
    )

    if(!warLogByClan){
        return res.status(statusResolve.badRequest).json({
            status: false,
            message: 'Ocurrio un error al realizar la solicitud'
        })
    }

    return res.status(statusResolve.success).json({
        status: true,
        warLog: warLogByClan
    })
}
