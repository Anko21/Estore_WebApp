const express = require('express');
const products = express.Router();
const mysql = require('mysql2');

const pool = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "Martzi2136!!",
    database: "estore",
    multipleStatements: true
});

// Route to get products
products.get("/", (req, res) => {
    pool.query("SELECT * FROM products", (error, products) => {
        if (error) {
            res.status(500).send(error);
        } else {
            res.status(200).send(products);
        }
    });
});

module.exports = products;