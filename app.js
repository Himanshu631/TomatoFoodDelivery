import React from 'react';
import ReactDOM from 'react-dom/client';

const Header = () => {
    return (
        <div className="header">
            <div className="logo-conatiner">
                <img className="logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJgUs_-Phd7DpL_Q4QlLeoiFDCrngm6xMIog&usqp=CAU" />
                <h1>Tomato</h1>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div> 
        </div>
    );
};

const styleCard = {
    backgroundColor:"white",
    color:"black",
    borderRadius:"1rem"
}


const RestaurantCard = () =>{
    return (
        <div className="res-card" style={styleCard}>
            <img className= "res-logo" alt="res-logo" src="https://b.zmtcdn.com/data/pictures/chains/8/310078/749216f498eb2ed21ffd317f4bdc8a1d_o2_featured_v2.jpg?output-format=webp"/>
            <h3>Mera Khana</h3>
        </div>

    );
};

const Body = () =>{
    return (
        <div className="body">
                <div className="search">Search</div>
                <div className="res-Container">
                <RestaurantCard />
                </div>
        </div>
    );
};

const AppLayout = () => {
    return (
        <div className="app">
            <Header />
            <Body />
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);

