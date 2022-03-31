import { useForm } from "@/hooks/useForm";
import Router from "next/router";
import React, { useState } from "react";
import { userRegisterAdaptar } from "../adapters/adaptars.auth";
import { Error } from "../models/register.models";
import { registerUser, validateCodeEmail } from "../services/register.services";

export const RegisterForm = ({ user }: { user: any }) => {

    const [error, setError] = useState<Error>({errors: []})
    const [showForm, setShowForm] = useState(true);

    const [form, inputChange] = useForm({
        email: '',
        password: ''
    });

    const [formSecond, inputChangeSecond] = useForm({
        code: ''
    });


    const registerUserHandler = async(e: React.FormEvent) => {
        e.preventDefault();
    
        const User = userRegisterAdaptar({
            name: user.name,
            tag: user.tag,
            password: form.password,
            email: form.email
        });

        
        const userRegister = await registerUser(User);
        if(!userRegister.status) return setError({errors: [ userRegister.error ]})
        return setShowForm(false);
    }

    const nextProcessRegisterHandler = async(e: React.FormEvent) => {
        e.preventDefault();

        const userRegisterEmail = await validateCodeEmail({
            name_member: user.name,
            code: formSecond.code
        });

        if(!userRegisterEmail.status) return setError({errors: [ userRegisterEmail.error ]})
        Router.push('/login')
    }

    return(
        <div>
            {showForm && <div>
                <h1>Rellena los campos para continuar:</h1>
                {error.errors.length >= 1 && <div>
                    {
                        error.errors.map((err, index) => <p key={index}>{err}</p>)
                    }
                </div>}
                <form onSubmit={registerUserHandler}>
                    <input 
                        name='email'
                        onChange={inputChange}
                        placeholder='correo electronico' 
                        />
                    <input 
                        name='password'
                        onChange={inputChange}
                        type='password'
                        placeholder='contraseña' 
                        />
                    <button>Registrarme</button>
                </form>
            </div>}
            {!showForm && <div>
                <form onSubmit={nextProcessRegisterHandler}>
                    <input 
                        placeholder='Introduce el código' 
                        name='code'
                        onChange={inputChangeSecond}
                    />  
                </form>
            </div>}
        </div>
    )
}