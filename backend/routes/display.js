const express = require('express');
const mongoose = require('mongoose');
const mongodb = require('../db');
const router = express.Router();
mongodb();

// const data_food_items = mongoose.connection.db.collection('items');
// const food_items = data_food_items.find({}).toArray();
// const data_food_category = mongoose.connection.db.collection('category');
// const food_category = data_food_category.find({}).toArray();

router.post('/food', async  (req, res) => {
    console.log("Request received");
    const food_items = await mongoose.connection.db.collection('items').find({}).toArray()
    const food_category = await mongoose.connection.db.collection('category').find({}).toArray();
    res.json({items: food_items, categories: food_category});
})

module.exports = router;