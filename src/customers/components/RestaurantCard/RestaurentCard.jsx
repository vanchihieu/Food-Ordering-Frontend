import "./Restaurant.css";
import { Card, Chip, IconButton } from "@mui/material";
import React from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

const RestaurantCard = () => {
  return (
    <Card className="m-5 w-[18rem] productCard ">
      <div
      // onClick={navigateToRestaurant}
      // className={`${
      //   data.open ? "cursor-pointer" : "cursor-not-allowed"
      // }  relative`}
      >
        <img
          className="w-full h-[10rem] rounded-t-md object-cover "
          // src={data.images[0]}
          alt=""
        />
        <Chip
          size="small"
          // variant="outlined"
          className="absolute top-2 left-2"
          color={"success"}
          label={"open"}
        />
      </div>
      <div className="justify-between w-full p-4 textPart lg:flex">
        <div className="space-y-1">
          {/* <p className="text-lg font-semibold">{data.name}</p> */}
          {/* <div>
        <span>{data.rating}</span>
      </div> */}
          <p className="text-sm text-gray-500">
            {/* {data.description.length > 40
              ? data.description.substring(0, 40) + "..."
              : data.description} */}
          </p>
        </div>

        <div>
          <IconButton>
            <FavoriteIcon color="primary" />
          </IconButton>
        </div>
      </div>
    </Card>
  );
};

export default RestaurantCard;
