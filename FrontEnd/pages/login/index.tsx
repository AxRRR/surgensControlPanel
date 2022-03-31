import { User, userAdapter } from "@/adapaters/user.adapter";
import { Layout } from "@/components/layout/layout";
import { useForm } from "@/hooks/useForm";
import { createUser } from "@/redux/states/user";
import { authCookieStorage } from "@/utilities/jwt.utilitties";
import Router from "next/router";
import { Error } from "pages/register/models/register.models";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { LoginUser } from "./services/login.services";



const Login = () => {

    const [error, setError] = useState<Error>({errors: []})
    
    const dispatch = useDispatch();
    const [form, inputChange] = useForm({
        name: '',
        password: ''
    });

    const loginUser = async(e: React.FormEvent) => {
        e.preventDefault();

        const userLogging = await LoginUser({
            name_member: form.name,
            password_member: form.password
        });

        if(!userLogging.status) return setError({errors: [ userLogging.error ]})

        const { name_member, email_member, role_member, tag_member }
            : User = userLogging.data.member_info;
        
        // Seteamos el JWT en el localStorage.
        authCookieStorage()?.set(userLogging.data.token);
        const adaptedUser = userAdapter({
            name_member,
            email_member,
            role_member,
            tag_member,
        }, userLogging.data.token);

        // Insertamos la información del User a Redux.
        dispatch(
            createUser(adaptedUser)
        );
        Router.push('/')
    }

    return (
        <Layout>
            {error.errors.length >= 1 && <div>
                {
                    error.errors.map((err, index) => <p key={index}>{err}</p>)
                }
            </div>}
            <form onSubmit={loginUser}>
                <input 
                    type='text'
                    name='name'
                    onChange={inputChange}
                />
                <input 
                    type='password'
                    name='password'
                    onChange={inputChange} 
                />
                <button>Ingresar</button>
            </form>
        </Layout>
    )
}

export default Login;