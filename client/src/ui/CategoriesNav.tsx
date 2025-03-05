import { CategoryProps } from '../../type';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../redux/store/store';
import { fetchCategories } from '../redux/features/products/categorySlice';
import { useEffect } from 'react';
import { Menu, MenuButton, MenuItem, MenuItems, Transition } from '@headlessui/react';
import { Link } from 'react-router-dom';
import { FaChevronDown } from 'react-icons/fa';
// import Loading from './Loading';

export default function CategoriesNav() {
  //Categories
  const dispatch: AppDispatch = useDispatch();
  const categories = useSelector((state: RootState) => state.categories.items);
  const status = useSelector((state: RootState) => state.categories.status);
  const error = useSelector((state: RootState) => state.categories.error);

  useEffect(() => {
    if (status === 'idle' ) {
      dispatch(fetchCategories());
    }
  }, [status, dispatch]);

  

  if (status === 'failed') {
    return <div>Error: {error}</div>;
  }
  
  return (
    <>
      <Menu>
        <MenuButton className="inline-flex items-center gap-2 rounded-md border border-white/80 hover:border-white py-1.5 px-3 font-semibold text-white/90 hover:text-white">
          Select Category <FaChevronDown className="text-base mt-1" />
        </MenuButton>
        <Transition
          enter="transition ease-out duration-75"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-100"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <MenuItems
            anchor="bottom end"
            className="w-52 origin-top-right rounded-xl border border-white/5 bg-skyText p-1 text-sm/6 text-white [--anchor-gap:var(--spacing-1)] focus:outline-none hover:text-white z-50"
          >
            {categories.map((item: CategoryProps) => (
              <MenuItem key={item?._id}>
                <Link
                  className="flex w-full items-center gap-2 rounded-lg py-2 px-3 data-[focus]:bg-white/20 tracking-wide"
                  to={`/category/${item?._base}`}
                >
                  <img
                    src={item?.image}
                    alt="categoryImage"
                    className="w-6 h-6 rounded-md"
                  />
                  {item?.name}
                </Link>
              </MenuItem>
            ))}
          </MenuItems>
        </Transition>
      </Menu>
    </>
  );
}
