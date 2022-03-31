import { Layout } from "@/components/layout/layout";
import { useForm } from "@/hooks/useForm";
import Router from "next/router";
import { Error } from "pages/register/models/register.models";
import { useState } from "react";
import { LoginUser } from "./services/login.services";



const Login = () => {

    const [error, setError] = useState<Error>({errors: []})

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

        // Poner cookies y meter al redux el user.
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