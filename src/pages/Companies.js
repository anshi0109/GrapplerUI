import React, { useEffect } from 'react'
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { DeleteCompany } from '../slices/companySlice';
import { Navigate, useNavigate } from 'react-router-dom';

function Companies() {
  const dispatch= useDispatch();
  const navigate = useNavigate();
  
  console.log('inside companies');
  const { companies } = useSelector((state) => state.companylist);
  console.log("insidecompanies" ,  companies) ; 
  
  function showUsers(id , companyname ) {
    console.log("from userList  ", id);
   
    navigate(`/user?id=${id}`);
  }

  function handleDelete(id) {
    const shouldDelete = window.confirm("Are you sure you want to delete this item?");

    if (shouldDelete) {
        // Perform the deletion
        axios.delete('http://localhost:8080/companies/' + id)
            .then((response) => {
                alert('Item deleted successfully');
                dispatch(DeleteCompany(id));
                navigate('/company');
            })
            .catch((error) => {
                console.error('Error while deleting the Company:', error);
                alert('Error while deleting the item');
            });
    }
}

  function add(){
    console.log("creating compines here..");
    navigate(`/add`);
  }

  function showWorkspace(id){
      console.log("onclicking on button",id);
      navigate(`/workspace?id=${id}`);
  }
  return (
    <div>
        <div className="container">
        <div className="badge bg-info text-wrap mt-2">
          <h2>Company </h2>
        </div>
        <button onClick={()=>add()}>Create Companies</button>
        <table className="table table-striped table-hover mt-3">
          <thead className="table-dark">
            <tr>
              <th>Company Name</th>
              <th>Explore</th>
              <th>Users</th>
              <th>Update</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {companies.map((comp) => (
              <tr key={comp.id}>
                <td> {comp.name }</td>
                <td>
                  <button
                   onClick={()=>showWorkspace(comp.id)}
                    className="btn btn-primary"
                  >
                    View Workspaces 
                  </button>
                </td>  
                  <td>
                  <button
                    onClick={ () => showUsers(comp.id , comp.companyName)}
                    className="btn btn-primary"
                  >
                    View Users 
                  </button>
                </td>
                <td>
                  <button
                  onClick={()=>navigate(`modal`)}
                    className="btn btn-primary" >
                   Update
                  </button>
                </td>

                <td>
                  <button 
                  onClick={()=> handleDelete(comp.id)} className="btn btn-danger" >
                    Delete
                  </button>
                </td>   
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
   
  
}

export default Companies ; 
