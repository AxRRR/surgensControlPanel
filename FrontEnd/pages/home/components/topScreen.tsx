import { Container, Section } from "@/components/ui"



export const TopScreen = ({ top }: { top: any }) => {
    console.log('La lista de tops', top)
    return (
        <Container>
            <Section config={{ enable: true, flex: true, text: 'Top de miembros'}}>
            <div>
              {top.map((member: any, index: number ) => <div>
                <p>{index+1}. {member.name} {member.trophies}</p>
                <p>{member.role}</p>
              </div>)}
            </div>
            </Section>
        </Container>
    )
}