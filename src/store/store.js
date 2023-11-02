
import { configureStore } from '@reduxjs/toolkit';
import companySlice from '../slices/companySlice';
import workspaceSlice from '../slices/workspaceSlice';


const store = configureStore({
    reducer : {
        companylist : companySlice, 
        WorkspaceList : workspaceSlice,
    }
    
})
export  default store ; 