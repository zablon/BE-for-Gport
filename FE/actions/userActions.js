export function fetchUser() {
  return {
    type: "FETCH_USER_FULFILLED",
    payload: {
      name: "Guest",
      email: '',
    }
  }
}

export function setUserName(name) {
  return {
    type: 'SET_USER_NAME',
    payload: name,
  }
}

export function setUserEmail(email) {
  return {
    type: 'SET_USER_EMAIL',
    payload: email,
  }
}

export function setUserType(type) {
  return {
    type: 'SET_USER_TYPE',
    payload: type,
  }
}

export function setUserParams(data) {
  return {
    type: 'SET_USER_PARAMS',
    payload: data,
  }
}