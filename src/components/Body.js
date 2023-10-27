import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState } from "react";

const Body = () =>{
    const [listofRes, setListOfRes] = useState(resList);

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