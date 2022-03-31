import { Fragment, ReactNode, useState } from "react"

export const ModalInfo = ({ children, initialState }: { children: ReactNode, initialState: boolean }) => {
    const [showModal, setShowModal] = useState(initialState);
    return (
        <Fragment>
            {showModal && <div className='register__modal'>
                {children}
            </div>}
        </Fragment>
    )
}