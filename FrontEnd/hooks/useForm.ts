import { useState } from 'react';

export const useForm = (inicialState: object | string): [any, (event: React.ChangeEvent<HTMLInputElement>) => void] => {
    const [values, setValues] = useState({});
    const [showForm, setShowForm] = useState(false);

    const inputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValues({
            ...values,
            [event.target.name ]: event.target.value
        })
    }

    // const showFormChange = () => {
    //     return showForm ? setShowForm(false) : setShowForm(true);
    // }

    return [ values, inputChange, /*showFormChange, showForm, setShowForm*/ ];
}