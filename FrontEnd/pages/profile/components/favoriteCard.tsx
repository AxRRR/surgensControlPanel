import { Container, Section } from "@/components/ui"



export const FavoriteCard = ({ FavoriteInfo }: { FavoriteInfo: any }) => {
    const { currentFavouriteCard: { iconUrls: { medium }, name, maxLevel } } = FavoriteInfo;
    return (
        <Container>
            <Section config={{ enable: true, flex: false, text: 'Carta Favorita' }}>
                <div className='home__profile-Stats'>
                    <section>
                        <img 
                            alt='image'
                            className='img-Card'
                            src={medium}
                        />
                    </section>
                    <section>
                        <h2>Carta Favorita</h2>
                        <h3>{name}</h3>
                        <h3>Nivel {maxLevel}</h3>
                        {/* <h2>13000/13000</h2> */}
                    </section>
                </div>
            </Section>
        </Container>
    )
}