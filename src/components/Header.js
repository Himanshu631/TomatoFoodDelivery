import { LOGO_URL } from "../utils/constants";
import { useState } from 'react';
import { Link } from "react-router-dom";


const Header = () => {

    const [btnLogin, setbtnLogin] = useState("Login");

    return (
        <div className="flex justify-between bg-pink-100 shadow-xl mb-5">
            <div className="m-2 flex">
                <img className="w-10 h-10" src={LOGO_URL} />
                <h1 className="ml-2 font-bold text-3xl font-serif">Tomato</h1>
            </div>
            <div className="nav-items">
                <ul className="flex mt-1 mr-4">
                    <li className="p-3 font-bold hover:bg-red-200 hover:underline">
                        <Link to="/" className="custom-link">
                            Home
                        </Link>
                    </li>
                    <li className="p-3 font-bold hover:bg-red-200 hover:underline">
                        <Link to="/about" className="custom-link">    
                            About Us
                        </Link>
                    </li>
                    <li className="p-3 font-bold hover:bg-red-200 hover:underline">
                    <Link to="/contact" className="custom-link">
                        Contact Us
                    </Link></li>
                    <li className="p-3 font-bold  hover:bg-red-200 hover:underline">
                        <Link to="/grocery" className="custom-link">
                            Grocery
                        </Link>
                    </li>
                    <li className="custom-link p-3 font-bold hover:bg-red-200 hover:underline">Cart</li>
                    <li className="custom-link p-3 font-bold hover:bg-red-200 hover:underline">My Profile</li>
                    <button className="login-btn p-3 font-bold bg-cyan-300  hover:bg-purple-400" onClick={()=>{
                        btnLogin==="Login" ? setbtnLogin("Logout") : setbtnLogin("Login"); 
                    }}>{btnLogin}</button>
                </ul>
            </div> 
        </div>  
    );
};

export default Header;