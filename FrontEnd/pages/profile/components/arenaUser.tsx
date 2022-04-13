import { Container, Section } from "@/components/ui"


export const ArenaUser = ({ ArenaInfo }: { ArenaInfo: any }) => {
    const { arena: { name } } = ArenaInfo;
    return (
        <Container>
            <Section config={{ enable: true, flex: false, text: 'Información Arena' }}>
                <div className='home__profile-Stats'>
                    <section>
                        <h3>Arena</h3>
                        <h2>{name}</h2>
                    </section>
                </div>
            </Section>
        </Container>
    )
}