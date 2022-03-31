import { ModalInfo } from "@/components/ui/modalInfo";
import { useState } from "react";
import { useSelector } from "react-redux";
import { AppStore } from "../../../redux/store";
import { ShowMemberSelect } from "./showMemberSelect";

export interface UserSelect {
    hideModal: (set: boolean) => void,
    hideComponent: (set: boolean) => void,
    setMemberSelect: (set: string | number | object) => void,
    payload: {
        name: string,
        role: string,
        lastSeen: number,
        tag: string,
        trophies: number 
    }
}

interface Props { 
    memberSearch: string, 
    hideComponent: (set: boolean) => void,
    setMemberSelect: (set: string | number | object) => void
}

interface MapModel {
    name: string,
    role: string,
    lastSeen: number,
    tag: string,
    trophies: number 
}

export const SearchMember = ({ memberSearch, hideComponent, setMemberSelect }: Props) => {
    
    const { payload } = useSelector((store: AppStore) => store.members);
    const [showModal, setShowModal] = useState(false);
    const [userSelect, setUserSelect] = useState<UserSelect>({
        hideModal: setShowModal,
        hideComponent,
        setMemberSelect,
        payload: {
            name: '',
            role: '',
            lastSeen: 0,
            tag: '',
            trophies: 0
        }
    });

    const searchMember = () => {
        const result = payload.filter(({ name }: { name: string }) => name.indexOf(memberSearch) != -1)
        console.log(result)
        return( 
            <div className='register__showMembers'>
            {
                result.map(({ name, role, lastSeen, tag, trophies }: MapModel) => 
                <div key={name}>
                    <section>
                        <p>{name}</p>
                    </section>
                    <section>
                    <button onClick={() => {
                        setShowModal(true),
                        setUserSelect({
                            hideModal: setShowModal,
                            hideComponent,
                            setMemberSelect,
                            payload: {
                                name,
                                role,
                                lastSeen,
                                tag,
                                trophies 
                            }
                        })
                    }}>Escoger</button>
                    </section>
                </div>)
            }
            </div>)
    }
    
    return (
        <div>
            {memberSearch !== '' && searchMember() }
            {showModal && 
                <ShowMemberSelect 
                    payload={userSelect.payload}
                    hideModal={userSelect.hideModal}
                    hideComponent={hideComponent}
                    setMemberSelect={setMemberSelect}
                />
            }
            {/* <ModalInfo initialState={true}>
                <h1>Lo sentimos este tag ya esta en uso.</h1>
                <p>Por favor, escoge otro usuario</p>
            </ModalInfo> */}
        </div>
    )
}