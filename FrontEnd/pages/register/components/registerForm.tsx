
export const RegisterForm = ({ tag }: { tag: string }) => {
    console.log(tag)
    return(
        <div>
            <h1>Rellena los campos para continuar:</h1>
            <input placeholder='correo electronico' />
            <input placeholder='contraseña' />
            <button>Registrarme</button>
        </div>
    )
}