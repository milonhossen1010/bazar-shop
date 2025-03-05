import { FaMinus, FaPlus } from 'react-icons/fa';
import { ProductProps } from '../../type';
import { useDispatch, useSelector } from 'react-redux';
import {
  addToCart,
  decreaseQuantity,
  increaseQuantity,
} from '../redux/features/cart/CartSlice';
import { RootState } from '../redux/store/store';
import { Link } from 'react-router-dom';
import { TbArrowForwardUp } from 'react-icons/tb';

interface Props {
  product: ProductProps;
  selectedColor: string;
  cartBtnShow: boolean
}

export default function AddToCart({ product, selectedColor, cartBtnShow }: Props) {
  //dispatch
  const dispatch = useDispatch();
  const item = useSelector((state: RootState) =>
    // state.products.items.find(p => p._id === Number(id))
    state.cart.items.find(i => i._id === product._id)
  );
  if (item) {
    return (
      <>
        <div className="flex self-center items-center justify-center gap-2">
          <button
            onClick={() => {
              dispatch(decreaseQuantity(product._id));
            }}
            className="bg-[#f7f7f7] text-black p-2 border-[1px] border-gray-200 hover:border-skyText rounded-full text-sm hover:bg-white duration-200 cursor-pointer"
          >
            <FaMinus />
          </button>
          <p className="text-base font-semibold w-10 text-center">
            {item?.quantity}
          </p>
          <button
            onClick={() => dispatch(increaseQuantity(product._id))}
            className="bg-[#f7f7f7] text-black p-2 border-[1px] border-gray-200 hover:border-skyText rounded-full text-sm hover:bg-white duration-200 cursor-pointer"
          >
            <FaPlus />
          </button>
        </div>
        {cartBtnShow && (
          <Link
            className="bg-black uppercase text-xs py-3 text-center rounded-full font-semibold text-white  cursor-pointer flex justify-center gap-3 items-center"
            to="/cart"
          >
            <TbArrowForwardUp className="text-xl" />
            Go to Cart
          </Link>
        )}
      </>
    );
  }

  return (
    <>
      <button
        onClick={() => dispatch(addToCart({ ...product, selectedColor }))}
        className="bg-[#f7f7f7] uppercase text-xs py-3 text-center rounded-full font-semibold hover:bg-black hover:text-white hover:scale-105 duration-200 cursor-pointer"
      >
        Add to Cart
      </button>
    </>
  );
}
