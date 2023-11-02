

const API_BASE_URL="http://localhost:8080/workspaces/"

export const addProjectApi=async(n)

export const addWork=async(name,companyId)=>{
    try{
        console.log("adding workspace in api..",name);
        const response=await axios.post(`${API_BASE_URL}${companyId}/workspaces`,name);
        console.log(response);
        return response.data;
    }catch(error){
        throw error;
    }
};