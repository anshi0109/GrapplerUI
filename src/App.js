
import { BrowserRouter as Router,  Switch , Route , Routes  } from 'react-router-dom'; // Change Router to BrowserRouter
import Navbar from './components/Navbar';
import './app.css' ; 
import Companies from './pages/Companies';
import Home from './pages/Home';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchCompany } from './slices/companySlice';
import { getAllCompanies } from './api/api';
import CompanyUser from './pages/CompanyUser';
import AddCompany from './pages/AddCompany'
import UserCreate from './pages/UserCreate';
import Workspace from './pages/Workspace';
import { Modal } from 'react-bootstrap';
import AddProjects from './pages/AddProject';

function App() {
 // const API_BASE_URL = 'http://localhost:8080/companies';
const dispatch = useDispatch() ; 
  useEffect(() => {
      const fetchData  = async() =>{
        try{
          const response = await  getAllCompanies() ; 
          //const response = await axios.get('http://localhost:8080/companies') ;
          console.log('sssssssss',response.data);
          dispatch(fetchCompany(response.data)) ; 
        }
        catch(error){
          console.error("Error Message ",error);
        }  
      };
      fetchData();
    }, [dispatch]);
  return (
    <>
      <Router>
        <Navbar />
        <Routes> 
         <Route path='/' exact component={Home} />
          <Route path='/company' element = {<Companies/>} />
          <Route path='/user' element = {<CompanyUser/>} /> 
          <Route path='/add' element = {<AddCompany/>}/> 
          <Route path='/adduser' element ={<UserCreate/>}/>
          <Route path='/workspace' element={<Workspace/>}/>
          <Route path='/modal' element={<Modal/>}/>
          <Route path='/project' element={<projectCreate/>}/>
          {/* <Route path='/addprojects' element={<AddProjects/>}></Route> */}
          <Route path='/addproject' element = {<AddProjects/>}/> 
        </Routes> 
      </Router>
    </>
  );
}
export default App;