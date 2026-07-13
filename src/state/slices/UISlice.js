import { createSlice } from "@reduxjs/toolkit";

const initialState={
    dashboardMenuOpen:true
}
const   UISlice= createSlice({
    initialState,
    name:"UI",
    reducers:{
        toggleDashboardMenuOpen:(state, action)=>{
            state.dashboardMenuOpen= !state.dashboardMenuOpen
        }
    }
})

export const   {toggleDashboardMenuOpen}= UISlice.actions
export const dashboardMenuOpenSelector= (state)=>state.UI.dashboardMenuOpen


export default UISlice.reducer