import { Container, Section } from "@/components/ui"


export const ListOfMembers = () => {
    return (
        <Container>
            <Section config={{ enable: true, flex: false, text: 'Lista de los miembros' }}>
                <div className='dashboard__listmember'>
                    <input placeholder='Buscar especifico miembro' />
                    <h1>AxR</h1>
                    <p>Ver perfil</p>
                    <h1>Rodrigo</h1>
                    <p>Ver perfil</p>
                    <h1>Al_ce_lop</h1>
                    <p>Ver perfil</p>
                    <h1>Nilware</h1>
                    <p>Ver perfil</p>
                    <button>Cargar más (+20)</button>
                </div>
            </Section>
        </Container>
    )
}