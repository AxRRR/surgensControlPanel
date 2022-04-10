import { Container, Section } from "@/components/ui"


export const CardsUser = ({ CardsInfo }: any) => {
    const { cards } = CardsInfo;
    return (
        <Container>
            <Section config={{ enable: true, flex: false, text: 'Información Cartas' }}>
            {cards.map((card: any) => <div className='home__profile-Stats' key={card.id}>
                    <section>
                        <img 
                            alt='image'
                            className='img-Card'
                            src={card.iconUrls.medium}
                        />
                    </section>
                    <section>
                        <h3>Carta</h3>
                        <h3>{card.name}</h3>
                        <h3>Nivel {card.level}</h3>
                        <h2>{card.count}/13000</h2>
                    </section>
                </div>)}
            </Section>
        </Container>
    )
}