
import { useEffect } from 'react'
import type { GetServerSideProps, NextPage } from 'next'
import getMembers from '../services/services'
import { membersAdapter } from '../adapters/members.adapter'
import { useDispatch, useSelector } from 'react-redux'
import { createMemberList } from '../redux/states/members'

export default function Home() {
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(createMemberList((props)));
  // }, [])

  return (
    <div>
      <h1>Bienvenido a Surgens Control Panel</h1>
    </div>
  )
}

// export const getServerSideProps: GetServerSideProps = async() => {

//   const data = await getMembers();
//   const payload = membersAdapter(data);

//   return{
//     props:{
//       payload
//     }
//   }
// }