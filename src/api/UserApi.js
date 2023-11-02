import axios from 'axios';


const API_BASE_URL = 'http://localhost:8080/users';

export const getAllUser = async () => {
    try {    
      const response = await axios.get(API_BASE_URL );
      console.log('asaaaaaa',response.data) ; 
      return response.data ; 
    } catch (error) {
      throw error;           
    }
  };
  