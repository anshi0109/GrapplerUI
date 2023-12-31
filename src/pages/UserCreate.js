import { Field, Formik } from "formik";
import { Form, useNavigate } from "react-router-dom";

const UserCreate=()=>{

    const navigate=useNavigate();

    function handleaddCompany(){
        console.log("handle company");
    }

    return(
       <>
       <section className="vh-100" style={{ backgroundColor: '#eee' }}>
      <div className="container h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-lg-12 col-xl-11">
            <div className="card text-black" style={{ borderRadius: '25px' }}>
              <div className="card-body p-md-5">
                <div className="row justify-content-center">
                  <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                    <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Create User</p>
                    <form className="mx-1 mx-md-4">
                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                        <div className="form-outline flex-fill mb-0">
                        <label className="form-label" htmlFor="form3Example1c"> Name :</label>
                          <input type="text" placeholder="enter user name"id="form3Example1c" className="form-control" required/>
                        </div>
                      </div>
                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                        <div className="form-outline flex-fill mb-0">
                        <label className="form-label" htmlFor="form3Example3c"> Email :</label>
                          <input type="email" placeholder="enter user email" id="form3Example3c" className="form-control" required/>
                        </div>
                      </div>         

                      <div className="d-flex justify-content-left mx-4 mb-3 mb-lg-4">
                        <button type="button" onClick className="btn btn-primary btn-lg">Add User</button>
                      </div>

                      <div className="d-flex justify-content-left mx-4 mb-3 mb-lg-4">
                        <button type="button" onClick={navigate(-1)} className="btn btn-primary btn-lg">Back</button>
                      </div>
                    </form>
                  </div>
                  <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
       </>
    );
}


export default UserCreate;