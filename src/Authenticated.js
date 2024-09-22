import './App.css';

import SideMenu from './components/SideMenu';

import DashBoard from './pages/DashBoard';

import { BrowserRouter as Router } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';



function Authenticated() {

    return(
        <Router>
            <div className='d-flex'>

                <div className='side-menu-container'>
                    <SideMenu />
                </div>


                <div className='custom-container'>
                    <Routes>
                        <Route path='/dashboard' element={<DashBoard />}/>
                    </Routes>
                </div>

            </div>
        </Router>
    );
}
export default Authenticated;