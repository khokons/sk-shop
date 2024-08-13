import { useEffect, useState } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import Item from "../../Components/Item/Item";

const ShopCategory = (props) => {
  const [allProduct, setAllProduct] = useState([]);

  useEffect(() => {
    fetch("/public/allData.json")
      .then((res) => res.json())
      .then((data) => setAllProduct(data));
  }, []);

  return (
    <div className="container mx-auto px-4">
      <img src={props.banner} alt="Category Banner" className="w-full" />
      <div className="flex flex-col lg:flex-row justify-between items-center py-5 md:py-8 lg:py-12">
        <p className="gradient-text text-xl md:text-4xl uppercase text-center md:text-left mb-4 lg:mb-0">
          <span>Showing 1-12</span> out of 36 products
        </p>
        <div className="flex justify-center items-center text-black gradient-btn p-4 rounded-full">
          Sort by <RiArrowDropDownLine />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {allProduct.map((item, i) => {
          if (props.category === item.category) {
            return (
              <Item
                key={i}
                id={item.id}
                name={item.name}
                image={item.image}
                new_price={item.new_price}
                old_price={item.old_price}
              />
            );
          } else {
            return null;
          }
        })}
      </div>
    </div>
  );
};

export default ShopCategory;
