import { useLoaderData, useParams } from 'react-router-dom';
import Breadcrum from './ProductElement/Breadcrum';
import ProductDisplay from './ProductElement/ProductDisplay';
import DescriptionBox from './ProductElement/DescriptionBox';
import RelatedProducts from './ProductElement/RelatedProducts';

const Product = () => {
    const allData = useLoaderData();
    const {productId} = useParams();
    const idInt = parseInt(productId);

    const product = allData.find((e)=> e.id===idInt);

    return (
        <div>
            <Breadcrum product={product}></Breadcrum>
            <ProductDisplay product={product}></ProductDisplay>
            <DescriptionBox></DescriptionBox>
            <RelatedProducts></RelatedProducts>
        </div>
    );
};

export default Product;