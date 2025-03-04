import { ProductProps } from '../../type';
import { Link, useNavigate } from 'react-router-dom';
import Rating from './Rating';
import PriceTag from './PriceTag';


interface Props {
  item: ProductProps;
  setSearchText?: any;
}

export default function ProductCard({ item, setSearchText }: Props) {
  const navigation = useNavigate();

  const percentage =
    ((item?.regularPrice - item?.discountedPrice) / item?.regularPrice) * 100;

  const handleProduct = () => {
    navigation(`/product/${item?._id}`);
    setSearchText && setSearchText('');
  };
  return (
    <div className="border border-gray-200 rounded-lg p-1 overflow-hidden hover:border-black duration-200 cursor-pointer">
      <div className="w-full h-60 relative p-2 group">
        <span className="bg-black text-skyText absolute left-0 right-0 w-16 text-xs text-center py-1 rounded-md font-semibold inline-block z-10">
          save {percentage.toFixed(0)}%
        </span>
        <img
          onClick={handleProduct}
          src={item?.images[0]}
          alt="productImage"
          className="w-full h-full rounded-md object-cover group-hover:scale-110 duration-300"
        />
      </div>
      <div className="flex flex-col gap-2 px-2 pb-2">
        <h3 className="text-xs uppercase font-semibold text-lightText">
          {item?.overView}
        </h3>
        <h2 className="text-lg font-bold line-clamp-2">
          <Link to={`/product/${item?._id}`}>{item?.name}</Link>
        </h2>
        <div className="text-base text-lightText flex items-center">
          <Rating rating={item?.rating} />
        </div>

        <div>
          <PriceTag
            regularPrice={item?.regularPrice}
            discountedPrice={item?.discountedPrice}
          />
        </div>

        {/* Add to cart  */}
        <Link
           to={`/product/${item._id}`}
          className="bg-[#f7f7f7] uppercase text-xs py-3 text-center rounded-full font-semibold hover:bg-black hover:text-white hover:scale-105 duration-200 cursor-pointer"
        >
          Buy Now
        </Link>
      </div>
    </div>
  );
}
