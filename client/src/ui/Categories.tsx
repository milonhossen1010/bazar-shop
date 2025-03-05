
import {  useSelector } from 'react-redux';
import {  RootState } from '../redux/store/store';
import { Link } from 'react-router-dom';
import Container from './Container';
import Title from './Title';
import { CategoryProps } from '../../type';
import Loading from './Loading';
 
export default function Categories() {
  //Categories
 
  const categories = useSelector((state: RootState) => state.categories.items);
  const status = useSelector((state: RootState) => state.categories.status);
  const error = useSelector((state: RootState) => state.categories.error);

    

  if (status === 'loading') {
    return <Loading />;
  }

  if (status === 'failed') {
    return <div>Error: {error}</div>;
  }
  return (
    <Container>
      <div className="mb-10">
        <div className="flex items-center justify-between">
          <Title text="Popular categories" />
          <Link
            to={'/category/tvAndAudio'}
            className="font-medium relative group overflow-hidden"
          >
            View All Categories{' '}
            <span className="absolute bottom-0 left-0 w-full block h-[1px] bg-gray-600 -translate-x-[100%] group-hover:translate-x-0 duration-300" />
          </Link>
        </div>
        <div className="w-full h-[1px] bg-gray-200 mt-3" />
      </div>
      <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-7">
        {categories.map((item: CategoryProps) => (
          <Link
            
            to={`/category/${item?._base}`}
            key={item?._id}
            className="w-full h-auto relative group overflow-hidden"
          >
            <img
              src={item?.image}
              alt="categoryImage"
              className="w-full h-auto rounded-md group-hover:scale-110 duration-300"
            />
            <div className="absolute bottom-3 w-full text-center">
              <p className="text-sm md:text-base font-bold">{item?.name}</p>
            </div>
          </Link>
        ))}
      </div>
    </Container>
  );
}
