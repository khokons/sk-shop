import { useEffect, useState } from "react";
import Item from "../../Components/Item/Item";

const CartItems = () => {
    const [carts, setCarts] = useState([]);
    const [notFound, setNotFound] = useState(false);
    const [showAll, setShowAll] = useState(false);

    useEffect(() => {
        const cartItems = JSON.parse(localStorage.getItem("favorites"));

        if (cartItems) {
            setCarts(cartItems);
        } else {
            setNotFound(true);
        }
    }, []);

    const handleDeleteAll = () => {
        localStorage.removeItem("favorites");
        setCarts([]);
    };

    return (
        <div>
            {notFound ? (
                <p className="flex justify-center items-center h-[300px] text-4xl text-black">
                    No Data Found
                </p>
            ) : (
                <div>
                    {carts.length > 0 && (
                        <button
                            className="block mx-auto my-4 py-2 px-4 bg-red-500 text-white rounded-md"
                            onClick={handleDeleteAll}
                        >
                            Delete All
                        </button>
                    )}

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        {showAll ? (
                            carts.map((item, i) => (
                                <Item
                                    key={i}
                                    id={item.id}
                                    name={item.name}
                                    image={item.image}
                                    new_price={item.new_price}
                                    old_price={item.old_price}
                                />
                            ))
                        ) : (
                            carts.slice(0, 4).map((item, i) => (
                                <Item
                                    key={i}
                                    id={item.id}
                                    name={item.name}
                                    image={item.image}
                                    new_price={item.new_price}
                                    old_price={item.old_price}
                                />
                            ))
                        )}
                    </div>

                    {carts.length > 4 && (
                        <button
                            className="block mx-auto my-4 py-2 px-4 gradient-bg rounded-md text-black"
                            onClick={() => setShowAll(!showAll)}
                        >
                            {showAll ? "Show Less" : "See All"}
                        </button>
                    )}
                </div>
            )}

        </div>
    );
};

export default CartItems;
