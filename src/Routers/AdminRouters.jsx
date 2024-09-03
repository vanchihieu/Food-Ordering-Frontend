import React from "react";
import { Route, Routes } from "react-router-dom";
import Admin from "../Admin/Admin";
import { useSelector } from "react-redux";
import CreateRestaurantForm from "../Admin/AddRestaurants/CreateRestaurantForm";

const AdminRouters = () => {
  const { restaurant } = useSelector((store) => store);
  console.log("🚀 ~ AdminRouters ~ restaurant:", restaurant.usersRestaurant);

  return (
    <div>
      <Routes>
        <Route
          path="/*"
          element={
            restaurant.usersRestaurant ? <CreateRestaurantForm /> : <Admin />
          }
        />
      </Routes>
    </div>
  );
};

export default AdminRouters;
