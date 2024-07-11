const express = require("express");
const router = express.Router();

const productData = [
    {
        "id": "1",
        "name": "Product A",
        "description": "A high-quality product for daily use.",
        "price": 29.99,
        "category": "Electronics",
        "stock": 100,
        "rating": 4.5
      },
      {
        "id": "2",
        "name": "Product B",
        "description": "An affordable product with great features.",
        "price": 19.99,
        "category": "Home & Kitchen",
        "stock": 50,
        "rating": 4.0
      },
      {
        "id": "3",
        "name": "Product C",
        "description": "A premium product for luxury lovers.",
        "price": 99.99,
        "category": "Fashion",
        "stock": 20,
        "rating": 4.8
      },
      {
        "id": "4",
        "name": "Product D",
        "description": "A versatile product for various needs.",
        "price": 49.99,
        "category": "Sports",
        "stock": 75,
        "rating": 4.2
      },
      {
        "id": "5",
        "name": "Product E",
        "description": "An eco-friendly product for the environment-conscious.",
        "price": 24.99,
        "category": "Beauty",
        "stock": 30,
        "rating": 4.7
      },
      {
        "id": "6",
        "name": "Product F",
        "description": "A reliable product for everyday tasks.",
        "price": 39.99,
        "category": "Office Supplies",
        "stock": 60,
        "rating": 4.3
      },
      {
        "id": "7",
        "name": "Product G",
        "description": "A stylish product for modern homes.",
        "price": 59.99,
        "category": "Furniture",
        "stock": 40,
        "rating": 4.6
      },
      {
        "id": "8",
        "name": "Product H",
        "description": "A compact product for easy storage.",
        "price": 9.99,
        "category": "Toys & Games",
        "stock": 120,
        "rating": 4.1
      },
      {
        "id": "9",
        "name": "Product I",
        "description": "A must-have product for tech enthusiasts.",
        "price": 149.99,
        "category": "Computers",
        "stock": 25,
        "rating": 4.9
      },
      {
        "id": "10",
        "name": "Product J",
        "description": "A fun product for outdoor activities.",
        "price": 34.99,
        "category": "Outdoors",
        "stock": 70,
        "rating": 4.4
      },
      {
        "id": "11",
        "name": "Product K",
        "description": "An essential product for fitness lovers.",
        "price": 79.99,
        "category": "Health & Fitness",
        "stock": 35,
        "rating": 4.5
      },
      {
        "id": "12",
        "name": "Product L",
        "description": "A durable product for long-term use.",
        "price": 44.99,
        "category": "Automotive",
        "stock": 80,
        "rating": 4.2
      },
];

//route to get product w.r.t it's id
router.get(
  "categories/products/:productid",
  (req, res) => {
    try {
      const { productid } = req.params;
      let data = {}
      data = productData.find(element => element.id = productid)
      res.status(200).json(data);
    } catch (error) {
        console.log(error);
        res.status(400).json("Some Error Occured")
    }
  }
);


//route to get all the data
router.get("/categories/products", (req, res) => {
    try {
      let data = [];
      productData.forEach((element) => {
          data.push(element)
      });
  
      res.status(200).json(data);
    } catch (error) {
      console.log(error);
      res.status(400).json("Some Error Occured")
    }
  });


//route to get data w.r.t categories, and limited to totResponses{integer}
router.get("/categories/:categoryname/products/:totRes", (req, res) => {
  try {
    const { categoryname, totRes } = req.params;
    let data = [];
    productData.forEach((element) => {
      if (element.category == categoryname) {
        data.push(element);
        if (data.length >= totRes) {
          return res.status(200).json(data);
        }
      }
    });

    res.status(200).json(data);
  } catch (error) {
    console.log(error);
    res.status(400).json("Some Error Occured")
  }
});


module.exports = router
