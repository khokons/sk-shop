import { useEffect, useState } from "react";
import Item from "../../../Components/Item/Item";

const Popular = () => {

    const [popular, setPopular] = useState([]);

    useEffect(()=>{
        fetch('/public/data.json')
        .then(res=> res.json())
        .then(data=> setPopular(data))
    },[])
    

    return (
        <div className='my-12'>
      <div className="pb-12 flex flex-col items-center relative">
  <div className="relative inline-block">
    <h2 className="text-center text-orange-300 inline-block text-2xl md:text-3xl lg:text-5xl font-poppins font-semibold uppercase text-shadow">Popular In Women</h2>
    <hr className="h-[6px] rounded-lg gradient-bg text-center w-full absolute bottom-[-10px]" />
  </div>
</div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {
                    popular.map((item,i)=>{
                        return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}></Item>
                    })
                }
        </div>
        
    </div>
    );
};

export default Popular;