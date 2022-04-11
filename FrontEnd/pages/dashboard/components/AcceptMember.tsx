import { Container, Section } from "@/components/ui"


export const AcceptMember = () => {
    return (
        <Container>
            <Section config={{ enable: true, flex: false, text: 'Aplicantes a Clanes' }}>
                <div className='dashboard__acceptmember'>
                    <div className='dashboard__acceptmember-info'>
                        <h1>Jayime-san</h1>
                        <h3>Copas: 2939</h3>
                    </div>
                    <div className='dashboard__actions'>
                        <button className='button__green'>Aceptar</button>
                        <button className='button__process'>Rechazar</button>
                    </div>
                </div>
                <div className='dashboard__acceptmember'>
                    <div className='dashboard__acceptmember-info'>
                        <h1>Jayime-san</h1>
                        <h3>Copas: 2939</h3>
                    </div>
                    <div className='dashboard__actions'>
                        <button className='button__green'>Aceptar</button>
                        <button className='button__process'>Rechazar</button>
                    </div>
                </div>
                <div className='dashboard__acceptmember'>
                    <div className='dashboard__acceptmember-info'>
                        <h1>Jayime-san</h1>
                        <h3>Copas: 2939</h3>
                    </div>
                    <div className='dashboard__actions'>
                        <button className='button__green'>Aceptar</button>
                        <button className='button__process'>Rechazar</button>
                    </div>
                </div>
            </Section>
        </Container>
    )
}