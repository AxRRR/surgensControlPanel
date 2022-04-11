import { Container, Section } from "@/components/ui"


export const LastestReports = () => {
    return (
        <Container>
            <Section config={{ enable: true, flex: false, text: 'Incidencias' }}>
                <div className='dashboard__reports'>
                    <h1>N° J3483YL - Autor: AleksandarRuut</h1>
                    <h3>Objetivos de mes</h3>
                    <p>No se lograron concretar los objetivos de mes de Marzo...</p>
                    <button className='button__green'>Revisar incidencia</button>
                </div>
                <div className='dashboard__reports'>
                    <h1>N° LE483Y9 - Autor: Dennis</h1>
                    <h3>Guerra de Clanes Surgens Beta</h3>
                    <p>No se logro terminar en primer lugar en la guerra de clanes...</p>
                    <button className='button__green'>Revisar incidencia</button>
                </div>
            </Section>
        </Container>
    )
}