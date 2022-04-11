import { Container, Section } from "@/components/ui"


export const LastestNews = () => {
    return (
        <Container>
            <Section config={{ enable: true, flex: true, text: 'Ultimas noticias'}}>
              <div className='home__news'>
                <img 
                  alt='image'
                  src='https://i.blogs.es/2d6aab/portada-guia-mazo-clash-royale-megacaballero-cementerio/1366_2000.jpeg'
                />
                <p>¿Como aplicar a nuestros clanes?</p>
                <footer>
                  <p>Por PkAllie a las 12:00 P.M</p>
                </footer>
              </div>
              <div className='home__news'>
                <img 
                  alt='image'
                  src='https://www.actualidadiphone.com/wp-content/uploads/2016/03/Clash-Royale-768x370.jpg.webp'
                />
                <p>¡Ha comenzado la Guerra de Clanes!</p>
                <footer>
                  <p>Por Dennis a las 12:00 P.M</p>
                </footer>
              </div>
          </Section>
        </Container>
    )
}