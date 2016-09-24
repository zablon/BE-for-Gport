export default function reducer(state={
    user: {
      id: null,
      name: null,
      email: null,
      type: null,
    },
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
          user: {...state.user, name: action.payload},
        }
      }
      case "SET_USER_EMAIL": {
        return {
          ...state,
          user: {...state.user, email: action.payload},
        }
      }
      case "SET_USER_TYPE": {
        return {
          ...state,
          user: {...state.user, type: action.payload},
        }
      }
      case "SET_USER_PARAMS": {
        console.log('===SET_USER_PARAMS===')
        console.log(action)
        if(action.payload.facebook){
          return {
            ...state,
            user: {...state.user, type: 'facebook', name: action.payload.facebook.name, email: action.payload.facebook.email, id: action.payload.facebook.id, },
          }
        }else if(action.payload.twitter){
          return {
            ...state,
            user: {...state.user, type: 'twitter', name: action.payload.twitter.name, email: action.payload.twitter.email, id: action.payload.twitter.id, },
          }
        }else if(action.payload.google){
          return {
            ...state,
            user: {...state.user, type: 'google', name: action.payload.google.name, email: action.payload.google.email, id: action.payload.google.id, },
          }
        }else if(action.payload.login){
          return {
            ...state,
            user: {...state.user, type: 'login', name: action.payload.login.name, email: action.payload.login.email, id: action.payload.login.id, },
          }
        }else{
          return state
        }
      }
    }

    return state
}
