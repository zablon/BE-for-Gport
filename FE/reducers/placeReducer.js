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
        description: '',
        distance: '',
        toilet: '',
        dush: '',
        tv: '',
        refrigeter: '',
        conditioner: '',
        wifi: '',
        eat: ''
    }
    }
    export default function reducer(state=defaultState, action) {

    switch (action.type) {
        case "FETCH_FILTER":
        {
            return state
        }
        case "SET_PLACE_ID":
        {
            return {
                ...state,
                ...state, placeId: action.payload,
            }
        }        
        case "SET_PLACE_PROFILE_URL":
        {
            return {
                ...state,
                ...state, profileUrl: action.payload,
            }
        }
        case "SET_PLACE_PARAMS":
        {
            return {
                ...state,
                ...state, place: action.payload.place,
                          description: action.payload.description,
                          images: action.payload.images,
                          mainTable: action.payload.mainTable,
            }
        }
    }

    return state
}
