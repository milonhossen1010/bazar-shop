import Header from './Header';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';
import { Toaster } from "react-hot-toast"
import NextTopLoader from 'nextjs-toploader';
import { Provider } from 'react-redux';
import { store } from '../redux/store/store';

export default function Layout() {
  return (
    <>
      <Provider store={store}>
        <Header />
        <Outlet />
        <Footer />
        <NextTopLoader color="#32dbe8" />
        <Toaster
          position="bottom-right"
          reverseOrder={false}
          gutter={8}
          containerClassName=""
          toastOptions={{
            style: {
              backgroundColor: 'black',
              color: 'white',
            },
          }}
        />
      </Provider>
    </>
  );
}
