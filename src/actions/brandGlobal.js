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
        dispatch({ type: "GET_BRAND", payload: response.data })
    }
    return response
}

export const getLocationBrand = (lng, lat) => async (dispatch) => {
    const response = await axios.get(`/location?lng=${lng}&lat=${lat}`)
    return response
}

export const getProduct = () => async (dispatch) => {
    const response = await axios.get('/product')
    if (response) {
        dispatch({ type: "GET_BRAND", payload: response.data })
    }
    return response
}