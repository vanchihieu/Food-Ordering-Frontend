import React, { useEffect } from "react";
import "./HomePage.css";
import MultipleItemsCarousel from "../../components/MultiItemCarousel/MultiItemCarousel";
import RestaurantCard from "../../components/RestaurantCard/RestaurantCard";
import { useDispatch, useSelector } from "react-redux";
import { getAllRestaurantsAction } from "../../../State/Customers/Restaurant/restaurant.action";

const HomePage = () => {
  const { auth, restaurant } = useSelector((store) => store);
  const dispatch = useDispatch();

  useEffect(() => {
    if (auth.user) {
      dispatch(getAllRestaurantsAction(localStorage.getItem("jwt")));
    }
  }, [auth.user, dispatch]);

  return (
    <div className="">
      <section className="relative flex flex-col items-center justify-center -z-50 banner">
        <div className="w-[50vw] z-10 text-center">
          <p className="z-10 py-5 text-2xl font-bold lg:text-7xl">
            Food Ordering
          </p>
          <p className="z-10 text-xl text-gray-300 lg:text-4xl">
            Taste the Convenience: Food, Fast and Delivered.
          </p>
        </div>

        <div className="absolute top-0 left-0 right-0 cover"></div>
        <div className="fadout"></div>
      </section>

      <section className="p-10 lg:py-10 lg:px-20">
        <div className="">
          <p className="py-3 pb-10 text-2xl font-semibold text-gray-400">
            Top Meels
          </p>
          <MultipleItemsCarousel />
        </div>
      </section>
      <section className="px-5 lg:px-20">
        <div className="">
          <h1 className="py-3 text-2xl font-semibold text-gray-400 ">
            Order From Our Handpicked Favorites
          </h1>
          <div className="flex flex-wrap items-center justify-around ">
            {restaurant.restaurants.map((item, i) => (
              <RestaurantCard data={item} index={i} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
