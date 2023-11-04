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
                        <Link to="/" className="custom-link">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to="/about" className="custom-link">    
                            About Us
                        </Link>
                    </li>
                    <li>
                    <Link to="/contact" className="custom-link">
                        Contact Us
                    </Link></li>
                    <li className="custom-link">Cart</li>
                    <li className="custom-link">My Profile</li>
                    <button className="login-btn" onClick={()=>{
                        btnLogin==="Login" ? setbtnLogin("Logout") : setbtnLogin("Login"); 
                    }}>{btnLogin}</button>
                </ul>
            </div> 
        </div>  
    );
};

export default Header;