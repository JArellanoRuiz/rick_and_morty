import { act } from "react-dom/test-utils";
import { ADD_FAV, REMOVE_FAV, FILTER, ORDER } from "./action-types";


const initialState = {
    myFavorites: [],
    allCharactersFav: []
}

const reducer = (state = initialState, action) => {

    switch(action.type){
        case ADD_FAV:
            return{
                ...state,
                myFavorites: [...state.allCharactersFav,action.payload],
                allCharactersFav: [...state.allCharactersFav,action.payload]
            }

        case REMOVE_FAV:
            return{
                ...state,
                myFavorites: state.myFavorites.filter(character => character.id !== action.payload)
            }


        case FILTER:

            const allCharacterFavFiltered = state.allCharactersFav.filter(character => character.gender === action.payload)
            return{
                ...state,
                myFavorites: 
                    action.payload === 'allCharacters'
                    ? [...state.allCharactersFav]
                    :allCharacterFavFiltered
            }

        case ORDER:
            const allCharacterFavCopy = [...state.allCharactersFav]
            return{
                ...state,
                myFavorites: 
                    action.payload === 'A'
                    ? allCharacterFavCopy.sort((a,b) => a.id - b.id)
                    : allCharacterFavCopy.sort((a,b) => b.id - a.id)
            }

        default:
            return {...state}
    }

}

export default reducer;