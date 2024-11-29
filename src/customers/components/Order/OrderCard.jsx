import { Button, Card } from "@mui/material";
import React from "react";

const OrderCard = ({ order, status }) => {
  const formatCurrency = (amount) => {
    return new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "VND",
    }).format(amount);
  };

  return (
    <Card className="flex items-center justify-between p-5 ">
      <div className="flex items-center space-x-5">
        <img className="w-16 h-16" src={order.food.images[0]} alt="" />
        <div>
          <p>{order.food.name}</p>
          <p className="text-gray-400">{formatCurrency(order.food.price)}</p>
        </div>
      </div>

      <div>
        <Button className="cursor-not-allowed" variant="contained">
          {status}
        </Button>
      </div>
    </Card>
  );
};

export default OrderCard;
