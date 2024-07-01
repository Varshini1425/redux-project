import {createSlice} from '@reduxjs/toolkit'

export const userLoginSlice = createSlice({
    name:"user",
    initialState:{
        text:"",
        num:"",
    },
    reducers:{
        setText:(state,action)=>{
            state.text=action.payload;
        },
        setNum:(state,action)=>{
            state.num=action.payload;
        },
    },
});

export const {setText,setNum}=userLoginSlice.actions;
export default userLoginSlice.reducer;