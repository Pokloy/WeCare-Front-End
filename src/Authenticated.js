import './App.css';
import { useState } from 'react';

import SideMenu from './components/SideMenu';
import AppNavbar from './components/AppNavbar';

import DashBoard from './pages/DashBoard';

import { BrowserRouter as Router } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';

function Authenticated() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false); // Control sidebar open state

    return (
        <Router>
            <div className="d-flex">
                <SideMenu isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />
                
                {/* Apply nav-content class */}
                <div className={`nav-content ${isSidebarOpen ? 'shifted' : ''} `}>

                    <div >
                        <AppNavbar />
                    </div>

                    <div className='mx-4 mt-5'>
                        <Routes>
                            <Route path='/dashboard' element={<DashBoard />} />
                        </Routes>
                    </div>


                </div>
            </div>
        </Router>
    );
}

export default Authenticated;
