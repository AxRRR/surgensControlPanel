import { Container, Section } from "@/components/ui"
import { AppStore } from "@/redux/store";
import { useSelector } from "react-redux";


export const BioUser = ({ User }: { User: any }) => {
    const userState = useSelector((store: AppStore) => store.user);
    const { 
        name,
        tag, 
        role,
        losses,
        wins,
        threeCrownWins,
        trophies,
        bestTrophies,
        donations,
        totalDonations,
        donationsReceived,
        challengeCardsWon,
        challengeMaxWins,
        tournamentCardsWon,
        tournamentBattleCount,
        warDayWins,
        clanCardsCollected,
        clan: { 
            name: nameClan 
        }
    } = User;

    // Funcion para obtener el ratio y eliminar los numeros sobrantes.
    const getRatio = (w: number, l: number) => {
        const ratio = w/l;
        return ratio.toString().slice(0, 4);
    }
 
    return (
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
                    <h1>{name} {tag}</h1>
                    <p>{nameClan}</p>
                    <p>{role}</p>
                    <p>{userState.role}</p>
                </div>
                </div>
                <div className='home__profile-Stats'>
                    <section>
                        <h3>Victorias</h3>
                        <h2>{wins}</h2>
                    </section>
                    <section>
                        <h3>V. tres coronas</h3>
                        <h2>{threeCrownWins}</h2>
                    </section>
                </div>
                <div className='home__profile-Stats'>
                    <section>
                        <h3>Máximo Trofeos</h3>
                        <h2>{bestTrophies}</h2>
                    </section>
                    <section>
                        <h3>Copas Actuales</h3>
                        <h2>{trophies}</h2>
                    </section>
                </div>
                <div className='home__profile-Stats'>
                    <section>
                        <h3>P. Perdidas</h3>
                        <h2>{losses}</h2>
                    </section>
                    <section>
                        <h3>Ratio V/P</h3>
                        <h2>{getRatio(wins, losses)}</h2>
                    </section>
                </div>
                <div className='home__profile-Stats'>
                    <section>
                        <h3>D. Actuales</h3>
                        <h2>{donations}</h2>
                    </section>
                    <section>
                        <h3>Donaciones</h3>
                        <h2>{totalDonations}</h2>
                    </section>
                </div>
                <div className='home__profile-Stats'>
                    <section>
                        <h3>D. Recibidas</h3>
                        <h2>{donationsReceived}</h2>
                    </section>
                    <section>
                        <h3>D. Totales</h3>
                        <h2>{donationsReceived}</h2>
                    </section>
                </div>
                <div className='home__profile-Stats'>
                    <section>
                        <h3>C. Desafio</h3>
                        <h2>{challengeCardsWon}</h2>
                    </section>
                    <section>
                        <h3>D.M Desafio</h3>
                        <h2>{challengeMaxWins}</h2>
                    </section>
                </div>
                <div className='home__profile-Stats'>
                    <section>
                        <h3>C. Torneos</h3>
                        <h2>{tournamentCardsWon}</h2>
                    </section>
                    <section>
                        <h3>D.M Desafio</h3>
                        <h2>{tournamentBattleCount}</h2>
                    </section>
                </div>
                <div className='home__profile-Stats'>
                    <section>
                        <h3>D.C Ganadas</h3>
                        <h2>{warDayWins}</h2>
                    </section>
                    <section>
                        <h3>C.R en clan</h3>
                        <h2>{clanCardsCollected}</h2>
                    </section>
                </div>
            </Section>
        </Container>
    )
}