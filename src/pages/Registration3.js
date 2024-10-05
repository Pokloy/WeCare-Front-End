
// export default function Registration3(){
//     const data = useSelector(state=>state.registration);
//     console.log(data);
//     return (
//         <div className='background1'>
//         <div className="login-container">
//                 <div class="login-box">
//                 <span class="material-symbols-outlined">
//                     arrow_back
//                     </span>
//                     <h3 className='pb-3'>Almost there!</h3>
//                     <form>
//                         <div className="form-group">
//                             <label for="email" className='pb-3'>Step 3: Roles and Agreement</label>
//                             <input type="file" id="avatar" name="avatar" accept="image/png, image/jpeg" />
//                         </div>
//                         <div className="form-group">
//                             <label for="password" className='pb-3'>Register an account for:</label>
//                             <div className="d-flex justify-content-center">
                                
//                                 <div className="square-place-holder p-2 m-2 d-flex flex-column align-items-center">
//                                     <span class="material-symbols-outlined icon-custom">
//                                     elderly
//                                     </span>
//                                     <p className="font-white">Senior</p>                                    
//                                 </div>

import { useNavigate,useSelector } from "react-router-dom";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

export default function Registration3() {
  const navigate = useNavigate();

  const data = useSelector((state) => state.registration);
  console.log(data);

  const [isSeniorModalOpen, setIsSeniorModalOpen] = useState(false);
  const [isCaregiverModalOpen, setIsCaregiverModalOpen] = useState(false);

  // Function to handle modal open/close
  const openSeniorModal = () => setIsSeniorModalOpen(true);
  const closeSeniorModal = () => setIsSeniorModalOpen(false);
  const openCaregiverModal = () => setIsCaregiverModalOpen(true);
  const closeCaregiverModal = () => setIsCaregiverModalOpen(false);

  return (
    <div className="background1">
      <div className="login-container">
        <div className="login-box">
          <span
            className="material-symbols-outlined"
            onClick={() => navigate("/registration1")}
          >
            arrow_back
          </span>
          <h3 className="pb-3">Almost Finish!</h3>
          <form>
            <div className="form-group">
              <label className="pb-3">Step 2: Roles and Agreement</label>
            </div>
            <div className="form-group">
              <label className="pb-3">Register an account for:</label>
              <div className="d-flex justify-content-center">
                {/* Senior button */}
                <div
                  className="square-place-holder p-2 m-2 d-flex flex-column align-items-center"
                  onClick={openSeniorModal}
                >
                  <span className="material-symbols-outlined icon-custom">
                    elderly
                  </span>
                  <p className="font-white">Senior</p>
                </div>

                {/* Caregiver button */}
                <div
                  className="square-place-holder p-2 m-2 d-flex flex-column align-items-center"
                  onClick={openCaregiverModal}
                >
                  <span className="material-symbols-outlined icon-custom">
                    person_apron
                  </span>
                  <p className="font-white">Caregiver</p>
                </div>
              </div>

              {/* Agreement section */}
              <div className="form-group">
                <label className="pt-3 pb-3">
                  To continue, please review and agree to the following:
                </label>
              </div>

              <div className="form-group">
                <input type="checkbox" className="mr-2" />
                <label className="pb-1">I agree to the Data Privacy</label>
              </div>

              <div className="form-group">
                <input type="checkbox" className="mr-2" />
                <label className="pb-2">I agree to the Terms & Conditions.</label>
              </div>
            </div>
            <button type="submit" className="btn btn-login">
              Register
            </button>
          </form>
        </div>
      </div>


      {/* Senior Citizen Modal */}
      {isSeniorModalOpen && (
        <div className="modal">
          <div className="modal-content d-block">
            <span className="close" onClick={closeSeniorModal}>
              &times;
            </span>
            <h2>Senior Application Form</h2>
            <form>

            <div className="d-flex">  

             <div className="d-block">  

                <div className="form-group d-flex">
                    <label>Name</label>
                    <input type="text" className="form-control" placeholder="Enter Family Name" />
                    <input type="text" className="form-control" placeholder="Enter First Name  " />
                </div>

                <div className="form-group d-flex">
                    <label>Address</label>
                    <input type="number" className="form-control" placeholder="Age" />
                </div>

              </div> 

              <div className="d-block ml-5">  

                    <div className="form-group sex-checkBox-container">
                        <label>Sex: </label>
                        <div className="d-flex">
                        <input type="checkbox" className="form-control sex-checkBox" />
                        <label>Male</label>
                        </div>

                        <div className="d-flex">
                        <input type="checkbox" className="form-control sex-checkBox" />
                        <label>Female</label>
                        </div>
                    </div>

                    <div className="form-group d-flex">
                        <label>Address</label>
                        <input type="number" className="form-control" placeholder="Age" />
                    </div>

                </div> 
            </div> 


              {/* Add more fields as necessary */}
              <button type="submit" className="btn btn-submit">
                Submit
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Caregiver Modal */}
      {isCaregiverModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeCaregiverModal}>
              &times;
            </span>
            <h2>Caregiver Registration Form</h2>
            <form>
              <div className="form-group">
                <label>Name</label>
                <input type="text" className="form-control" placeholder="Name" />
              </div>
              <div className="form-group">
                <label>Experience (in years)</label>
                <input
                  type="number"
                  className="form-control"
                  placeholder="Experience"
                />
              </div>
              {/* Add more fields as necessary */}
              <button type="submit" className="btn btn-submit">
                Submit
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
