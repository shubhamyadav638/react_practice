import { useState, useEffect } from "react";
import axios from "axios";
import Dashboard from "./components/Dashboard";
import Card from "./components/card";

function App() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    async function callApi() {
      try {
        const response = await axios.get("https://dummyjson.com/products");
        setProducts(response.data.products);
        // console.log(response.data.products);
      } catch (e) {
        console.log(e);
      }
    }

    callApi();
  }, []);

  return (
    <div>
      <h1>PRODUCT LIST.....</h1>
      
       {/* <h1>Product List......</h1>
      // {products.length > 0 ? (
      //   products.map((product) => (
      //     <div key={product.id} style={{ marginBottom: "30px"  }}>
      //       <h2>{product.title}</h2>
      //       <p>{product.description}</p>
      //       <p>Price: ${product.price}</p> 
     <img src={product.thumbnail} alt={product.title} width="200" />  */}
      <div style={{ display: "flex", gap: "20px", flexwrap: "wrap" }}>
        <Card products={products} />
      </div>
      <Dashboard />
      <p>Loading...</p>
    </div>
  );
}

export default App;