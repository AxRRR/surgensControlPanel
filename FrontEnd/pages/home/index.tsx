import { GetServerSideProps }         from 'next'
import { Layout }                     from '@/components/layout/layout'
import { AuthScreen }                 from './components/authScreen'
import { ClansScreen }                from './components/clansScreen'
import { getAllClans, getAllTop }     from '@/services/public.services'
import { TopScreen }                  from './components/topScreen'
import { useUserLogin } from '@/hooks/useUserLogin'


const HomePage = ({ clansData, top } : { clansData: any, top: any }) => {

  // Custom hook para verificar si el user esta logueado.
  const [loading, error] = useUserLogin();

  return (
    <Layout>
      {/* {loading && <p>Cargando</p>} */}
      {loading ? <p>Cargando contenido</p> : <AuthScreen />}
      <ClansScreen 
        clans={clansData} 
      />
      <TopScreen 
        top={top} 
      />
    </Layout>
  )
}

export default HomePage;

export const getServerSideProps: GetServerSideProps = async() => {

  const { items }  = await getAllClans();
  const { topMembers } = await getAllTop(10);

  return{
    props:{
      top: topMembers,
      clansData: items,
    }
  }
}