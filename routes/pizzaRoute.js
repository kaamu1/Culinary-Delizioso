const express = require('express');
const router = express.Router();
const Pizza= require("../models/pizzaModel");
const pizzaModel = require('../models/pizzaModel');
router.get("/getallpizzas", async(req, res) => {
  try {
      const pizzas= await Pizza.find({})
      res.send(pizzas)
  } catch (error) {
    return res.status(400).json({message:error});
  }
});  

router.post("/addpizza", async(req, res) => {
  const {pizza}=req.body
  try {
      const newPizza= new pizzaModel ({
        name: pizza.name,
        image:pizza.image,
        variants: ['small','medium','large'],
        category: pizza.category,
        description:pizza.description,
        prices :[pizza.prices]
      })
      await newPizza.save()
     res.status(201).send('New Pizza Added');
  } catch (error) {
    return res.status(400).json({message:error});
  }
});

router.post("/getpizzabyid", async(req, res) => {
  const pizzaId =req.body.pizzaId;
  try {
      const pizza= await pizzaModel.findOne({_id:pizzaId})
      res.send(pizza);
  } catch (error) {
    return res.status(400).json({message:error});
  }
});  

router.post("/updatepizza", async (req, res) => {
  const updatedPizza = req.body.updatedPizza;
  try {
    const pizza = await pizzaModel.findOne({ _id: updatedPizza._id });
    (pizza.name = updatedPizza.name),
      (pizza.description = updatedPizza.description),
      (pizza.image = updatedPizza.image),
      (pizza.category = updatedPizza.category),
      (pizza.prices = [updatedPizza.prices]);
    await pizza.save();
    res.status(200).send("Pizza Update Success");
  } catch (error) {
    res.status(400).json({ message: error });
  }
});

router.post("/deletepizza", async (req, res) => {
  const pizzaId = req.body.pizzaId;
  try {
    await pizzaModel.findOneAndDelete({ _id: pizzaId }); //compare id and delete
    res.status(200).send("Pizza Deleted");
  } catch (error) {
    res.status(404).json({ message: error });
  }
});

module.exports = router;    