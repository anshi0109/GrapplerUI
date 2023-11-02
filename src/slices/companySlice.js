import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    companies : [
        // { id :  "1" ,companyName: "Sourabh Traders Daudwa ", email : "a@g.vom", description: "Grapler Enhancement ",structureType : "HIERARCHICAL", contactNumber : "9944", address : "Indore" , },
        // { id :  "2" ,companyName: "Innogent Technologies  ", email : "a@g.vom", description: "Grapler Enhancement ",structureType : "HIERARCHICAL", contactNumber : "9944", address : "Indore" , },
        // { id :  "3" ,companyName: "Innogent Technologies Europe ", email : "a@g.vom", description: "Grapler Enhancement ",structureType : "HIERARCHICAL", contactNumber : "9944", address : "Indore" , },
       
    ],
  };
  const companySlice = createSlice({
    name : "company",
    initialState  ,
 
    reducers : {
        fetchCompany : (state , action ) => {
            console.log("inside the companyslice" , action.payload) ; 
            state.companies =  action.payload ; 
        },   
         DeleteCompany : (state,action)=>{
            const id=action.payload;
            console.log("delete in slice",id);
            state.companies=state.companies.filter((item)=>item.id != id);
            
         }
    },       

  }); 
  export const {fetchCompany ,DeleteCompany } = companySlice.actions ; 
  export default companySlice.reducer ; 
