import { faBell, faMessage, faUser } from "@fortawesome/free-regular-svg-icons"
import { faChartLine } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export const Navigation = () => {

    return (
        <div className='navigation'>
            <section>
                <article>
                    {/* <link > */}
                        <FontAwesomeIcon icon={faUser} />
                    {/* </link> */}
                </article>
                <article>
                    <FontAwesomeIcon icon={faChartLine} />
                </article>
                <article>
                    <FontAwesomeIcon icon={faBell} />
                    </article>
                <article>
                    <FontAwesomeIcon icon={faMessage} />
                </article>
            </section>
        </div>
    )
}