import React, { useContext } from "react";
import { BsEyeFill, BsPlus } from "react-icons/bs";
import { Link } from "react-router-dom";

import { CartContext } from "../contexts/CartContext";

const Product = ({ product }) => {
  const { id, image, category, title, price } = product;
  const { addToCart } = useContext(CartContext);

  return (
    <div className="animate-fadeIn">
      {/* image | popup menu | add to cart */}
      <div className="group relative mb-4 h-[300px] overflow-hidden border border-[#e4e4e4] transition">
        <div className="flex h-full w-full items-center justify-center">
          <div className="mx-auto flex w-[200px] items-center justify-center">
            <img
              className="max-h-[160px] transition duration-300 group-[&:hover]:scale-110"
              src={image}
              alt={title}
            />
          </div>
        </div>
        <div className="absolute top-6 -right-11 flex flex-col items-center justify-center gap-y-2 p-2 opacity-0 transition-all duration-300 group-[&:hover]:right-5 group-[&:hover]:opacity-100">
          <button onClick={() => addToCart(product, id)}>
            <div className="flex h-12 w-12 items-center justify-center bg-red-500 text-white">
              <BsPlus className="text-3xl" />
            </div>
          </button>
          <Link
            to={`/product/${id}`}
            className="flex h-12 w-12 items-center justify-center bg-white text-primary drop-shadow-xl"
          >
            <BsEyeFill />
          </Link>
        </div>
      </div>
      {/* category | title | price */}
      <div>
        <div className="mb-1 text-sm capitalize text-gray-500">{category}</div>
        <Link to={`/product/${id}`}>
          <h2 className="mb-1 font-semibold">{title}</h2>
        </Link>
        <div className="font-semibold">₦ {price.toFixed(2)}</div>
      </div>
    </div>
  );
};

export default Product;
