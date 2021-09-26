import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {MdFingerprint} from 'react-icons/md';
import {FaBars, FaTimes} from 'react-icons/fa';
import Button from '@restart/ui/esm/Button';
import './Navbar.css';


function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if(window.innerWidth <= 960){
            setButton(false)
        }
        else{
            setButton(true)
        }
    }
    window.addEventListener('resize', showButton);


    return (
        <>
            <div className="navbar">
                <div className="navbar-container container">
                    <Link to = '/' className="navbar-logo">
                        <MdFingerprint className="nav-icon"/>
                        SPARK
                    </Link>
                    <div className="menu-icon" onClick = {handleClick}>
                    {click ? <FaTimes /> : <FaBars/> } 
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className="nav-item">
                            <Link to ='/about' className="nav-links">
                                About
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to ='/clients' className="nav-links">
                                Clients
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to ='/events' className="nav-links">
                                Evens
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to ='/blogs' className="nav-links">
                                Blogs
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to ='/podcast' className="nav-links">
                                Podcast
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to ='/shop' className="nav-links">
                                Shop
                            </Link>
                        </li>
                        <li className="nav-btn">
                            {button ? (
                                <Link to='sign-up' className="btn-link">
                                    <Button buttonStyle='btn--outline'>Sign up</Button>
                                </Link>
                            ): (
                                <Link to= 'sign-up' className="btn-link">
                                    <Button buttonStyle='btn--outline'
                                            buttonSize='btn--mobile'
                                    >Sign Up</Button>
                                </Link>
                            )}
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}
export default Navbar;
