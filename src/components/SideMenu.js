import React from 'react';

export default function SideMenu({ isOpen, setIsOpen }) {
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            {/* Hamburger button */}
            <div className="hamburger" onClick={toggleMenu}>
                <span className="material-symbols-outlined">menu</span>
            </div>
 
            {/* Sidebar */}
            <div className={`sidebar ${isOpen ? 'open' : ''}`}>
                <div className="logo my-4 text-center">
                    <img src="./wecare_logo.png" alt="WeCare" width="100" />
                </div>

                <div className="menu-items flex-grow-1 d-flex flex-column ml-4">
                    <div className="menu-item my-3">
                        <span className="material-symbols-outlined side-menu-color icon-size">
                            home
                        </span>
                        <p className="ml-2">Home</p>
                    </div>
                    <div className="menu-item my-3">
                        <span className="material-symbols-outlined side-menu-color icon-size">
                            search
                        </span>
                        <p className="ml-2">Find</p>
                    </div>
                    <div className="menu-item my-3">
                        <span className="material-symbols-outlined side-menu-color icon-size">
                            chat
                        </span>
                        <p className="ml-2">Message</p>
                    </div>
                </div>

                <div className="support-item mb-4 ml-4" >
                    <span className="material-symbols-outlined side-menu-color icon-size">
                        volunteer_activism
                    </span>
                    <p>Support</p>
                </div>

                <div className="support-item mb-4 ml-4">
                    <span className="material-symbols-outlined side-menu-color icon-size">
                        logout
                    </span>
                    <p>Log-out</p>
                </div>
            </div>
        </>
    );
}
