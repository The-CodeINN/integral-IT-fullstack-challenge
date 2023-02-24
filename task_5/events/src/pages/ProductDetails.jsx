import React, { useContext } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

import { CartContext } from "../contexts/CartContext";
import { ProductContext } from "../contexts/ProductContext";

const ProductDetails = () => {
  const { id } = useParams();
  const { products } = useContext(ProductContext);
  const { addToCart } = useContext(CartContext);

  // shorten description text
  function truncate(str, length) {
    return str.length > length ? str.slice(0, length) + "..." : str;
  }

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
    // reset scroll position to top if route left scrolled down
  }, []);

  const product = products.find((product) => {
    return product.id === +id;
  });

  if (!product) {
    return (
      <section className="flex h-screen items-center justify-center">
        Loading...
      </section>
    );
  }

  const { title, price, description, image } = product;

  return (
    <section className="mt-[20vh] mb-[15vh] flex h-screen items-center lg:my-0">
      <div className="container mx-auto">
        <div className="flex flex-col items-center lg:flex-row">
          <div className="mb-20 flex flex-1 justify-center lg:mb-0">
            <img
              className="max-w-[200px] lg:max-w-sm"
              src={image}
              alt={title}
            />
          </div>
          <div className="flex flex-1 flex-col items-center text-center lg:items-start lg:text-left">
            <h2 className="mb-4 max-w-[400px] text-3xl font-medium">{title}</h2>
            <p className="mb-6 text-xl font-medium text-red-500">$ {price}</p>
            <p className="mb-8 w-3/4">{truncate(description, 360)}</p>
            <button
              onClick={() => addToCart(product, product.id)}
              className="border-2 border-transparent bg-primary py-3 px-8 text-white duration-200 hover:border-primary hover:bg-white hover:text-primary"
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
