import React from "react";
import Navbar from "../components/Navbar";
import Card from "../components/Card"
import Carousel from "../components/Carousel";
import { useState, useEffect } from "react";

export default function Home() {
  const [foodItems, setfoodItems] = useState([]);
  const [foodCategory, setfoodCategory] = useState([]);

  useEffect(() => {
    const loadFoodItems = async () => {
      const response = await fetch('http://localhost:5000/food', {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        }
      })

      const json_food_items = await response.json();
      setfoodItems(json_food_items.items)
      setfoodCategory(json_food_items.categories)
    }

    loadFoodItems();
  }, [])

console.log(foodItems);
console.log(foodItems[0]);
  return (
    <div>
      <Navbar />
      <Carousel />

{
  foodItems.length === 0 && foodCategory.length ===0 ? console.log("Empty Array") : (
    foodCategory.map((category) => {
      <h2>{category.category}</h2>
      {
        foodItems.filter(item => item.category == category.category)
        .map(item => {item.name})
      }
    })
  )
}
      
    </div>
  );
}
