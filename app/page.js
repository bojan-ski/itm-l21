// utils
import getProductData from "@/utils/getData";
// components
import ProductListCard from "@/components/ProductListCard";
import NoDataAvailable from "@/components/NoDataAvailable";
import SearchBar from "@/components/SearchBar";

const Home = async () => {
  const productsListData = await getProductData()

  return (
    <>
      <h1>Products</h1>

      <SearchBar/>

      <section className="products">
        {productsListData ? (
          productsListData?.products.map(productData => <ProductListCard key={productData.id} productData={productData} />
          )
        ) : (
          <NoDataAvailable />
        )}
      </section>
    </>
  );
}

export default Home