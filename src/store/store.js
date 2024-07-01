import {configureStore} from '@reduxjs/toolkit';
import userLoginReducer from '../features/userLoginSlice'
import counterReducer from '../features/counterSlice'




export const store = configureStore({
    reducer:{
        userLogin:userLoginReducer,
        counter: counterReducer,
    }
})