export default function Home2(){
    return(
        <div className="backgroundHome">
        <div className='container '>
            <div className="row">
                <div className='col-7 d-flex flex-column justify-content-center'>
                    <div class="speech-bubble ">

                        
                        <div>
                            <h3 className="text-blue mb-4">Secure your family with</h3>
                        </div>

                        <div>
                            <h1 className="text-blue font-weight-bold h1-font-size mb-3">WeCare</h1>
                        </div>

                        <div>
                            <button type="submit" className="btn btn-login">Get Started</button>
                        </div>
 
                    </div>
                </div>
                <div className="col-5">
                    <img src="./elderlies_with_dog.png" alt="elderly animation" className="elderly-img" />
                </div>
            </div>
        </div>
    </div>
    )
}