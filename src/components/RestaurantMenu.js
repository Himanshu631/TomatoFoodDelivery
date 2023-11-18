import Shimmer from "./Shimmer"
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory"
import { useState } from 'react';


const RestaurantMenu = () => {

    const { resId } = useParams();

    const [showIndex,setshowIndex] = useState(0);

    const resInfo = useRestaurantMenu(resId);

    if(resInfo === null) return <Shimmer />;

    const { name, cuisines } = resInfo?.cards[0]?.card?.card?.info || {};
    
    const { itemCards } = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
    
    const categories= resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
        (c) => 
        c.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");

    //console.log(categories);
    
    return (
        <div className="menu text-center">
            <h1 className="font-bold text-4xl">{name}</h1>
            <h3 className="my-2 font-bold text-2xl">{cuisines.join(", ")}</h3>
            <h2 className="my-4 font-bold text-xl underline">Menu</h2>
            {categories.map((category, index) => (
                <RestaurantCategory 
                    key={category.card.card.title} 
                    data={category.card.card}
                    showItems={index === showIndex ? true : false}
                    setshowIndex={()=>setshowIndex(index)}
                />
            ))}
        </div>
    )
}

export default RestaurantMenu;