export const initialState = {
    brands: [],
    data: [],
    userInfo: "",
    accessToken: ""
}

const brandReducer = (state = initialState, action) => {
    switch (action.type) {
        case "GET_BRAND":
            return Object.assign({}, state, { brands: action.payload })
        case "EX_PRODUCT":
            return Object.assign({}, state, { data: action.payload });
        case "DEL_ITEM":
            return { data: [] };
        case "DEL_PAR_ITEM":
            return {
                data: [...state.data.filter((item) => item !== action.payload)],
            };
        case "LOGIN_WITH_JWT":
            return Object.assign({}, state, {
                userInfo: action.payload.userInfo,
                accessToken: action.payload.accessToken,
            });
        case "LOGOUT":
            return initialState;
        default:
            return state
    }
}

export default brandReducer