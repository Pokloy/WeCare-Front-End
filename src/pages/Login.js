
export default function Login(){

    return (
    <div className='background1'>
    <div className="login-container">
            <div class="login-box">
                <h3 className='pt-4 pb-4'>Login to your account</h3>
                <form>
                    <div className="form-group">
                        <label for="email" className='pb-3'>Email</label>
                        <input type="email" className="form-control" id="email" placeholder="Enter Email Address" />
                    </div>
                    <div className="form-group">
                        <label for="password" className='pb-3'>Password</label>
                        <input type="password" className="form-control" id="password" placeholder="Enter Password" />
                    </div>
                    <div className="form-text mb-4 mt-4">
                        <a href="#">Forgot Password?</a>
                    </div>
                    <button type="submit" className="btn btn-login">Login</button>
                    <div className="signup-text">
                        <small>Don't have an account? <a href="#">Sign up</a></small>
                    </div>
                </form>
            </div>
        </div>
    </div>
    )

}