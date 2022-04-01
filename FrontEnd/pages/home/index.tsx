import { useSelector } from 'react-redux'
import { AppStore } from '@/redux/store'
import { Layout } from '@/components/layout/layout'
import { Container, Section } from '@/components/ui'
import { AuthScreen } from './components/authScreen'
import { Clan, ClansScreen } from './components/clansScreen'
import { GetServerSideProps } from 'next'
import getMembers, { getAllClans, getAllTop } from '@/services/public.services'
import { membersAdapter } from '@/adapaters/members.adapter'
import { clansAdapter } from '@/adapaters/clans.adapter'
import { TopScreen } from './components/topScreen'

const HomePage = ({clansData, top} : { clansData: any, top: any }) => {
  // const dispatch = useDispatch();
  const user = useSelector((store: AppStore) => store.user);

  // useEffect(() => {
  // }, [])

//   console.log(payload)

  return (
    <Layout>
      <AuthScreen />
      <ClansScreen clans={clansData} />
      <TopScreen top={top} />
    </Layout>
  )
}

export default HomePage;

export const getServerSideProps: GetServerSideProps = async() => {

  const { items }  = await getAllClans();
  const { topMembers } = await getAllTop(10);
  // clansAdapter(items)
//   const payload = membersAdapter(data);

  return{
    props:{
      top: topMembers,
      clansData: items,
    }
  }
}