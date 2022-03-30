import { ModalInfo } from "@/components/ui/modalInfo";
import { useState } from "react";
import { validateTag } from "../services/services.auth";
import { RegisterForm } from "./registerForm";
import { UserSelect } from "./searchMember"

export const ShowMemberSelect = ({ payload, hideModal, hideComponent, setMemberSelect }: UserSelect) => {

    const registerUser = async(e: React.FormEvent) => {
        e.preventDefault();
        const tagAvaible = await validateTag({tag: payload.tag});
        hideModal(false);
        if(!tagAvaible.status){
            // return (
            //     <ModalInfo>
            //         <h1>Lo sentimos este tag ya esta en uso.</h1>
            //         <p>Por favor, escoge otro usuario</p>
            //     </ModalInfo>
            // )
            // <div><RegisterForm tag={payload.tag} /></div>
        }
        setMemberSelect(payload.tag);
        hideComponent(false);
    }
    

    return (
        <div className='register__modal'>
            <section>
                <h1>¿Estás seguro de que este usuario es tuyo?</h1>
                <p>Si estás seguro por favor confirma tu información</p>
                <article>
                    <p>Nombre: {payload.name}</p>
                    <p>Copas: {payload.trophies}</p>
                    <p>Tag: {payload.tag}</p>
                </article>
                <footer>
                    <button onClick={registerUser}>Aceptar</button>
                    <button onClick={() => hideModal(false)}>Rechazar</button>
                </footer>
            </section>
        </div>
    )
}