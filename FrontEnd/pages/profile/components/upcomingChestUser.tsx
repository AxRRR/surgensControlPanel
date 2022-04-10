import { Container, Section } from "@/components/ui"


export const UpcomingChestUser = ({ UpcomingChest }: { UpcomingChest: any }) => {
    const { items } = UpcomingChest;
    return (
        <Container>
            <Section config={{ enable: true, flex: false, text: 'Tus próximos cofres' }}>
                {items.map((chest: any) => <div key={chest.index} className='home__profile-Stats'>
                    <section>
                        {/* Pendiente por poner imagenes dinamicas */}
                        <img 
                            alt='image'
                            className='img-Card'
                            src='https://technetters.com/content/images/2021/05/Ciclo-de-cofres-clash-royale-min-1.png'
                        />
                    </section>
                    <section>
                        <h3>Dentro de</h3>
                        <h2>{chest.index+1} cofres</h2>
                        <h3>un {chest.name}</h3>
                    </section>
                </div>)}
            </Section>
        </Container>
    )
}