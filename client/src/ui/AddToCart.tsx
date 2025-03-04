import toast from 'react-hot-toast';
export default function AddToCart() {
  return (
    <button
      onClick={() => toast.success('Product add in cart.')}
      className="bg-[#f7f7f7] uppercase text-xs py-3 text-center rounded-full font-semibold hover:bg-black hover:text-white hover:scale-105 duration-200 cursor-pointer"
    >
      Add to Cart
    </button>
  );
}
