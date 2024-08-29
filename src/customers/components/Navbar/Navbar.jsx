import {
  Avatar,
  Badge,
  Button,
  IconButton,
  Menu,
  MenuItem,
} from "@mui/material";
import React from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SearchIcon from "@mui/icons-material/Search";
import PersonIcon from "@mui/icons-material/Person";
import "./Navbar.css";
import { useNavigate } from "react-router-dom";
import Auth from "../../pages/Auth/Auth";

const NavBar = () => {
  const navigate = useNavigate();

  const handleCloseAuthModel = () => {
    navigate("/");
  };
  const navigateToHome = () => {
    navigate("/");
  };

  return (
    <div className="px-5 z-50 py-[.8rem] bg-[#e91e63]  lg:px-20 flex justify-between">
      <div className="flex items-center space-x-4">
        <div
          // onClick={navigateToHome}
          className="flex items-center space-x-4 cursor-pointer lg:mr-10"
        >
          <li className="text-2xl font-semibold text-gray-300 logo">
            Food Ordering
          </li>
        </div>
        {/* <li className="font-semibold font">Home</li> */}
      </div>

      <div className="flex items-center space-x-2 lg:space-x-10">
        <div className="">
          <IconButton>
            <SearchIcon sx={{ fontSize: "1.5rem" }} />
          </IconButton>
        </div>
        <div className="flex items-center space-x-2">
          <IconButton onClick={() => navigate("/account/login")}>
            <PersonIcon sx={{ fontSize: "2rem" }} />
          </IconButton>

          <Menu
            id="basic-menu"
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            <MenuItem>Profile</MenuItem>
            <MenuItem>Logout</MenuItem>
          </Menu>
        </div>

        <IconButton>
          <Badge color="black" badgeContent={3}>
            <ShoppingCartIcon className="text-4xl" sx={{ fontSize: "2rem" }} />
          </Badge>
        </IconButton>
      </div>

      <Auth handleClose={handleCloseAuthModel} />
    </div>
  );
};

export default NavBar;
