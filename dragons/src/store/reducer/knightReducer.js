import {ADD_KNIGHT, DELETE_KNIGHT, RE_ADD_KNIGHT, SET_KNIGHT} from "../action/knightAction.js";

const initialState = {
    knight: {
        name: '',
        age: ''
    },
    knights: [
        {
            name: "Dartagnan",
            age: 25
        },
        {
            name: "Momtmerrat",
            age: 45
        }
    ],
    message: ''
}

const checkKnightExist = (knight, knights) => {
    const exist = knights.find((kni) => kni.name.toLowerCase() === knight.name.toLowerCase())
    if (exist) {
        return true
    }
    return false
}

const knightReducer = (state = initialState, action) => {
    let knight, knights;
    switch(action.type) {

        case SET_KNIGHT:
            return {
                ...state,
                knight: {
                    ...state.knight,
                    [action.payload.name]: action.payload.value
                },
                message: ''
            }

        case ADD_KNIGHT:
            knight = state.knight
            knights = state.knights

            if(knight.name.trim() === '') return {
                ...state,
                message: "Merci de remplir le champ Nom"
            }
            if(knight.age.trim() === '') return {
                ...state,
                message: 'Merci de remplir le champ Age'
            }

            if(checkKnightExist(knight, knights) === true) return {
                ...state,
                message: `Attention le chevalier ${knight.name} existe déjà`,
                knight: {
                    name: "",
                    age: ""
                }
            }

            knights = knights.concat(state.knight)

            return {
                ...state,
                message: "",
                knights: knights,
                knight: {
                    name: "",
                    age: ""
                }
            }

        case DELETE_KNIGHT:
            knight = action.payload
            knights = state.knights
            knights = knights.filter((k) => k !== knight)

            return {
                ...state,
                knights: knights,
                message: `Le chevalier ${knight.name} à bien été supprimé`
            }

        case RE_ADD_KNIGHT:
            return {
                ...state,
                knights: state.knights.concat(action.payload)
            }

        default:
            return state
    }
}
export default knightReducer;