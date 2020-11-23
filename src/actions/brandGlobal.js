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

export const getPackage = (id) => async (dispatch) => {
    const response = await axios.get(`/package/${id}`)
    return response
}

export const getProduct = () => async (dispatch) => {
    const response = await axios.get('/product')
    return response
}

//update Increment Products
export const getIncProduct = (id, data) => async (dispatch) => {
    const res = await axios.put(`/edit/inc/product/${id}`, data);

    return res;
};

//Update Decrement Products
export const getDecProduct = (id, data) => async (dispatch) => {
    const res = await axios.put(`/edit/dec/product/${id}`, data);

    return res;
};
