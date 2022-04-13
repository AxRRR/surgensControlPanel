import { Section } from "@/components/ui";
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
                    <p>Para seguir con el proceso de registro llena los campos.</p>
                    <p>
                        Nota: Te enviaremos un correo electronica para confirmar tu email.
                        La cuenta estará pendiente hasta ser confirmada tu identidad.
                    </p>
                    <input 
                        name='email'
                        onChange={inputChange}
                        placeholder='Correo electronico' 
                    />
                    <input 
                        name='password'
                        onChange={inputChange}
                        type='password'
                        placeholder='Contraseña' 
                    />
                    <button className='button__process'>Registrarme</button>
                </form>
            </div>}
            {!showForm && <Section config={{ enable: true, flex: false, text: 'Código de verificación' }}>
                <form onSubmit={nextProcessRegisterHandler}>
                    <p>Te hemos enviado un mail a tu correo electronico.
                        Para continuar introduce el código que recibiste en tu bandeja de entrada.
                    </p>
                    <input 
                        placeholder='Introduce el código que recibiste' 
                        name='code'
                        onChange={inputChangeSecond}
                    />  
                    <button className='button__process'>Enviar</button>
                </form>
            </Section>}
        </div>
    )
}