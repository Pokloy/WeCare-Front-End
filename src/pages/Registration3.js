import { useSelector } from "react-redux";
export default function Registration3(){
    const data = useSelector(state=>state.registration);
    console.log(data);
    return (
        <div className='background1'>
        <div className="login-container">
                <div class="login-box">
                <span class="material-symbols-outlined">
                    arrow_back
                    </span>
                    <h3 className='pb-3'>Almost there!</h3>
                    <form>
                        <div className="form-group">
                            <label for="email" className='pb-3'>Step 3: Roles and Agreement</label>
                            <input type="file" id="avatar" name="avatar" accept="image/png, image/jpeg" />
                        </div>
                        <div className="form-group">
                            <label for="password" className='pb-3'>Register an account for:</label>
                            <div className="d-flex justify-content-center">
                                
                                <div className="square-place-holder p-2 m-2 d-flex flex-column align-items-center">
                                    <span class="material-symbols-outlined icon-custom">
                                    elderly
                                    </span>
                                    <p className="font-white">Senior</p>                                    
                                </div>

                                <div className="square-place-holder p-2 m-2 d-flex flex-column align-items-center">
                                    <span class="material-symbols-outlined icon-custom">
                                    person_apron
                                    </span>
                                    <p className="font-white">Senior Assistant</p>
                                </div>

                            </div>    
                            <div className="form-group">
                                <label for="email" className='pt-3 pb-3'>To continue, please review and agree to the following:</label>
                            </div>
                            
                            <div className="form-group">
                                <input type="checkbox" className="mr-2"/>
                                <label for="email" className='pb-1'>I agree to the the Data Privacy</label>
                            </div>

                            <div className="form-group">
                                <input type="checkbox" className="mr-2"/>
                                <label for="email" className='pb-2'>I agree to the the Terms & Conditions.</label>
                            </div>
                      
                        </div>
                        <button type="submit" className="btn btn-login">Register</button>
                    </form>
                </div>
            </div>
        </div>
    )
}