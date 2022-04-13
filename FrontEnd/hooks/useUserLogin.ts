import { createUser } from "@/redux/states/user";
import { AppStore } from "@/redux/store";
import { authCookieStorage } from "@/utilities/jwt.utilitties";
import { getUser } from "pages/home/services/home.services";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userAdapter } from "../adapters";

interface Error {
    error: boolean, 
    msg: string
}

export const useUserLogin = () => {
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState<Error>({ error: false, msg: '' })
    // Si el usuario ya esta logueado entonces solo retornamos nada.
    const user = useSelector((store: AppStore) => store.user);

    if(user.id === '') setError({ error: true, msg: 'El usuario no esta dentro del state.' })
    const dispatch = useDispatch();
    
    useEffect(() => {
        
        // Si el user no está logueado... entonces lo autenticamos.
        const cookie = authCookieStorage()?.get();
        
        const getDataUser = async() => {
            setLoading(true)
            const User = await getUser(cookie?.data.id);
            // Adaptamos la información
            const adaptedUser = userAdapter(User.data, cookie?.data.jwt);
        
        // Una vez adaptada la data lo seteamos en redux.
        dispatch(
            createUser(adaptedUser)
            );
        }
        
        // Se ejecutará la función solo cuando status este en true.
        if(cookie?.status) getDataUser();
        // Si no pasa la condición... entonces retornamos un error.
        
        if(!cookie?.status) setError({ error: true, msg: 'No se encontro ningún token de acceso.' })
    
        setLoading(false)
    }, [])
            

    return [ loading, error ] as const;
}