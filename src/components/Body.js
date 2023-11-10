import RestaurantCard from "./RestaurantCard";
import { useState,useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom"
import useOnlineStatus from "../utils/useOnlineStatus"

const Body = () =>{
    const [listofRes, setListOfRes] = useState([]);
    const [filtereRes, setfiltereRes] = useState([]);
    const [searchText, setsearchText] = useState("");

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
        
        const json = await data.json();

        setListOfRes(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setfiltereRes(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        
    }

    const onlineStatus = useOnlineStatus();
    
    if(onlineStatus === false){
        return (
            <h1> You are offline , please try to RESET your internet</h1>
        )
    }

    if (listofRes.length === 0) {
        return <Shimmer />
    }

    return (
        <div className="body">       
                
                <div className="filter">
                    <div className="top-cont">
                        <input 
                            type="text"
                            className="input-box"
                            value={searchText}
                            onChange={(e)=>{
                                setsearchText(e.target.value)
                            }} />
                        <button className="search-btn"
                        onClick={()=> {
                            console.log(searchText);
                            const filterRes = listofRes.filter(
                                (res) => res.info.name.toLowerCase().includes(searchText.toLowerCase())
                            );
                            setfiltereRes(filterRes);
                        }}>Search</button>
                    </div>
                
                    <button className="filter-btn" onClick={()=>{
                        const filteredlist = listofRes.filter(
                            (res) => res.info.avgRating > 4.1
                        );
                        console.log(filteredlist);
                        setfiltereRes(filteredlist);
                        }}>Top rated restaurant</button>
                </div>

                <div className="res-container">
                {
                    filtereRes.map((restaurant) => ( <Link key={restaurant.info.id} className="custom-link"
                        to={"/restaurant/"+restaurant.info.id}>
                            <RestaurantCard  resData={restaurant} /></Link>))
                }
                </div>
        </div>
    );
};

export default Body;