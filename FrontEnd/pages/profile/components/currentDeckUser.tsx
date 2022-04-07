import { Container, Section } from "@/components/ui"


export const CurrentDeckUser = () => {
    return (
        <Container>
            <Section config={{ enable: true, flex: false, text: 'Información Mazo Actual' }}>
                <div className='home__profile-Stats'>
                    <section>
                        <img 
                            alt='image'
                            className='img-Card'
                            src='https://scontent.fmex27-1.fna.fbcdn.net/v/t1.6435-9/67298394_629070820910438_7479289996675907584_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=730e14&_nc_ohc=D39ESO9vJ50AX9VXKvO&_nc_ht=scontent.fmex27-1.fna&oh=00_AT8WCAKbpSnk7spUZu-6gfr1-dq_Sgwe-UoH37wya56qJw&oe=626EDC43'
                        />
                    </section>
                    <section>
                        <h3>Cartas</h3>
                        <h3>MegaCaballero</h3>
                        <h3>Nivel 12</h3>
                        <h2>13000/13000</h2>
                    </section>
                </div>
                <div className='home__profile-Stats'>
                    <section>
                        <img 
                            alt='image'
                            className='img-Card'
                            src='https://scontent.fmex27-1.fna.fbcdn.net/v/t1.6435-9/67298394_629070820910438_7479289996675907584_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=730e14&_nc_ohc=D39ESO9vJ50AX9VXKvO&_nc_ht=scontent.fmex27-1.fna&oh=00_AT8WCAKbpSnk7spUZu-6gfr1-dq_Sgwe-UoH37wya56qJw&oe=626EDC43'
                        />
                    </section>
                    <section>
                        <h3>Cartas</h3>
                        <h3>Dragon</h3>
                        <h3>Nivel 12</h3>
                        <h2>13000/13000</h2>
                    </section>
                </div>
            </Section>
        </Container>
    )
}