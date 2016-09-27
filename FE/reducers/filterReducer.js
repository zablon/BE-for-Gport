/**
 * Created by semianchuk on 24.09.16.
 */

const defaultState = {
    filterText: '',
    filterSearch: false,
    textSearch: false
}
export default function reducer(state=defaultState, action) {

    switch (action.type) {
        case "FETCH_FILTER": {
            return state
        }
        case "START_SERCH_FILTER": {
            return {
                ...state,
                ...state, filterSearch: action.payload,
            }        }
        case "START_SERCH_TEXT": {
            return {
                ...state,
                ...state, textSearch: action.payload,
            }        }
        case "CLEAR_FILTER": {
            return defaultState
        }
        case "SET_FILTER_TEXT": {
            return {
                ...state,
                ...state, filterText: action.payload, textSearch :true
            }
        }
        case "SET_FILTER_TYPE": {
            return {
                ...state,
                ...state, type: action.payload, filterSearch: true
            }
        }
        case "SET_FILTER_DISTANCE": {
            return {
                ...state,
                ...state, distance: action.payload, filterSearch: true
            }
        }
        case "SET_FILTER_TOILET": {
            return {
                ...state,
                ...state, toilet: (state.toilet == action.payload ? !action.payload : action.payload), filterSearch: true
            }
        }
        case "SET_FILTER_TV": {
            return {
                ...state,
                ...state, tv: (state.tv == action.payload ? !action.payload : action.payload), filterSearch: true
            }
        }
        case "SET_FILTER_REFRIGETER": {
            return {
                ...state,
                ...state, refrigeter: (state.refrigeter == action.payload ? !action.payload : action.payload), filterSearch: true
            }
        }
        case "SET_FILTER_CONDITIONER": {
            return {
                ...state,
                ...state, conditioner: (state.conditioner == action.payload ? !action.payload : action.payload), filterSearch: true
            }
        }
        case "SET_FILTER_WIFI": {
            return {
                ...state,
                ...state, wifi: (state.wifi == action.payload ? !action.payload : action.payload), filterSearch: true
            }
        }
        case "SET_FILTER_EAT": {
            return {
                ...state,
                ...state, eat: (state.eat == action.payload ? !action.payload : action.payload), filterSearch: true
            }
        }
        case "SET_FILTER_CHILDREN": {
            return {
                ...state,
                ...state, children: (state.children == action.payload ? !action.payload : action.payload), filterSearch: true
            }
        }
        case "SET_FILTER_SWIMING": {
            return {
                ...state,
                ...state, swiming: (state.swiming == action.payload ? !action.payload : action.payload), filterSearch: true
            }
        }
    }

    return state
}
