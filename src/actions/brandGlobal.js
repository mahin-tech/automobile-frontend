import axios from '../config/axiosConfig'

export const getBrand = () => async (dispatch) => {
    const response = await axios.get('/brand')
    if (response) {
        dispatch({ type: "GET_BRAND", payload: response.data })
    }
    return response
}

export const getSearch = () => async (dispatch) => {
    const response = await axios.get('/search')
    if (response) {
        dispatch({ type: "GET_SEARCH", payload: response.data })
    }
    return response
}
