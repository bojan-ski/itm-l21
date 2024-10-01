// components
import ProductListCard from "@/components/ProductListCard";
import NoDataAvailable from "@/components/NoDataAvailable";

// export const revalidate = 0;

const Home = async () => {
  const apiCall = await fetch('http://localhost:3000/api/products', {method: "GET"}) 
  const productsListData = await apiCall.json()
  
  return (
    <>
      <h1>Products</h1>

      <section className="products">
        {productsListData ? (
          productsListData?.products?.map(productData => <ProductListCard key={productData.id} productData={productData} />
          )
        ) : (
          <NoDataAvailable />
        )}
      </section>
    </>
  );
}

export default Home