import { Container, Section } from "@/components/ui"
import { faUserGroup } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export interface Clan {
      clans: [{
      tag: string,
      name: string,
      type: string,
      members: number
    }]
}

export const ClansScreen = ({ clans }: Clan) => {
    console.log('El typeof', typeof clans, clans)
    return (
        <Container>
          <Section config={{ enable: true, flex: false, text: 'Clanes de Surgens'}}>
              {
                clans.map((clan: any) => <div>
                  <p><FontAwesomeIcon icon={faUserGroup} /> {clan.name} {clan.members}/50 (estado: {clan.type})</p>
                </div>)
              }
          </Section>
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