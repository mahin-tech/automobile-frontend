import axios from '../config/axiosConfig'
import { history } from '../history'

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

//Save the Product as well as ExtraItem
export const saveData = (data) => async (dispatch) => {
    dispatch({ type: "EX_PRODUCT", payload: data });
    return data;
};

//Remove all the product item from basket
export const removeItem = () => async (dispatch) => {
    return dispatch({ type: "DEL_ITEM" });
};

//Remove the particular product item from basket
export const removeParticularItem = (data) => async (dispatch) => {
    return dispatch({ type: "DEL_PAR_ITEM", payload: data });
};

//Create Add User
export const RegUsers = (data) => async (dispatch) => {
    let obj = {
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        password: data.password,
        pinCode: data.pinCode,
        address: data.address,
        mobile: data.mobile,
    };
    const res = await axios.post("create/users", obj);
    return res;
};

//Get User By ID
export const getUserId = (id) => async (dispatch) => {
    const res = await axios.get(`/get/users/${id}`);
    return res;
};

//Update Add User
export const UpdateUsers = (id, data) => async (dispatch) => {
    let obj = {
        userId: data._id,
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        pinCode: data.pinCode,
        address: data.address,
        mobile: data.mobile,
    };

    const res = await axios.put(`/edit/users/${id}`, obj);
    return res;
};

/*For Login*/
export const loginWithJWT = (user) => {
    return (dispatch) => {
        axios
            .post("/signin", {
                email: user.email,
                password: user.password,
            })
            .then((response) => {
                let userInfo = response.data.user;

                if (userInfo) {
                    dispatch({
                        type: "LOGIN_WITH_JWT",
                        payload: {
                            userInfo,
                            accessToken: response.data.token,
                        },
                    });
                    setTimeout(() => {
                        history.push("/place");
                    }, 2000);
                } else {
                    console.log("user email does not exist")
                }
            })
            .catch((error) => {
                console.log(error)
            });
    };
};

//Logout Action
export const logout = () => {
    return (dispatch) => {
        dispatch({ type: "LOGOUT" });
        history.push("/");
    };
};

/*Login With Google*/

//Create Add User
export const logInGoogle = (data) => {
    let obj = {
        tokenId: data.tokenId,
    };
    return (dispatch) => {
        axios
            .post("/googlelogin", obj)
            .then((response) => {
                let userInfo = response.data.user;

                if (userInfo) {
                    dispatch({
                        type: "LOGIN_WITH_JWT",
                        payload: {
                            userInfo,
                            accessToken: response.data.token,
                        },
                    });
                    setTimeout(() => {
                        history.push("/place");
                    }, 2000);
                } else {
                    console.log("User email does not exist")
                }
            })
            .catch((error) => {
                console.log(error)
            });
    };
};

/*Login With Google*/

//Create Add User
export const logInFacebook = (data) => {
    let obj = {
        userID: data.userID,
        accessToken: data.accessToken,
    };

    return (dispatch) => {
        axios
            .post("/facebooklogin", obj)
            .then((response) => {
                let userInfo = response.data.user;

                if (userInfo) {
                    dispatch({
                        type: "LOGIN_WITH_JWT",
                        payload: {
                            userInfo,
                            accessToken: response.data.token,
                        },
                    });
                    setTimeout(() => {
                        history.push("/place");
                    }, 2000);
                } else {
                    console.log("User email does not exist")
                }
            })
            .catch((error) => {
                console.log(error)
            });
    };
};

//Get the clientToken
export const getToken = (id) => async (dispatch) => {
    const res = await axios.get(`/payment/gettoken/${id}`);

    return res;
};

//Process payment
export const processPayment = (id, data) => async (dispatch) => {
    let obj = {
        amount: data.amount,
        paymentMethodNonce: data.paymentMethodNonce,
    };
    const res = await axios.post(`/payment/braintree/${id}`, obj);

    return res;
};
