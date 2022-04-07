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
import { getProfile } from "./services/profile.services";



const Profile = () => {
    const [userData, setUserData] = useState({})
    const { query } = useRouter();
    const [loading, error] = useUserLogin();
    const user = useSelector((store: AppStore) => store.user);
    // console.log('el querystring y el user de redux', query, user)
    // console.log('#R35'.slice(1))


    useEffect(() => {
        const setUser = async() => {
            const { data } = await getProfile(query.tag)
            setUserData(data.payload);
        }
        setUser();
    }, [])

    return (
        <Layout>
            {/* Solo disponible si el tag del user y el query es igual
                o si el user es mod, admin o colider               */}
            {user.tag.slice(1) === query.tag || user.role === 'Mod' 
            ? <Fragment>
                <BioUser User={userData} />
                <ClanUser           />
                <LeagueUser         />
                <ArenaUser          />
                <CardsUser          />
                <CurrentDeckUser    />
                <FavoriteCard       />
                <UpcomingChestUser  />
            </Fragment>
            : <Container>
                <p>No tienes acceso a este recurso</p>    
            </Container>}
        </Layout>
    )
}

export default Profile;