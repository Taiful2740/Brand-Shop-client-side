import { useLoaderData } from "react-router-dom";
import Footer from "../Footer/Footer";

const Products = () => {
  const products = useLoaderData();
  return (
    <div>
      <h1>Products:{products.length}</h1>
      <Footer></Footer>
    </div>
  );
};

export default Products;
