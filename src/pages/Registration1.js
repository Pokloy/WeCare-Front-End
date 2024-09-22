export default function Registration1(){

    return (
        <div className='background1'>
        <div className="login-container">
                <div class="login-box">
                <span class="material-symbols-outlined">
                    arrow_back
                    </span>
                    <h3 className='pb-3'>Let's create your account</h3>
                    <form>
                        <div className="form-group">
                            <label for="email" className='pb-3'>Step 1: Account Details</label>
                            <label for="email" className='pb-3'>Email</label>
                            <input type="email" className="form-control" id="email" placeholder="Enter Email Address" />
                        </div>
                        <div className="form-group">
                            <label for="password" className='pb-3'>Password</label>
                            <input type="password" className="form-control" id="password" placeholder="Enter Password" />
                        </div>
                        <div className="form-group">
                            <label for="password" className='pb-3'>Confirm Password</label>
                            <input type="password" className="form-control" id="password" placeholder="Re Enter Password" />
                        </div>
                        <button type="submit" className="btn btn-login">Next</button>
                    </form>
                </div>
            </div>
        </div>
    )
}