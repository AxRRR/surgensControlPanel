import { Container, Section } from "@/components/ui"

export const AuthScreen = ({ isAuthenticated = true } : { isAuthenticated: boolean }) => {
    return (
        <Container>
        {isAuthenticated ? <Section config={{ enable: true, flex: true, text: '¡Que gusto verte de nuevo AxR!'}}>
            <div className='profileimage'>
            <img 
                  alt='image'
                  src='https://i.blogs.es/2d6aab/portada-guia-mazo-clash-royale-megacaballero-cementerio/1366_2000.jpeg'
                  className='imagentest'
                />
            </div>
            <div>
                <h1>AxR</h1>
                <p>New Surgens</p>
                <p>Lider</p>
                <p>Administrador</p>
              {/* <button className='button__red'>Registrarme</button> */}
              {/* <button className='button__green'>Ingresar</button> */}
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
              <button className='button__red'>Registrarme</button>
              <button className='button__green'>Ingresar</button>
            </div>
        </Section>}
      </Container>
    )
}