/**
 * Created by semianchuk on 27.09.16.
 */
export function fetchPlace() {
    return {
        type: "FETCH_PLACE",
        payload: {}
    }
}
export function setPlaceId(name) {
    return {
        type: "SET_PLACE_ID",
        payload: name
    }
}
export function setPlaceProfileUrl(name) {
    return {
        type: "SET_PLACE_PROFILE_URL",
        payload: name
    }
}
export function setPlaceParams(obj) {
    return {
        type: "SET_PLACE_PARAMS",
        payload: obj
    }
}
