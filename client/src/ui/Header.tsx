import { useState } from 'react';
import { logo } from '../assets';
import { IoClose, IoSearchOutline } from 'react-icons/io5';
import { FiShoppingBag, FiStar, FiUser } from 'react-icons/fi';
import Container from './Container';
import { Link } from 'react-router-dom';
import CategoriesNav from './CategoriesNav';

const bottomNavigation = [
  { title: 'Home', link: '/' },
  { title: 'Shop', link: '/product' },
  { title: 'Cart', link: '/cart' },
  { title: 'Orders', link: '/orders' },
  { title: 'My Account', link: '/profile' },
  { title: 'Blog', link: '/blog' },
];

export default function Header() {
  //Search text
  const [searchText, setSearchText] = useState('');

  return (
    <header className=" w-full bg-white">
      {/* Top Header  */}
      <div className=" max-w-screen-2xl mx-auto h-20 flex items-center justify-between px-4">
        {/* Logo  */}
        <Link to="/">
          <img src={logo} alt="logo" className="w-60" />
        </Link>

        {/* SearchBar  */}
        <div className="hidden md:inline-flex max-w-3xl w-full relative">
          <input
            type="text"
            placeholder="Search Products"
            onChange={e => setSearchText(e.target.value)}
            value={searchText}
            className="w-full flex-1 rounded-full text-gray-900 text-lg placeholder:text-base placeholder:tracking-wide shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 placeholder:font-normal focus:right-1 focus:ring-black sm:text-sm px-4 py-2"
          />

          {searchText ? (
            <IoClose
              onClick={() => setSearchText('')}
              className=" absolute top-2.5 right-4 text-xl hover:text-red-500 cursor-pointer duration-200"
            />
          ) : (
            <IoSearchOutline className=" absolute top-2.5 right-4 text-xl" />
          )}
        </div>

        {/* Menu bar */}
        <div className="flex items-center gap-x-6 text-2xl">
          <Link to="/profile">
            <FiUser className="hover:text-skyText duration-200 cursor-pointer" />
          </Link>
          <Link to="/favorite" className="relative block">
            <FiStar className="hover:text-skyText duration-200 cursor-pointer" />
            <span className="inline-flex items-center justify-center bg-redText text-white absolute -top-1 -right-2 text-[9px] rounded-full w-4 h-4 ">
              0
            </span>
          </Link>
          <Link to="/cart" className="relative block">
            <FiShoppingBag className="hover:text-skyText duration-200 cursor-pointer" />
            <span className="inline-flex items-center justify-center bg-redText text-white absolute -top-1 -right-2 text-[9px] rounded-full w-4 h-4 ">
              0
            </span>
          </Link>
        </div>
      </div>

      {/* Bottom Header  */}
      <div className="w-full bg-skyText text-white">
        <Container className="py-4 max-w-4xl flex items-center gap-5 justify-center">
          {/* Category Nav Menu  */}
          <CategoriesNav />

          {/* Menu Listing  */}
          {bottomNavigation.map((item, index) => (
            <Link
              to={item.link}
              key={index}
              className=" uppercase hidden md:inline-flex  font-semibold text-white/90 hover:text-white divide-purple-200 relative overflow-hidden group"
            >
              {item.title}
              <span className=" inline-flex w-full h-[1px] bg-white absolute bottom-0 left-0 transform -translate-x-[105%] group-hover:translate-x-0 duration-300 "></span>
            </Link>
          ))}
        </Container>
      </div>
    </header>
  );
}
