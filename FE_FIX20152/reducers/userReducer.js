export default function reducer(state={
    id: null,
    name: null,
    email: null,
    type: null,
    photos: null,
    fetching: false,
    fetched: false,
    error: null,
  }, action) {

    switch (action.type) {
      case "FETCH_USER": {
        return {...state, fetching: true}
      }
      case "FETCH_USER_REJECTED": {
        return {...state, fetching: false, error: action.payload}
      }
      case "FETCH_USER_FULFILLED": {
        return {
          ...state,
          fetching: false,
          fetched: true,
          user: action.payload,
        }
      }
      case "SET_USER_NAME": {
        return {
          ...state,
          ...state.user, name: action.payload,
        }
      }
      case "SET_USER_EMAIL": {
        return {
          ...state,
          ...state.user, email: action.payload,
        }
      }
      case "SET_USER_TYPE": {
        return {
          ...state,
          ...state.user, type: action.payload,
        }
      }
      case "SET_USER_PARAMS": {
        if(action.payload || action.payload.type != 'guest'){
          return {
            ...state,
            ...state.user, type: action.payload.type, name: action.payload.name, email: action.payload.email, photos: action.payload.photos, id: action.payload.id,
          }
        }else{
          return {
            ...state,
            ...state.user, type: 'guest', name: 'guest', email: 'guest@guest.com', id: '0',
          }
        }
      }
    }
    return state
}
