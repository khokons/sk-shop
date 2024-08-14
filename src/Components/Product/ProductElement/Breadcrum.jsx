import arrow_icon from '../../../assets/breadcrum_arrow.png';

const Breadcrum = (props) => {

    const {product} = props;
    return (
        <div className="flex flex-wrap items-center gap-1 gradient-text-2 text-sm md:text-base lg:text-lg">
        <span>Home</span>
        <img src={arrow_icon} alt="Arrow Icon"/>
        <span>Shop</span>
        <img src={arrow_icon} alt="Arrow Icon"/>
        <span>{product.category}</span>
        <img src={arrow_icon} alt="Arrow Icon"/>
        <span>{product.name}</span>
      </div>
      
    );
};

export default Breadcrum;