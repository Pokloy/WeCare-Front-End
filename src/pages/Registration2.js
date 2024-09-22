export default function Registration2(){

    return (
        <div className='background1'>
        <div className="login-container">
                <div class="login-box">
                <span class="material-symbols-outlined">
                    arrow_back
                    </span>
                    <h3 className='pb-3'>A few more steps</h3>
                    <form>
                        <div className="form-group">
                            <label for="email" className='pb-3'>Step 2: Profile Setup</label>
                            <input type="file" id="avatar" name="avatar" accept="image/png, image/jpeg" />
                        </div>
                        <div className="form-group">
                            <label for="password" className='pb-3'>Display Name</label>
                            <input type="password" className="form-control" id="password" placeholder="Enter Display Name" />
                        </div>
                        <div className="form-group">
                            <label for="password" className='pb-3'>Contact No.</label>
                            <input type="password" className="form-control" id="password" placeholder="Re Enter Password" />
                        </div>
                        <div className="form-group">
                            <label for="password" className='pb-3'>Birthday.</label>
                            <input type="date" id="start" name="trip-start" />
                        </div>
                        <button type="submit" className="btn btn-login">Next</button>
                    </form>
                </div>
            </div>
        </div>
    )
}