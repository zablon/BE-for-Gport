/**
 * Created by semianchuk on 24.09.16.
 */

const defaultState = {
    type: 'chast',
    distance: '100',
    toilet: false,
    tv: false,
    refrigeter: false,
    conditioner: false,
    wifi: false,
    eat: false,
    children: false,
    swiming: false,
    filterText: ''
}
export default function reducer(state=defaultState, action) {

    switch (action.type) {
        case "FETCH_FILTER": {
            return state
        }        
        case "CLEAR_FILTER": {
            return defaultState
        }
        case "CLEAR_FILTER": {
            return {
                ...state,
                ...state, filterText: action.payload,
            }
        }
        case "SET_FILTER_TEXT": {
            return {
                ...state,
                ...state, filterText: action.payload,
            }
        }
        case "SET_FILTER_TYPE": {
            return {
                ...state,
                ...state, type: action.payload,
            }
        }
        case "SET_FILTER_DISTANCE": {
            return {
                ...state,
                ...state, distance: action.payload,
            }
        }
        case "SET_FILTER_TOILET": {
            return {
                ...state,
                ...state, toilet: action.payload,
            }
        }
        case "SET_FILTER_TV": {
            return {
                ...state,
                ...state, tv: action.payload,
            }
        }
        case "SET_FILTER_REFRIGETER": {
            return {
                ...state,
                ...state, refrigeter: action.payload,
            }
        }
        case "SET_FILTER_CONDITIONER": {
            return {
                ...state,
                ...state, conditioner: action.payload,
            }
        }
        case "SET_FILTER_WIFI": {
            return {
                ...state,
                ...state, wifi: action.payload,
            }
        }
        case "SET_FILTER_EAT": {
            return {
                ...state,
                ...state, eat: action.payload,
            }
        }
    }

    return state
}
