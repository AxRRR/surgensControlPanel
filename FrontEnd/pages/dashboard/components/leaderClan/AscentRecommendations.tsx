import { Container, Section } from "@/components/ui"


export const AscentRecommendations = () => {
    return (
        <Container>
            <Section config={{ enable: true, flex: false, text: 'Miembros para ascenso' }}>
                <div className='dashboard__ascent'>
                    <h3>Recomendado para New Surgens </h3>
                    <h3>Monkey D. Luffy</h3>
                    <p>Ver información</p>
                    <h1>Recomendado por el Líder AxR</h1>
                    <div className='dashboard__actions'>
                        <button className='button__green'>Aceptar ascenso</button>
                        <button className='button__process'>Declinar ascenso</button>
                    </div>
                </div>
                <div className='dashboard__ascent'>
                    <h3>Recomendado para Surgens Beta </h3>
                    <h3>Haz23</h3>
                    <p>Ver información</p>
                    <h1>Recomendado por el Líder Rodrigo</h1>
                    <div className='dashboard__actions'>
                        <button className='button__green'>Aceptar ascenso</button>
                        <button className='button__process'>Declinar ascenso</button>
                    </div>
                </div>
                <div className='dashboard__ascent'>
                    <h3>Recomendado para Veterano</h3>
                    <h3>olivercaleb</h3>
                    <p>Ver información</p>
                    <h1>Recomendado por el Líder PkAllie</h1>
                    <div className='dashboard__actions'>
                        <button className='button__green'>Aceptar ascenso</button>
                        <button className='button__process'>Declinar ascenso</button>
                    </div>
                </div>
            </Section>
        </Container>
    )
}