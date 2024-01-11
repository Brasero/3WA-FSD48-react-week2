import {ADD_DRAGON, DELETE_DRAGON, RE_ADD_DRAGON, SET_DRAGON} from "../action/dragonAction.js";

const initialState = {
    dragon: {
        name: "",
        age: ""
    },
    dragons: [],
    message: ""
}

const checkDragonExist = (dragon, dragons) => {
    const exist = dragons.find((drag) => drag.name.toLowerCase() === dragon.name.toLowerCase())
    if (exist) {
        return true
    }
    return false
}


const dragonReducer = (state = initialState, action) => {
    let dragon, dragons;
    switch(action.type) {

        case SET_DRAGON:
            return {
                ...state,
                dragon: {
                    ...state.dragon,
                    [action.payload.name]: action.payload.value
                },
                message: ""
            }

        case ADD_DRAGON:
            dragon = state.dragon
            dragons = state.dragons

            if(dragon.name.trim() === '') return {
                ...state,
                message: 'Merci de compléter le champ Nom'
            }
            if(dragon.age.trim() === '') return {
                ...state,
                message: 'Merci de compléter le champ Age'
            }
            if(checkDragonExist(dragon, dragons) === true) return {
                ...state,
                message: `Attention le dragon ${dragon.name} existe déjà`,
                dragon: {
                    name: "",
                    age: ""
                }
            }

            dragons = dragons.concat(state.dragon)
            return {
                ...state,
                dragon: {
                    name: "",
                    age: ''
                },
                dragons: dragons,
                message: ''
            }

        case DELETE_DRAGON:
            dragon = action.payload
            dragons = state.dragons

            dragons = dragons.filter((d) => d !== dragon)

            return {
                ...state,
                dragons: dragons,
                message: `Le dragon ${dragon.name} à bien été supprimé`
            }

        case RE_ADD_DRAGON:
            return {
                ...state,
                dragons: state.dragons.concat(action.payload)
            }


        default:
            return state;
    }
}


export default dragonReducer;