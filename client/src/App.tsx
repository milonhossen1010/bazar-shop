import BannerCategories from './ui/BannerCategories';
import Categories from './ui/Categories';
import HighLights from './ui/HighLights';
import HomeBanner from './ui/HomeBanner';
import ProductsList from './ui/ProductsList';

function App() {
  return (
    <main>
      <BannerCategories />
      <HomeBanner />
      <HighLights />
      <Categories />
      <ProductsList />
    </main>
  );
}

export default App;
