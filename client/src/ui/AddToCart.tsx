import { useState } from 'react';
import toast from 'react-hot-toast';
import { FaMinus, FaPlus } from 'react-icons/fa';
export default function AddToCart() {
  const [cartItem, setCartItem] = useState(0);


  const handleDecreseCart = () => {
    setCartItem(cartItem - 1);
  };


    const handleIncreseCart = () => {setCartItem(cartItem + 1);};
  return (
    <>
      <div className="flex self-center items-center justify-center gap-2">
        <button
          onClick={handleDecreseCart}
          className="bg-[#f7f7f7] text-black p-2 border-[1px] border-gray-200 hover:border-skyText rounded-full text-sm hover:bg-white duration-200 cursor-pointer"
        >
          <FaMinus />
        </button>
        <p className="text-base font-semibold w-10 text-center">{cartItem}</p>
        <button
          onClick={handleIncreseCart}
          className="bg-[#f7f7f7] text-black p-2 border-[1px] border-gray-200 hover:border-skyText rounded-full text-sm hover:bg-white duration-200 cursor-pointer"
        >
          <FaPlus />
        </button>
      </div>

      <button
        onClick={() => toast.success('Product add in cart.')}
        className="bg-[#f7f7f7] uppercase text-xs py-3 text-center rounded-full font-semibold hover:bg-black hover:text-white hover:scale-105 duration-200 cursor-pointer"
      >
        Add to Cart
      </button>
    </>
  );
}
