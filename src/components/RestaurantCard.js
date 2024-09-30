import { useContext } from "react";
import { CDN_URL } from "../utils/constants"
import UserContext from "../utils/UserContext";

const RestaurantCard = (props) => {
    const { resData } = props
    const {
        cloudinaryImageId,
        name,
        avgRating,
        cuisines,
        costForTwo,
        sla
    } = resData?.info
    const { loggedInUser } = useContext(UserContext);

    return (
        <div className="m-4 p-4 w-[250px] bg-gray-200 rounded-lg hover:bg-gray-400">
            <img className="rounded-lg" src={CDN_URL + cloudinaryImageId} alt="food-pic" />
            <h3 className="font-bold py-4 text-lg">{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{avgRating} stars</h4>
            <h4>{costForTwo}</h4>
            <h4>{sla?.slaString}</h4>
            <h4>User : {loggedInUser} </h4>
        </div>
    );
}

export const withInfolabel = (RestaurantCard) => {
    return (props) => {
        return (
            <div>
                <label className="absolute bg-green-400 text-purple-100 m-2 p-2 rounded-lg">Label</label>
                <RestaurantCard {...props} />
            </div>
        );
    }
}

export default RestaurantCard;