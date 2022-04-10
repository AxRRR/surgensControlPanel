import { Container, Section } from "@/components/ui"
import { AppStore } from "@/redux/store";
import Link from "next/link"
import { useSelector } from "react-redux";

export const AuthScreen = () => {
  const user = useSelector((store: AppStore) => store.user);

  console.log('El user de redux', user)
  
  return (
      <Container>
      {user.tag !== '' ? <Section config={{ enable: true, flex: false, text: '¡Que gusto verte de nuevo AxR!'}}>
          <div className='home__profile'>
            <div className='home__profile-Bio'>
              <img 
                    alt='image'
                    src='https://i.blogs.es/2d6aab/portada-guia-mazo-clash-royale-megacaballero-cementerio/1366_2000.jpeg'
                  />
            </div>
            <div className='home__profile-Name'>
                <h1>AxR</h1>
                <p>New Surgens</p>
                <p>Lider</p>
                <p>Administrador</p>
            </div>
          </div>
          <div>
            <div className='home__profile-Stats'>
              <section>
              <h3>Victorias</h3>
              <h2>2594</h2>
              </section>
              <section>
              <h3>V. tres coronas</h3>
              <h2>733</h2>
              </section>
            </div>
            <div className='home__profile-Stats'>
              <section>
              <h3>Máximo Trofeos</h3>
              <h2>5369</h2>
              </section>
              <section>
              <h3>Donaciones</h3>
              <h2>203983</h2>
              </section>
            </div>
          </div>
          <div className='home__footer'>
            <Link href={{
                pathname: '/profile',
                query: { tag: 'TAGDEAXR' },
              }}>
              <p>
                Ver mis estadisticas
              </p> 
            </Link>
          </div>
      </Section>
      :
      <Section config={{ enable: true, flex: true, text: '¿Aun no formas parte de nuestro clan?'}}>
          <div>
            <p>Solo los miembros de nuestros clanes tienen acceso a todo el contenido
              de nuestro sitio. 
              ¡Unete a nuestra familia ahora!</p>
          </div>
          <div>
            <Link href={{pathname: '/register'}}>
              <button className='button__red'>Registrarme</button>
            </Link>
            <Link href={{pathname: '/login'}}>
              <button className='button__green'>Ingresar</button>
            </Link>
          </div>
      </Section>}
    </Container>
  )
}