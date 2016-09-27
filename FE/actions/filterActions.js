/**
 * Created by semianchuk on 24.09.16.
 */

export function fetchFilter() {
    return {
        type: "FETCH_FILTER",
        payload: {}
    }
}

export function clearFilter() {
    return {
        type: 'CLEAR_FILTER',
        payload: {},
    }
}

export function clearFilterText() {
    return {
        type: 'CLEAR_FILTER_TEXT',
        payload: '',
    }
}

export function startSearchFilter(val) {
    return {
        type: 'START_SERCH_FILTER',
        payload: val,
    }
}
export function startSearchText(val) {
    return {
        type: 'START_SERCH_TEXT',
        payload: val,
    }
}
export function setFilterText(name) {
    return {
        type: 'SET_FILTER_TEXT',
        payload: name,
    }
}

export function setFilterType(name) {
    return {
        type: 'SET_FILTER_TYPE',
        payload: name,
    }
}

export function setFilterDistance(data) {
    return {
        type: 'SET_FILTER_DISTANCE',
        payload: data,
    }
}

export function setFilterToiler(data) {
    return {
        type: 'SET_FILTER_TOILET',
        payload: data,
    }
}

export function setFilterTv(data) {
    return {
        type: 'SET_FILTER_TV',
        payload: data,
    }
}

export function setFilterRefrigeter(data) {
    return {
        type: 'SET_FILTER_REFRIGETER',
        payload: data,
    }
}

export function setFilterConditioner(data) {
    return {
        type: 'SET_FILTER_CONDITIONER',
        payload: data,
    }
}

export function setFilterWifi(data) {
    return {
        type: 'SET_FILTER_WIFI',
        payload: data,
    }
}

export function setFilterEat(data) {
    return {
        type: 'SET_FILTER_EAT',
        payload: data,
    }
}

export function setFilterChildren(data) {
    return {
        type: 'SET_FILTER_CHILDREN',
        payload: data,
    }
}

export function setFilterSwiming(data) {
    return {
        type: 'SET_FILTER_SWIMING',
        payload: data,
    }
}
