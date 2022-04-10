import { Container, Section } from "@/components/ui"


export const CurrentDeckUser = ({ DeckInfo }: any) => {
    const { currentDeck } = DeckInfo;
    return (
        <Container>
            <Section config={{ enable: true, flex: false, text: 'Información Mazo Actual' }}>
                {currentDeck.map((card: any) => <div key={card.id} className='home__profile-Stats'>
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