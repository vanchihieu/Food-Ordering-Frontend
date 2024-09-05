import React, { useState } from "react";
import {
  TextField,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { createIngredient } from "../../State/Admin/Ingredients/Action";

const CreateIngredientForm = ({ handleClose }) => {
  const dispatch = useDispatch();
  const { auth, restaurant, ingredients } = useSelector((store) => store);
  const jwt = localStorage.getItem("jwt");

  const [formData, setFormData] = useState({
    name: "",
    ingredientCategoryId: "",
  });

  const handleFormSubmit = (event) => {
    event.preventDefault();
    console.log("Form submitted:", formData);

    setFormData({
      name: "",
      ingredientCategoryId: "",
    });
    handleClose();
    const data = { ...formData, restaurantId: restaurant.usersRestaurant.id };
    dispatch(createIngredient({ jwt: auth.jwt || jwt, data }));
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div className=" ">
      <div className="p-5">
        <h1 className="text-gray-400 text-center text-xl pb-10">
          Create Ingredient
        </h1>
        <form className="space-y-5" onSubmit={handleFormSubmit}>
          <TextField
            label="Ingredient"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            fullWidth
          />
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Category</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={formData.ingredientCategoryId}
              label="Category"
              name="ingredientCategoryId"
              onChange={handleInputChange}
            >
              {ingredients.category.map((item) => (
                <MenuItem value={item.id}>{item.name}</MenuItem>
              ))}
            </Select>
          </FormControl>

          <Button type="submit" variant="contained" color="primary">
            Create
          </Button>
        </form>
      </div>
    </div>
  );
};

export default CreateIngredientForm;
