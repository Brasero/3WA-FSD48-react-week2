import PageWrapper from "../component/PageWrapper.jsx";
import {useState} from "react";
import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {selectClient} from "../store/selector/index.js";
import {addClientAction, setClientAction} from "../store/actions/index.js";


function AddClient() {

    const [message, setMessage] = useState('')
    const naviguate = useNavigate()
    const dispatch = useDispatch();
    const client = useSelector(selectClient)

    const genderType = [
        {
            value: 'Mr',
            label: 'Monsieur'
        },
        {
            value: 'Mme',
            label: 'Madame'
        },
        {
            value: 'other',
            label: 'Autre'
        }
    ]

    const handleChange = (e) => {
        const {name, value} = e.target
        setMessage('');
        dispatch(setClientAction(name, value))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const state = {...client}
        if(state.name.trim() === '' || state.surname.trim() === '') {
            setMessage('Merci de bien remplir tout les champs.')
            return
        }
        setMessage('')
        dispatch(addClientAction())
        naviguate('/client', {replace: true})
        // il est possible de passer -1 en paramètre ce qui aura pour effet de revenir en arrière d'une page
    }

    return (
        <PageWrapper>
            <form onSubmit={handleSubmit}>
                {
                    message !== '' && <span style={{color: "red"}}>{message}</span>
                }
                <select value={client.gender} name={'gender'} onChange={handleChange}>
                    {
                        genderType.map((gender, index) => {
                            return <option key={`genderSelect-${index}`} value={gender.value}>{gender.label}</option>
                        })
                    }
                </select>
                <input type={"text"} name={'name'} placeholder={'Nom'} value={client.name} onChange={handleChange}/>
                <input type={"text"} name={'surname'} placeholder={'Prénom'} value={client.surname} onChange={handleChange}/>
                <input type={"submit"} value={'ajouter'} />
            </form>
        </PageWrapper>
    )
}

export default AddClient