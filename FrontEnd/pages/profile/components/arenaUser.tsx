import { Container, Section } from "@/components/ui"


export const ArenaUser = () => {
    return (
        <Container>
            {/* Este si no tiene es de challenger hacia arriba */}
            <Section config={{ enable: true, flex: false, text: 'Información Arena' }}>
                <div className='home__profile-Stats'>
                    <section>
                        <h3>Liga</h3>
                        <h2>Challenger II</h2>
                    </section>
                </div>
            </Section>
        </Container>
    )
}