import { Container, Section } from "@/components/ui"



export const TopScreen = ({ top }: { top: any }) => {
    console.log('La lista de tops', top)
    return (
        <Container>
            <Section config={{ enable: true, flex: false, text: 'Top de miembros'}}>
            {/* <div> */}
              {top.map((member: any, index: number ) => 
              <div className='topMember'>
                <div className='topMember__place'>
                  <p>{index+1}</p>
                </div>
                <div className='topMember__name'>
                  <p>{member.name}</p>
                  <span>{member.role}</span>
                </div>
                <div className='topMember__trophies'>
                  <p>{member.trophies}</p>
                </div>
                {/* <p>{member.role}</p> */}
              </div>)}
            {/* </div> */}
            </Section>
        </Container>
    )
}