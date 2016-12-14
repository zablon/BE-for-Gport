/**
 * Created by semianchuk on 27.09.16.
 */

const defaultState = {
        display: '',
        placeId: '',
        mainTable: '',
        profileUrl: '',
        post: '',
        place: {
            type: '',
            title: '',
            description: '',
            distance: '',
            toilet: '',
            dush: '',
            tv: '',
            refrigeter: '',
            conditioner: '',
            wifi: '',
            eat: ''
        },
        places: []
    }
    export default function reducer(state=defaultState, action) {

    switch (action.type) {
        case "FETCH_FILTER":
        {
            return state
        }
        case "SET_PLACES_PARAMS":
        {
            return {
                ...state,
                places: action.payload
            }
        }
        case "SET_PLACE_PARAMS":
        {
            return {
                ...state,
                ...state, place: action.payload.place
            }
        }
    }

    return state
}
