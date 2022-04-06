import { Layout } from "@/components/layout/layout";
import { Container, Section } from "@/components/ui";
import { useRouter } from "next/router";

const Profile = () => {
    const { query } = useRouter();
    console.log(query)
    return (
        <Layout>
            <Container>
                <Section config={{ enable: true, flex: false, text: 'Información jugador' }}>
                    <div className='home__profile'>
                    <div className='home__profile-Bio'>
                        <img 
                            alt='image'
                            src='https://i.blogs.es/2d6aab/portada-guia-mazo-clash-royale-megacaballero-cementerio/1366_2000.jpeg'
                        />
                    </div>
                    <div className='home__profile-Name'>
                        <h1>AxR #JSKD9LD</h1>
                        <p>New Surgens</p>
                        <p>Lider</p>
                        <p>Administrador</p>
                    </div>
                    </div>
                    <div className='home__profile-Stats'>
                        <section>
                            <h3>Victorias</h3>
                            <h2>2594</h2>
                        </section>
                        <section>
                            <h3>V. tres coronas</h3>
                            <h2>733</h2>
                        </section>
                    </div>
                    <div className='home__profile-Stats'>
                        <section>
                            <h3>Máximo Trofeos</h3>
                            <h2>5369</h2>
                        </section>
                        <section>
                            <h3>Copas Actuales</h3>
                            <h2>5369</h2>
                        </section>
                    </div>
                    <div className='home__profile-Stats'>
                        <section>
                            <h3>P. Perdidas</h3>
                            <h2>53697</h2>
                        </section>
                        <section>
                            <h3>Ratio V/P</h3>
                            <h2>1.20</h2>
                        </section>
                    </div>
                    <div className='home__profile-Stats'>
                        <section>
                            <h3>D. Actuales</h3>
                            <h2>2037</h2>
                        </section>
                        <section>
                            <h3>Donaciones</h3>
                            <h2>203983</h2>
                        </section>
                    </div>
                    <div className='home__profile-Stats'>
                        <section>
                            <h3>D. Recibidas</h3>
                            <h2>293308</h2>
                        </section>
                        <section>
                            <h3>D. Totales</h3>
                            <h2>203983</h2>
                        </section>
                    </div>
                    <div className='home__profile-Stats'>
                        <section>
                            <h3>C. Desafio</h3>
                            <h2>2933</h2>
                        </section>
                        <section>
                            <h3>D.M Desafio</h3>
                            <h2>10</h2>
                        </section>
                    </div>
                    <div className='home__profile-Stats'>
                        <section>
                            <h3>C. Torneos</h3>
                            <h2>29333</h2>
                        </section>
                        <section>
                            <h3>D.M Desafio</h3>
                            <h2>10</h2>
                        </section>
                    </div>
                    <div className='home__profile-Stats'>
                        <section>
                            <h3>D.C Ganadas</h3>
                            <h2>29333</h2>
                        </section>
                        <section>
                            <h3>C.R en clan</h3>
                            <h2>29393</h2>
                        </section>
                    </div>
                </Section>
            </Container>
            <Container>
                <Section config={{ enable: true, flex: false, text: 'Información clan' }}>
                    <div className='home__profile-Stats'>
                        <section>
                            <h3>Clan Tag</h3>
                            <h2>#JFKDS2</h2>
                        </section>
                        <section>
                            <h3>Nombre Clan</h3>
                            <h2>New Surgens</h2>
                        </section>
                    </div>
                </Section>
            </Container>
            {/* Este si no tiene es de challenger hacia arriba */}
            <Container>
                <Section config={{ enable: true, flex: false, text: 'Información Arena' }}>
                    <div className='home__profile-Stats'>
                        <section>
                            <h3>Liga</h3>
                            <h2>Challenger II</h2>
                        </section>
                    </div>
                </Section>
            </Container>
            <Container>
                <Section config={{ enable: true, flex: false, text: 'Información Temporada Actual' }}>
                    <div className='home__profile-Stats'>
                        <section>
                            <h3>Copas máximas</h3>
                            <h2>238833</h2>
                        </section>
                        <section>
                            <h3>Copas Actuales</h3>
                            <h2>288393</h2>
                        </section>
                    </div>
                </Section>
                <Section config={{ enable: true, flex: false, text: 'Información Temporada Anterior' }}>
                    <div className='home__profile-Stats'>
                        <section>
                            <h3>Copas máximas</h3>
                            <h2>238833</h2>
                        </section>
                        <section>
                            <h3>Copas Actuales</h3>
                            <h2>288393</h2>
                        </section>
                    </div>
                </Section>
                <Section config={{ enable: true, flex: false, text: 'Información Mejor Temporada' }}>
                    <div className='home__profile-Stats'>
                        <section>
                            <h3>Copas máximas</h3>
                            <h2>238833</h2>
                        </section>
                        <section>
                            <h3>Copas Actuales</h3>
                            <h2>288393</h2>
                        </section>
                    </div>
                </Section>
            </Container>
            <Container>
                <Section config={{ enable: true, flex: false, text: 'Información Cartas' }}>
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
                            <h3>Dragon Inf</h3>
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
            <Container>
                <Section config={{ enable: true, flex: false, text: 'Carta Favorita' }}>
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
            <Container>
                <Section config={{ enable: true, flex: false, text: 'Tus próximos cofres' }}>
                    <div className='home__profile-Stats'>
                        <section>
                            <img 
                                alt='image'
                                className='img-Card'
                                src='https://technetters.com/content/images/2021/05/Ciclo-de-cofres-clash-royale-min-1.png'
                            />
                        </section>
                        <section>
                            <h2>Próximo cofre</h2>
                            <h3>Cofre Legendaria</h3>
                        </section>
                    </div>
                    <div className='home__profile-Stats'>
                        <section>
                            <img 
                                alt='image'
                                className='img-Card'
                                src='https://technetters.com/content/images/2021/05/Ciclo-de-cofres-clash-royale-min-1.png'
                            />
                        </section>
                        <section>
                            <h2>Próximo cofre</h2>
                            <h3>Cofre Legendaria</h3>
                        </section>
                    </div>
                    <div className='home__profile-Stats'>
                        <section>
                            <img 
                                alt='image'
                                className='img-Card'
                                src='https://technetters.com/content/images/2021/05/Ciclo-de-cofres-clash-royale-min-1.png'
                            />
                        </section>
                        <section>
                            <h2>Próximo cofre</h2>
                            <h3>Cofre Legendaria</h3>
                        </section>
                    </div>
                    <div className='home__profile-Stats'>
                        <section>
                            <img 
                                alt='image'
                                className='img-Card'
                                src='https://technetters.com/content/images/2021/05/Ciclo-de-cofres-clash-royale-min-1.png'
                            />
                        </section>
                        <section>
                            <h2>Próximo cofre</h2>
                            <h3>Cofre Legendaria</h3>
                        </section>
                    </div>
                    <div className='home__profile-Stats'>
                        <section>
                            <img 
                                alt='image'
                                className='img-Card'
                                src='https://technetters.com/content/images/2021/05/Ciclo-de-cofres-clash-royale-min-1.png'
                            />
                        </section>
                        <section>
                            <h2>Próximo cofre</h2>
                            <h3>Cofre Legendaria</h3>
                        </section>
                    </div>
                </Section>
            </Container>
        </Layout>
    )
}

export default Profile;