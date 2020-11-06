export const initialState = {
    brands: [],
    search: []
}

const brandReducer = (state = initialState, action) => {
    switch (action.type) {
        case "GET_BRAND":
            return Object.assign({}, state, { brands: action.payload })
        case "GET_SEARCH":
            return Object.assign({}, state, { search: action.payload })
        default:
            return state
    }
}

export default brandReducer