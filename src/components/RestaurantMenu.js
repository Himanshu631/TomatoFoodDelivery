import { useEffect,useState } from "react";
import Shimmer from "./Shimmer"

const RestaurantMenu = () => {

    const [ resInfo, setResInfo ] = useState(null);

    useEffect(() => {
        fetchMenu();
    }, []);

    const fetchMenu = async () => {
        const data = await fetch(
            "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.6139391&lng=77.2090212&restaurantId=10323"
            );
        const json = await data.json();
        console.log(json);
        setResInfo(json.data)
    };

    if(resInfo === null) return <Shimmer />;

    const { name, cuisines } = resInfo?.cards[0]?.card?.card?.info || {};
    const {itemCards} = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[4]?.card?.card;

    return (
        <div className="menu">
            <h1>{name}</h1>
            <h3>{cuisines.join(" ")}</h3>
            <h2>Menu</h2>
            <ul>
                {itemCards.map(item => 
                <li key={item.card.info.id}>{item.card.info.name} - {"Rs."} {(item.card.info.defaultPrice)/100}{"/-"}</li>)}
            </ul>   
        </div>
    )
}

export default RestaurantMenu;