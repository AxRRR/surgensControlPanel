
import { useEffect } from 'react'
import { membersAdapter } from '../../adapters/members.adapter';
import getMembers from '../../services/services';

export const Dashboard = () =>  {

  useEffect(() => {
    // const data = await getMembers();
    // const payload = membersAdapter(data);
  }, [])

  return (
    <div>
      <h1>Bienvenido a Surgens Control Panel</h1>
    </div>
  )
}
