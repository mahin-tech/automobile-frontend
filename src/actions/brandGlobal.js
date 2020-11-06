import axios from '../config/axiosConfig'

export const getBrand = () => async (dispatch) => {
    const response = await axios.get('/brand')
    if (response) {
        dispatch({ type: "GET_BRAND", payload: response.data })
    }
    return response
}

export const getSearch = (search) => async (dispatch) => {
    const response = await axios.get(`/search/${search}`)
    if (response) {
        dispatch({ type: "GET_SEARCH", payload: response.data })
    }
    return response
}
