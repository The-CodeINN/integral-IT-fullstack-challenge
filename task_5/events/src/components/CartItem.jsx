import React, { useContext } from "react";
import { IoMdAdd, IoMdClose, IoMdRemove } from "react-icons/io";
import { Link } from "react-router-dom";

import { CartContext } from "../contexts/CartContext";

const CartItem = ({ item }) => {
  const { id, title, image, price, amount } = item;
  const { removeFromCart, addToCart, decreaseAmount } = useContext(CartContext);

  return (
    <div className="flex w-full gap-x-4 border-b border-gray-200 py-2 font-light text-gray-500 last:border-none lg:px-6">
      <div className="flex min-h-[150px] w-full items-center gap-x-4">
        {/* image */}
        <Link to={`/product/${id}`}>
          <img className="max-w-[80px]" src={image} alt={title} />
        </Link>
        <div className="flex w-full flex-col">
          {/* title and remove icon */}
          <div className="mb-2 flex items-center justify-between">
            {/* title */}
            <Link
              to={`/product/${id}`}
              className="max-w-[240px] text-sm font-medium uppercase text-primary hover:underline"
            >
              {title}
            </Link>
            <button
              onClick={() => removeFromCart(id)}
              className="h-fit p-1 text-xl"
            >
              <IoMdClose className="text-gray-500 transition hover:text-red-500" />
            </button>
          </div>
          <div className="flex h-[36px] items-center justify-between gap-x-2 text-sm">
            {/* qty */}
            <div className="flex h-full max-w-[100px] flex-1 items-center justify-around border font-medium text-primary">
              {/* decrease amount */}
              <button
                className="h-full flex-1"
                onClick={() => decreaseAmount(id)}
              >
                <IoMdRemove className="mx-auto" />
              </button>
              <div className="flex-1 text-center">{amount}</div>
              {/* increase amount */}
              <button
                className="h-full flex-1"
                onClick={() => addToCart(item, id)}
              >
                <IoMdAdd className="mx-auto" />
              </button>
            </div>
            {/* price */}
            <div className="flex-1 text-center">₦  {price.toFixed(2)}</div>
            {/* final price */}
            <div className="flex-1 text-end font-medium text-primary">{`₦  ${(
              price * amount
            ).toFixed(2)}`}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
