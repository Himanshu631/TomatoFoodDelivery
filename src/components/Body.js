import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState,useEffect } from "react";

const Body = () =>{
    /*const [listofRes, setListOfRes] = useState(resList);*/
    const [listofRes, setListOfRes] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
        
        const json = await data.json();
        console.log(json);

        setListOfRes(json.data.cards[2].card.card.gridElements.infoWithStyle.restaurants);
    }

    return (
        <div className="body">
                <div className="filter">
                    <button className="filter-btn" onClick={()=>{
                        const filteredlist = listofRes.filter(
                            (res) => res.info.avgRating > 4.1
                        );
                        console.log(filteredlist);
                        setListOfRes(filteredlist);
                        }}>Top rated restaurant</button>
                </div>
                <div className="res-container">
                {
                    listofRes.map((restaurant) => ( <RestaurantCard key={restaurant.info.id} resData={restaurant} />))
                }
                </div>
        </div>
    );
};

export default Body;