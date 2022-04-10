import { Container, Section } from "@/components/ui"

interface League {
    leagueStatistics: {
        currentSeason: {
            trophies: number,
            bestTrophies: number,
        }
        previousSeason: {
            trophies: number,
            bestTrophies: number,
        },
        bestSeason: {
            trophies: number,
            bestTrophies: number,
        }
    }
    arena: {
        id: number
    }
}

export const LeagueUser = ({ LeagueInfo }: any) => {
    const { 
        leagueStatistics, 
        arena 
    }: League = LeagueInfo;
    return (
        <Container>
            <Section config={{ enable: true, flex: false, text: 'Información Temporada Actual' }}>
                <div className='home__profile-Stats'>
                    <section>
                        <h3>Copas máximas</h3>
                        {/* Si es de la arena legendaria o hacia arriba mostramos sus estadisticas */}
                        <h2>{arena.id >= 54000012 ? leagueStatistics.currentSeason.trophies : 0}</h2>
                    </section>
                    <section>
                        <h3>Copas Actuales</h3>
                        <h2>{arena.id >= 54000012 ? leagueStatistics.currentSeason.bestTrophies : 0}</h2>
                    </section>
                </div>
            </Section>
            <Section config={{ enable: true, flex: false, text: 'Información Temporada Anterior' }}>
                <div className='home__profile-Stats'>
                    <section>
                        <h3>Copas máximas</h3>
                        {/* Comprobamos que exista la propiedad previousSeason... sino, devolvemos 0 */}
                        <h2>{arena.id >= 54000012 
                            && leagueStatistics.hasOwnProperty('previousSeason') 
                            ? leagueStatistics.previousSeason.trophies 
                            : 0}
                        </h2>
                    </section>
                    <section>
                        <h3>Copas Actuales</h3>
                        <h2>{arena.id >= 54000012 
                            && leagueStatistics.hasOwnProperty('previousSeason') 
                            ? leagueStatistics.previousSeason.bestTrophies 
                            : 0}
                        </h2>
                    </section>
                </div>
            </Section>
            <Section config={{ enable: true, flex: false, text: 'Información Mejor Temporada' }}>
                <div className='home__profile-Stats'>
                    <section>
                        <h3>Copas máximas</h3>
                        <h2>{arena.id >= 54000012 
                            && leagueStatistics.hasOwnProperty('bestSeason') 
                            ? leagueStatistics.bestSeason.trophies 
                            : 0}
                        </h2>
                    </section>
                </div>
            </Section>
        </Container>
    )
}