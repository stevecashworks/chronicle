import { createSlice } from "@reduxjs/toolkit";
const  formSlice= createSlice({
    initialState:{
        data:{}
    },
    name:"formData",
    reducers:{
        setFormData:(state, action)=>{
            state.data=action.payload
        }
    }
    
})

export default formSlice