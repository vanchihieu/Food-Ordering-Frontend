import React, { useState } from "react";
import AdminNavbar from "./AdminNavbar";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import CreateRestaurantForm from "./AddRestaurants/CreateRestaurantForm";
import AdminSidebar from "./AdminSidebar";
import RestaurantsOrder from "./Orders/RestaurantsOrder";

const Admin = () => {
  const dispatch = useDispatch();
  const [openSideBar, setOpenSideBar] = useState(false);

  const handleOpenSideBar = () => setOpenSideBar(true);
  const handleCloseSideBar = () => setOpenSideBar(false);
  const { auth, restaurant, ingredients } = useSelector((store) => store);
  const jwt = localStorage.getItem("jwt");

  return (
    <div>
      <AdminNavbar handleOpenSideBar={handleOpenSideBar} />
      <div className="lg:flex justify-between">
        <div className="">
          <AdminSidebar handleClose={handleCloseSideBar} open={openSideBar} />
        </div>

        <div className="lg:w-[80vw]">
          <Routes>
            <Route path="/orders" element={<RestaurantsOrder />} />
            <Route path="/add-restaurant" element={<CreateRestaurantForm />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default Admin;
