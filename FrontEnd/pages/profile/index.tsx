import { Layout }               from "@/components/layout/layout";
import { Container }            from "@/components/ui";
import { useUserLogin }         from "@/hooks/useUserLogin";
import { AppStore }             from "@/redux/store";
import { useRouter }            from "next/router";
import { 
    Fragment, 
    useEffect, 
    useState 
}                               from "react";
import { useSelector }          from "react-redux";
import { ArenaUser }            from "./components/arenaUser";
import { BioUser }              from "./components/bioUser";
import { CardsUser }            from "./components/cardsUser";
import { ClanUser }             from "./components/clanUser";
import { CurrentDeckUser }      from "./components/currentDeckUser";
import { FavoriteCard }         from "./components/favoriteCard";
import { LeagueUser }           from "./components/leagueUser";
import { UpcomingChestUser }    from "./components/upcomingChestUser";
import { getProfile }           from "./services/profile.services";



const Profile = () => {
    const { asPath } = useRouter();
    const [userMount, setUserMount] = useState(false)
    const [userData, setUserData] = useState({})
    const [userUpcomingChest, setUserUpcomingChest] = useState({})
    const [loading, error] = useUserLogin();
    const user = useSelector((store: AppStore) => store.user);

    useEffect(() => {
        const setUser = async() => {
            const { data } = await getProfile(asPath.slice(13));
            setUserData(data.payload);
            setUserUpcomingChest(data.upcomingChest);
            setUserMount(true);
        }
        setUser();
    }, [])
    
    return (
        <Layout>
            {/* Solo disponible si el tag del user y el query es igual
                o si el user es mod, admin o colider               */}
            {userMount && user.role !== '' || user.role === 'Mod' && user.tag.slice(1) === asPath.slice(13) 
            ? <Fragment>
                <BioUser User={userData}                                />
                <ClanUser ClanInfo={userData}                           />
                <LeagueUser LeagueInfo={userData}                         />
                <ArenaUser ArenaInfo={userData}                         />
                <CardsUser CardsInfo={userData}                         />
                <CurrentDeckUser DeckInfo={userData}                    />
                <FavoriteCard FavoriteInfo={userData}                   />
                <UpcomingChestUser UpcomingChest={userUpcomingChest}    />
            </Fragment>
            : <Container>
                <p>No tienes acceso a este recurso</p>    
            </Container>}
        </Layout>
    )
}

export default Profile;