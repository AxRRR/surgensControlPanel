import { useSelector } from 'react-redux'
import { AppStore } from '@/redux/store'
import { Layout } from '@/components/layout/layout'
import { Container, Section } from '@/components/ui'

export default function Home() {
  // const dispatch = useDispatch();
  const user = useSelector((store: AppStore) => store.user);

  // useEffect(() => {
  // }, [])

  console.log(user)

  return (
    <Layout>
      <Container>
        <Section config={{ enable: true, flex: true, text: '¿Aun no formas parte de nuestro clan?'}}>
            <div>
              <p>Solo los miembros de nuestros clanes tienen acceso a todo el contenido
                de nuestro sitio. 
                ¡Unete a nuestra familia ahora!</p>
            </div>
            <div>
              <button className='button__red'>Registrarme</button>
              <button className='button__green'>Ingresar</button>
            </div>
        </Section>
      </Container>
      <Container>
        <Section config={{ enable: true, flex: false, text: 'Clanes de Surgens'}}>
            <div>
              <p>New Surgens 47/50</p>
            </div>
            <div>
              <p>Surgens Beta 47/50</p>
            </div>
        </Section>
        <Section config={{ enable: true, flex: false, text: 'Ultimas noticias'}}>
            <div>
              <p>New Surgens 47/50</p>
            </div>
            <div>
              <p>Surgens Beta 47/50</p>
            </div>
        </Section>
      </Container>
    </Layout>
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