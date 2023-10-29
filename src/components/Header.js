import { LOGO_URL } from "../utils/constants";
import { useState } from 'react';
import { Link } from "react-router-dom";


const Header = () => {

    const [btnLogin, setbtnLogin] = useState("Login");

    return (
        <div className="header">
            <div className="logo-conatiner">
                <img className="logo" src={LOGO_URL} />
                <h1>Tomato</h1>
            </div>
            <div className="nav-items">
                <ul>
                    <li>
                        <Link to="/">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to="/about">    
                            About Us
                        </Link>
                    </li>
                    <li>
                    <Link to="/contact">
                        Contact Us
                    </Link></li>
                    <li>Cart</li>
                    <li>My Profile</li>
                    <button className="login-btn" onClick={()=>{
                        btnLogin==="Login" ? setbtnLogin("Logout") : setbtnLogin("Login"); 
                    }}>{btnLogin}</button>
                </ul>
            </div> 
        </div>  
    );
};

export default Header;