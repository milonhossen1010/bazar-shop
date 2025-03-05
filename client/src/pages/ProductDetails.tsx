import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import AddToCart from "../ui/AddToCart";
import PriceTag from "../ui/PriceTag";
import { FaRegEye } from "react-icons/fa";
import FormattedPrice from "../ui/FormattedPrice";
import { productPayment } from "../assets";
import Rating from "../ui/Rating";
import Container from "../ui/Container";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store/store";



export default function product() {
 
   const { id } = useParams<{ id: string }>();
   const product = useSelector((state: RootState) =>
     state.products.items.find(p => p._id === Number(id))
   );
  const [imgUrl, setImgUrl] = useState('');
  const [color, setColor] = useState('');
 

  

  
  //Set color and Image
  useEffect(() => {
    if (product) {
      setImgUrl(product?.images[0]);
      setColor(product?.colors[0]);
    }
  }, [product]);

    if (!product) {
      return <div className="text-center text-red-500">Product not found</div>;
    }

  return (
    <Container>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="flex flex-start">
          <div>
            {product?.images?.map((item, index) => (
              <img
                src={item}
                alt="img"
                key={index}
                className={`w-24 cursor-pointer opacity-80 hover:opacity-100 duration-300 ${
                  imgUrl === item &&
                  'border border-gray-500 rounded-sm opacity-100'
                }`}
                onClick={() => setImgUrl(item)}
              />
            ))}
          </div>
          <div>{imgUrl && <img src={imgUrl} alt="mainImage" />}</div>
        </div>
        <div className="flex flex-col gap-4">
          <h2 className="text-3xl font-bold">{product?.name}</h2>
          <div className="flex items-center justify-between">
            <PriceTag
              regularPrice={product?.regularPrice}
              discountedPrice={product?.discountedPrice}
              className="text-xl"
            />
            <div className="flex items-center gap-1">
              <div className="text-base text-lightText flex items-center">
                <Rating rating={product?.rating} />
              </div>
              <p className="text-base font-semibold">{`(${product?.reviews} reviews)`}</p>
            </div>
          </div>
          <p className="flex items-center">
            <FaRegEye className="mr-1" />{' '}
            <span className="font-semibold mr-1">{product?.reviews}</span>{' '}
            peoples are viewing this right now
          </p>
          <p>
            You are saving{' '}
            <span className="text-base font-semibold text-green-500">
              <FormattedPrice
                amount={product?.regularPrice! - product?.discountedPrice!}
              />
            </span>{' '}
            upon purchase
          </p>
          <div>
            {color && (
              <p>
                Color:{' '}
                <span
                  className="font-semibold capitalize"
                  style={{ color: color }}
                >
                  {color}
                </span>
              </p>
            )}
            <div className="flex items-center gap-x-3">
              {product?.colors.map(item => (
                <div
                  key={item}
                  className={`${
                    item === color
                      ? 'border border-black p-1 rounded-full'
                      : 'border border-gray-200 shadow-xl rounded-full'
                  }`}
                >
                  <div
                    className="w-10 h-10 rounded-full cursor-pointer"
                    style={{ backgroundColor: item }}
                    onClick={() => setColor(item)}
                  />
                </div>
              ))}
            </div>
          </div>
          <p>
            Brand: <span className="font-medium">{product?.brand}</span>
          </p>
          <p>
            Category: <span className="font-medium">{product?.category}</span>
          </p>

          {/* Add To Cart */}
          <AddToCart product={product} selectedColor={color} cartBtnShow={true} />

          <div className="bg-[#f7f7f7] p-5 rounded-md flex flex-col items-center justify-center gap-2">
            <img
              src={productPayment}
              alt="payment"
              className="w-auto object-cover"
            />
            <p className="font-semibold">Guaranteed safe & secure checkout</p>
          </div>
        </div>
      </div>
    </Container>
  );
}
