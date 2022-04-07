import { Container, Section } from "@/components/ui"


export const LeagueUser = () => {
    return (
        <Container>
            <Section config={{ enable: true, flex: false, text: 'Información Temporada Actual' }}>
                <div className='home__profile-Stats'>
                    <section>
                        <h3>Copas máximas</h3>
                        <h2>238833</h2>
                    </section>
                    <section>
                        <h3>Copas Actuales</h3>
                        <h2>288393</h2>
                    </section>
                </div>
            </Section>
            <Section config={{ enable: true, flex: false, text: 'Información Temporada Anterior' }}>
                <div className='home__profile-Stats'>
                    <section>
                        <h3>Copas máximas</h3>
                        <h2>238833</h2>
                    </section>
                    <section>
                        <h3>Copas Actuales</h3>
                        <h2>288393</h2>
                    </section>
                </div>
            </Section>
            <Section config={{ enable: true, flex: false, text: 'Información Mejor Temporada' }}>
                <div className='home__profile-Stats'>
                    <section>
                        <h3>Copas máximas</h3>
                        <h2>238833</h2>
                    </section>
                    <section>
                        <h3>Copas Actuales</h3>
                        <h2>288393</h2>
                    </section>
                </div>
            </Section>
        </Container>
    )
}