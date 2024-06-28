import React from "react";
import Navbar from "../components/Navbar";
import Card from "../components/Card"
import Carousel from "../components/Carousel";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const [foodItems, setfoodItems] = useState([]);
  const [foodCategory, setfoodCategory] = useState([]);
  const [search, setsearch] = useState('');
  const [session, setSession] = useState(false)
  const navigate = useNavigate();

  useEffect(() => {
    
    const loadFoodItems = async () => {
      console.log("JHgdjhewwyjh")
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

    // Code for checking wether session is set or not
    const checkSession = async () => {
      const sessionResponse = await fetch('http://localhost:5000/session', {
        method: "POST",
        credentials: 'include'
      })

      const sesRes = await sessionResponse.json();
      console.log(sesRes.login);
      setSession(sesRes.login)
      
    }
    // loadFoodItems();
    checkSession();
    {session === true ? (loadFoodItems()) : navigate('/login')}
  }, [])

  // console.log(foodItems);
  // console.log(foodItems[0]);
  return (
    <div>
      <Navbar />
<Carousel/>
      {/* <h2>{foodCategory[0].category}</h2> */}
      {
        foodItems.length === 0 && foodCategory.length === 0 ? console.log("Empty Array") : (
          foodCategory.map((category) => (
            <div key={category._id} className="container">
              <h2>{category.category}</h2>
              <div className="d-flex flex-wrap">
                {
                  foodItems.filter(item => item.CategoryName === category.category)
                    .map(foodItem => (
                      // console.log("Hello")
                      // console.log(foodItem.description);  
                      // console.log("Hi");                  
                      <Card key={foodItem._id} details={foodItem} />
                    ))
                }
              </div>
            </div>
          ))
        )}
    </div>
  );
}
