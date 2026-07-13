import { configureStore } from "@reduxjs/toolkit";
import formSlice from "./slices/formSlice";
import UISlice from "./slices/UISlice";

const store = configureStore({
    reducer:{
       form:formSlice ,
       UI:UISlice
       
    }

})
export default store