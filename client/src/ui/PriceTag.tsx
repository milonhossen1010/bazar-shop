import { twMerge } from 'tailwind-merge';
import FormattedPrice from './FormattedPrice';

interface Props {
  regularPrice?: number;
  discountedPrice?: number;
  className?: string;
}

export default function PriceTag ({ regularPrice, discountedPrice, className }: Props)  {
  return (
    <div className={twMerge('flex items-center gap-2', className)}>
      <p className="line-through text-gray-500 font-medium">
        <FormattedPrice amount={regularPrice} />
      </p>
      <p className="font-bold text-black">
        <FormattedPrice amount={discountedPrice} />
      </p>
    </div>
  );
};

 
