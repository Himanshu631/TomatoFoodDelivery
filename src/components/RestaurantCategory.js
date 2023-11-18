import ItemList from "./ItemList"
import { useState } from "react";

const RestaurantCategory = ({data, showItems, setshowIndex}) => {
    //console.log(data);
    //const [showItems, setshowItems] = useState(false);
    const [isCollapsed, setIsCollapsed] = useState(!showItems);

    const handleClick = () =>{
        //setshowItems(!showItems);
        setIsCollapsed(true);
        setshowIndex();
    }

    return <div className="w-6/12 mx-auto">
                    <div className="bg-gray-100 shadow-lg my-4">
                        <div className="py-4 cursor-pointer text-left pl-4 font-bold" onClick={handleClick}>
                            {data.title} ({data.itemCards.length})
                        </div>
                        {showItems && <ItemList items={data.itemCards}/>}
                    </div>   
            </div>
}

export default RestaurantCategory;