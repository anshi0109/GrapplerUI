import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createWorkspaces, deleteWorkspaceSlice, fetchWorkspaces, updateWorkspace, updateWorkspaceSlice } from '../slices/workspaceSlice'; // Update the import for your workspace
import { useNavigate } from 'react-router-dom';
import { addWork, deleteWorkspaceApi, getAllWorkspaces, updateWorkspaceapi } from '../api/WorkspaceApi'; // Update the import for your workspace API
import { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Workspaces() {
  const [name, setName] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [showModal2, setShowModal2] = useState(false);
  const navigate = useNavigate();
  const [workSpaceObject  , setWorkSpaceObject] = useState("")  ; 
  console.log("workSpaceObject   " , workSpaceObject) ; 
  const queryParams = new URLSearchParams(window.location.search);
  const companyId = queryParams.get("id");
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getAllWorkspaces(companyId);
        console.log('Response from getAllWorkspaces:', response.data);
        dispatch(fetchWorkspaces(response.data));
      } catch (error) {
        console.error("Error while fetching data:", error);
      }
    };
    fetchData();
  }, [dispatch]);

  const { workspaces } = useSelector((state) => state.WorkspaceList);
  console.log("On component: ",workspaces);

  async function addWorkspace(name){
    try{
    console.log("adding workspace",name);
    const response=await addWork({name},companyId);
    console.log(response.data);
    dispatch(createWorkspaces(response.data));
    toast.success('Workspace created Successfully!');
    handleModalClose();
    }catch(error){
      if(error.response){
        const status=error.response.status;
        toast.error(error.response.data.message,{position: "top-center",});
      }
    }
}

async function addProject(name, subtype){
  try{
    console.log("adding project here",name );
    console.log(subtype);
    
  }catch(error){
    if(error.response){
      const status=error.response.status;
      toast.error(error.response.data.message,{position: "top-center",});
    }
  }
}

 async function updateWorkspace(updatedData ,companyId){
  try{
  console.log("Updating work",updatedData);
  console.log(companyId);
  console.log(workSpaceObject.id);
  const name = updatedData;
  const response = await updateWorkspaceapi({name},companyId,workSpaceObject.id);
  console.log(response.data);
  dispatch(updateWorkspaceSlice(response.data));
  toast.success('Workspace updated Successfully!');
  handleModalClose2();
  }catch(error){
    if(error.response){
      const status=error.response.status;
      toast.error(error.response.data.message,{position: "top-center",});
    }
  }
}

async function handleDelete(workspaceId, companyId) {
  if (workspaceId) {
    const confirmed = window.confirm("Are you sure you want to delete this workspace?");
    if (confirmed) {
      console.log("Deleting Workspace ID:", workspaceId);
      try {
        const response = await deleteWorkspaceApi(workspaceId, companyId);
        console.log(response);
        dispatch(deleteWorkspaceSlice(workspaceId));
        toast.success('Workspace deleted Successfully!',{position: "top-center",});
        navigate(`/workspace?id=${companyId}`);
      } catch (error) {
        if(error.response){
          const status=error.response.status;
          toast.error(error.response.data.message,{position: "top-center",});
        }
      }
    }
  }
}
    
  function call(){
    setShowModal2(true);
  }

  function demo(id){
    console.log(id);
    navigate(`addproject`);
  }
  const handleModalClose = () => setShowModal(false);
  const addWorkspaceModal = (
    <Modal show={showModal} onHide={handleModalClose}>
      <Modal.Header closeButton>
        <Modal.Title>Create Project</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId="workspaceName">
            <Form.Label>Project Name :</Form.Label>
            <Form.Control type="text" placeholder="Enter project name" id="name" required/>
          </Form.Group>

          <Form.Group controlId="workspaceName">
            <Form.Label>SubType :</Form.Label>
            <Form.Control type="text" placeholder="Enter subtype of project" id="subtype" required/>
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleModalClose}>
          Close
        </Button>
        <Button variant="primary" type="submit" onClick={() => {addProject(document.getElementById('name').value,document.getElementById('subtype').value)}}>
          Create Project
        </Button>
      </Modal.Footer>
    </Modal>
  );

//updating the workspace
const handleModalClose2 = () => setShowModal2(false);
  const updateWorkspaceModal = (
    <Modal show={showModal2} onHide={handleModalClose2}>
    <Modal.Header closeButton>
      <Modal.Title>Update Workspace</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <Form>
        <Form.Group controlId="workspaceName">
          <Form.Label>Workspace Name :</Form.Label>
          <Form.Control
            type="text"
            placeholder={workSpaceObject.name}
            value={workspaces.name}
            onChange={(e) => setName(e.target.value)}
          />
        </Form.Group>
      </Form>
    </Modal.Body>
    <Modal.Footer>
      <Button variant="secondary" onClick={handleModalClose2}>
        Close
      </Button>
      <Button variant="primary" type="submit" onClick={() => updateWorkspace(name, companyId)}>
        Update Workspace
      </Button>
    </Modal.Footer>
  </Modal>
  );

  return (
    <div>
      <div className="container">
        <div className="badge bg-info text-wrap mt-2">
          <h2>Workspaces</h2>
        </div>
        <Button onClick={() => setShowModal(true)}>Create Workspace</Button> 
        <br></br>
        <Button onClick={()=>demo(workspaces.id)}>Project</Button>
        <ToastContainer />
        <table className="table table-striped table-hover mt-3">
          {<table className="table table-striped table-hover mt-3">
          <thead className="table-dark">
            <tr>
              <th>Workspace Name</th>
              <th>Explore</th>
              <th>Update</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {workspaces? (
              workspaces.map((workspace) => (
                <tr key={workspace.id}>
                  <td>{workspace.name}</td>
                  <td>
                    <button className="btn btn-primary">
                      Open Workspace
                    </button>
                  </td>
                  <td>
                    <button onClick={() =>{ call(); setWorkSpaceObject(workspace)}} className="btn btn-secondary">
                      Update
                    </button>
                  </td>
                  <td>
                    <button onClick={() => handleDelete(workspace.id,companyId)} className="btn btn-danger">
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4">Loading...</td>
              </tr>
            )}
          </tbody>
        </table>}
        </table>
      </div>
      <center>
        <button onClick={() => navigate(-1)} className="btn btn-primary">Go Back</button>
      </center>

      {addWorkspaceModal}
      {updateWorkspaceModal}
      
    </div>
  );  
}

export default Workspaces;
