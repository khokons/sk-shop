import React, { useEffect, useState } from 'react';
import Item from '../../Item/Item';

const RelatedProducts = () => {

    const [relatedProduct, setRelatedProduct] = useState([]);

    useEffect(()=>{
        fetch('/public/data.json')
        .then(res=> res.json())
        .then(data=> setRelatedProduct(data))
    },[])


    return (
        <div className=''>
             <div className="pb-12 flex flex-col items-center relative">
  <div className="relative inline-block">
    <h2 className="text-center gradient-text inline-block text-2xl md:text-3xl lg:text-5xl font-poppins font-semibold uppercase text-shadow">Related Products</h2>
    <hr className="h-[6px] rounded-lg gradient-bg text-center w-full absolute bottom-[-10px]" />
  </div>
</div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {
            relatedProduct.map((item,i)=>{
                return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}></Item>
            })
            }

        </div>
    </div>
    );
};

export default RelatedProducts;