import { Fragment } from "react"
import { SectionModel } from "./ui.models"


export const Section = ({ children, config }: SectionModel) => {
    return (
        <div className='section'>
            {config.enable && <header>
                <h1>{config.text}</h1>
            </header>}
            {config.flex ? <section style={{display: 'flex'}}>
                {children}
            </section> 
            : <section>
            {children}
        </section>}
        </div>
    )
}