import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';


interface RatingProps  {
  rating: any;
};

export default function Rating  ({ rating }: RatingProps) {
  const maxStars = 5;
  const stars = [];

  for (let i = 1; i <= maxStars; i++) {
    if (i <= rating) {
      stars.push(<FaStar key={i} className="text-yellow-500" />);
    } else if (i - 0.5 === rating) {
      stars.push(<FaStarHalfAlt key={i} className="text-yellow-500" />);
    } else {
      stars.push(<FaRegStar key={i} className="text-gray-400" />);
    }
  }

  return <div className="flex space-x-1">{stars}</div>;
};

 