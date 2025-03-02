import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import { twMerge } from "tailwind-merge";

interface Props{
  showButton?: boolean;
  link?: string;
  className?: string;
}

export default function LinkButton({ showButton, link, className }: Props) {
  const newClassName = twMerge(
    'bg-black/80 hover:bg-black text-white py-2.5 px-6 rounded-full flex items-center gap-2 duration-200', 
    className
  );
  return (
    <Link to={link? link : "/products"} className={newClassName}>
      {showButton && <FaArrowLeft />} Start Shopping
    </Link>
  )
}