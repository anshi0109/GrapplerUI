// import React from 'react';
// import { useState } from 'react';
// import { Button, Modal } from 'react-bootstrap';
// import { Form } from 'react-router-dom';
// import { addProjectApi } from '../api/ProjectApi';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// const AddProjects=()=>{
   
//     const [showModal,setShowModal]=useState(false);

//     async function addWorkspace(name){
//         try{
//         console.log("adding workspace",name);
//         const response=await addWork({name},companyId);
//         console.log(response.data);
//         dispatch(createWorkspaces(response.data));
//         toast.success('Workspace created Successfully!');
//         handleModalClose();
//         }catch(error){
//           if(error.response){
//             const status=error.response.status;
//             toast.error(error.response.data.message,{position: "top-center",});
//           }
//         }
//     }
//     async function addProject(name,subtype){
//         try{
//         console.log("adding project",name);
//         const response=await addProjectApi({name},companyId);
//         console.log(response.data);
//         //dispatch(createProject(response.data));
//         toast.success('Workspace created Successfully!');
//         handleModalClose();
//         }catch(error){
//           if(error.response){
//             const status=error.response.status;
//             toast.error(error.response.data.message,{position: "top-center",});
//           }
//         }
//     }

//     const handleModalClose = () => setShowModal(false);
//     const addProjectModal=(
//     <Modal show={showModal} onHide={handleModalClose}>
//     <Modal.Header closeButton>
//       <Modal.Title>Create Project</Modal.Title>
//     </Modal.Header>
//     <Modal.Body>
//       <Form>
//         <Form.Group controlId="workspaceName">
//           <Form.Label>Project Name :</Form.Label>
//           <Form.Control type="text" placeholder="Enter project name" id="name" required/>
//         </Form.Group>

//         <Form.Group controlId="workspaceName">
//           <Form.Label>SubType :</Form.Label>
//           <Form.Control type="text" placeholder="Enter subtype of project" id="subtype" required/>
//         </Form.Group>
//       </Form>
//     </Modal.Body>
//     <Modal.Footer>
//       <Button variant="secondary" onClick={handleModalClose}>
//         Close
//       </Button>
//       <Button variant="primary" type="submit" onClick={() => {addProject(document.getElementById('name').value,document.getElementById('subtype').value)}}>
//         Create Project
//       </Button>
//     </Modal.Footer>
//   </Modal>
// );

    

//     return(
//         <>
//         <button onClick={}>Create Project</button>
//         </>
//     );
// }

// export default AddProjects;