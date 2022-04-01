import { Fragment } from "react"
import { ContainerModel } from "./ui.models"


export const Container = ({ children }: ContainerModel) => {
    return (
        <div className='container'>
            {children}
        </div>
    )
}