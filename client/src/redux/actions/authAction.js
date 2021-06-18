import {SIGN_UP, SIGN_IN, SIGN_OUT, USER_LOADED, USER_LOADING_FAIL} from '../constants/actionTypes';
import axios from 'axios';


export const register = (blogger) => async (dispatch) => {
    try {
        const token = await axios.post('/auth/signup', blogger);
        if(token) {
            localStorage.setItem("token", token.data);
        }

        dispatch({
            type : SIGN_UP,
            token : token.data
        });
    } catch (error) {
        console.log(error);
    }
};

export const login = (email, password) => async (dispatch) => {
    try {
        const token = await axios.post('/auth/signin', {email, password});
        if(token) {
            localStorage.setItem("token", token.data);
        }

        dispatch({
            type : SIGN_IN,
            token : token.data
        })
    } catch (error) {
        console.log(error.message);
    }
};

export const logout = () => (dispatch) => {
    dispatch({
        type : SIGN_OUT
    })
}

