import { CDN_URL } from "../utils/constants"
import { addItem } from "../utils/cartSlice"
import { useDispatch } from "react-redux";

const ItemList = ({items}) => {
    
    const dispatch = useDispatch();

    const handleAddItem = (item) => {
        //Dispatch an Action
        dispatch(addItem(item));
    }

    return (
    <div>
        {items.map((item) => (
            <div key={item.card.info.id} className="flex justify-between border-gray-400 border-b-2">
                <div className="w-9/12 text-left p-4 ">
                    <div className="font-bold">
                        <span>{item.card.info.name}</span>
                        <span> - ₹{item.card.info.defaultPrice ? item.card.info.defaultPrice /100 : item.card.info.price /100 }</span>
                        </div>
                    <div className="text-xs">{item.card.info.description}</div>  
                </div>
                <div className="w-3/12 p-4">
                    <div className="absolute mx-12 my-[88px]">
                        <button className="px-2 py-1  w-16 text-xs absolute bg-white text-black rounded-lg"
                         onClick={() => handleAddItem(item)}
                        >ADD</button>
                    </div>
                    <img src={CDN_URL+item.card.info.imageId} className="w-full h-28 rounded-md"/>
                    
                </div>
            </div>
        ))}
    </div>
    );
};

export default ItemList;