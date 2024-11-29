import { Chip, IconButton } from "@mui/material";
import React from "react";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import { useDispatch, useSelector } from "react-redux";
import {
  removeCartItem,
  updateCartItem,
} from "../../../State/Customers/Cart/cart.action";

const CartItemCard = ({ item }) => {
  const dispatch = useDispatch();
  const jwt = localStorage.getItem("jwt");
  const { auth } = useSelector((store) => store);
  
  const handleUpdateCartItem = (value) => {
    if (value === -1 && item.quantity == 1) {
      handleRemoveCartItem();
    }
    const data = { cartItemId: item.id, quantity: item.quantity + value };
    dispatch(updateCartItem({ data, jwt: auth.jwt || jwt }));
  };
  
  const handleRemoveCartItem = () => {
    dispatch(removeCartItem({ cartItemId: item.id, jwt: auth.jwt || jwt }));
  };

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "VND",
    }).format(amount);
  };
  return (
    <div className="px-5">
      <div className="items-center lg:flex lg:space-x-5">
        <div>
          <img
            className="w-[5rem] h-[5rem] object-cover"
            src={item.food.images[0]}
            alt=""
          />
        </div>

        <div className="flex items-center justify-between lg:w-[70%]">
          <div className="w-full space-y-1 lg:space-y-3 ">
            <p className="">{item.food.name}</p>
            {
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-1">
                  <IconButton
                    onClick={() => handleUpdateCartItem(-1)}
                    color="primary"
                  >
                    <RemoveCircleOutlineIcon />
                  </IconButton>
                  <div className="flex items-center justify-center w-5 h-5 text-xs ">
                    {item.quantity}
                  </div>

                  <IconButton
                    onClick={() => handleUpdateCartItem(1)}
                    color="primary"
                  >
                    <AddCircleOutlineIcon />
                  </IconButton>
                </div>
              </div>
            }
          </div>

          <p>{formatCurrency(item.totalPrice)}</p>
        </div>
      </div>
      <div className="pt-3 space-x-2">
        {item?.ingredients?.map((item) => (
          <Chip label={item} />
        ))}
      </div>
    </div>
  );
};

export default CartItemCard;
