import RestaurantCard, { withInfolabel } from "./RestaurantCard";
import { useEffect, useState, useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

// Chunking, Code splitting, Dynamic bundling, Lazy Loading

const Body = () => {
    const [listOfRestaurants, setListOfRestraunt] = useState([]);
    const [filteredRestaurant, setFilteredRestaurant] = useState([])
    const [searchText, setSearchText] = useState("")

    const RestaurantCardWithInfo = withInfolabel(RestaurantCard)

    useEffect(() => {
        fetchData();
    }, [])

    const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9352403&lng=77.624532&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
        const json = await data.json()
        setListOfRestraunt(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        setFilteredRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    }

    // console.log(listOfRestaurants)

    const onlineStaus = useOnlineStatus();
    // console.log(onlineStaus)
    if (onlineStaus === false) return (<h1>You are Offline</h1>);

    const { loggedInUser, setUserName } = useContext(UserContext);

    return listOfRestaurants.length === 0 ? <Shimmer /> : (
        <div className="body">
            <div className="flex">
                <div className="m-4 p-4">
                    <input type="text" className="border border-solid border-black" value={searchText} onChange={(e) => {
                        setSearchText(e.target.value)
                    }} />
                    <button className="px-4 py-2 bg-green-100 m-4 rounded-xl" onClick={() => {
                        const filteredRestaurant = listOfRestaurants.filter(
                            (res) => res.info.name.toLowerCase().includes(searchText.toLowerCase())
                        )
                        setFilteredRestaurant(filteredRestaurant)
                    }}>Search</button>
                </div>
                <div className="m-4 p-4 flex items-center">
                    <button
                        className="px-4 py-2 bg-gray-100 rounded-xl"
                        onClick={() => {
                            const filteredList = listOfRestaurants.filter(
                                (res) => res.info.avgRating > 4
                            );
                            console.log(filteredList);
                            setFilteredRestaurant(filteredList);
                        }}
                    >
                        Top Rated Restaurants
                    </button>
                </div>
                <div className="search m-4 p-4 flex items-center">
                    <label>UserName : </label>
                    <input
                        className="border border-black p-2"
                        value={loggedInUser}
                        onChange={(e) => setUserName(e.target.value)}
                    />
                </div>
            </div>
            <div className="flex flex-wrap">
                {
                    filteredRestaurant.map((restaurant) => {
                        return <Link key={restaurant.info.id} to={"/restaurants/" + restaurant.info.id}>
                            {
                                restaurant.info.aggregatedDiscountInfoV3 ? (<RestaurantCardWithInfo resData={restaurant} />) : <RestaurantCard resData={restaurant} />
                            }
                        </Link>
                    })
                }
            </div>
        </div>
    );
}

export default Body;