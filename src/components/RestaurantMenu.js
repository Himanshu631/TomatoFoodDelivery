import Shimmer from "./Shimmer"
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {

    const { resId } = useParams();

    const resInfo = useRestaurantMenu(resId);

    if(resInfo === null) return <Shimmer />;

    const { name, cuisines } = resInfo?.cards[0]?.card?.card?.info || {};
    const { itemCards } = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

    return (
        <div className="menu text-center">
            <h1 className="font-bold text-4xl">{name}</h1>
            <h3 className="my-2 font-bold text-2xl">{cuisines.join(" ")}</h3>
            <h2 className="my-4 font-bold text-xl underline">Menu</h2>
            <ul className="">
                {itemCards.map(item => 
                <li key={item.card.info.id}>{item.card.info.name} - {"₹ "}{(item.card.info.defaultPrice)/100 || (item.card.info.price)/100}{"/-"}</li>)}
            </ul>   
        </div>
    )
}

export default RestaurantMenu;