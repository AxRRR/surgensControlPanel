import { Fragment, ReactNode, useState } from "react"

export const ModalInfo = ({ children }: { children: ReactNode }) => {
    const [showModal, setShowModal] = useState(true);
    return (
        <Fragment>
            {showModal && <div className='register__modal'>
                {children}
            </div>}
        </Fragment>
    )
}