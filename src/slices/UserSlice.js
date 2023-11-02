import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    users:[],
}

const UserSlice=createSlice({
    name: users,
    initialState,

    reducers:{
        fetchUser : (state,action)=>{
            console.log("slices here",action.payload);
            state.users=action.payload;
        },
    }
});

export const{fetchUser}=UserSlice.actions;
export default UserSlice;