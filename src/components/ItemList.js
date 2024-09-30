import { CDN_URL } from "../utils/constants";

const ItemList = (props) => {
    const { items } = props

    return (
        <div>
            <div>
                {
                    items.map(item =>
                        <div key={item.card.info.id} className="p-2 m-2 border-gray-300 border-b-2 text-left flex justify-between">
                            <div className="w-9/12">
                                <div className="py-2">
                                    <div className="font-bold pb-2">{item.card.info.name}</div>
                                    <div className="font-bold pb-2">₹{item.card.info.price / 100}</div>
                                    <div className="text-sm pb-2">{item.card.info.description}</div>
                                </div>
                            </div>
                            <div className="w-3/12 p-4">
                                <img className="rounded" src={CDN_URL + item.card.info.imageId} alt="food-pic" />
                            </div>
                        </div>)
                }
            </div>
        </div>
    );
}

export default ItemList;