import { CDN_URL } from "../utils/constants"

const RestaurantCard = (props) =>{
    const {resData} = props;

    const {name,cloudinaryImageId,cuisines,avgRatingString,sla} = resData?.info;
    return (
        <div className="res-card m-4 bg-orange-100 rounded-lg p-4  w-[250px]">
            <img className= " flex items-center res-logo px-2 rounded-xl" alt="res-logo" src={CDN_URL+cloudinaryImageId}/>
            <div className="res-info">
                <h3 className="font-bold text-2xl">{name}</h3>
                <h4>{cuisines.join(", ")}</h4>
                <h4>{avgRatingString} Stars</h4>
                <h4>{sla.slaString}</h4>
            </div>
        </div>

    );
};

export default RestaurantCard;