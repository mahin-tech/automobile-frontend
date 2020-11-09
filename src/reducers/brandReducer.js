export const initialState = {
    brands: []
}

const brandReducer = (state = initialState, action) => {
    switch (action.type) {
        case "GET_BRAND":
            return Object.assign({}, state, { brands: action.payload })
        default:
            return state
    }
}

export default brandReducer