const Item = (props) => {
  // <Link to={`/product/${props.id}`}><img src={props.image} onClick={window.scrollTo(0,0)} alt="" /></Link>

  return (
    <div className="card shadow-xl transition-[0.6s] hover:scale-105">
      <figure className="px-10 pt-10">
        <img src={props.image} alt="Shoes" className="rounded-xl" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title text-[16px] font-normal gradient-text">{props.name}</h2>
        <div className="flex gap-3 gradient-text-2">
          <p>${props.new_price}</p>
          <p>${props.old_price}</p>
        </div>

        <div className="card-actions mt-4">
          <button className="btn btn-primary gradient-btn">
            Product Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default Item;
