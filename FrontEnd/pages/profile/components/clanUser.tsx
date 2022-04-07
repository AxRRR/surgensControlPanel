import { Container, Section } from "@/components/ui"


export const ClanUser = () => {
    return (
        <Container>
            <Section config={{ enable: true, flex: false, text: 'Información clan' }}>
                <div className='home__profile-Stats'>
                    <section>
                        <h3>Clan Tag</h3>
                        <h2>#JFKDS2</h2>
                    </section>
                    <section>
                        <h3>Nombre Clan</h3>
                        <h2>New Surgens</h2>
                    </section>
                </div>
            </Section>
        </Container>
    )
}