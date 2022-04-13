import { Container, Section } from "@/components/ui"


export const LastMembers = () => {
  return (
    <Container>
        <Section config={{ enable: true, flex: false, text: 'Últimos miembros en unirse' }}>
            <div className='dashboard__listmember'>
                <h1>ElPussy_Destroyer21</h1>
                <p>Ver perfil</p>
            </div>
            <div className='dashboard__listmember'>
                <h1>ElPussy_Destroyer21</h1>
                <p>Ver perfil</p>
            </div>
            <div className='dashboard__listmember'>
                <h1>ElPussy_Destroyer21</h1>
                <p>Ver perfil</p>
            </div>
        </Section>
    </Container>
    )
}