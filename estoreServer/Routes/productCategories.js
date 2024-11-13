const express = require('express');
const productCategories = express.Router();
const mysql = require('mysql2');

const pool = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "Martzi2136!!",
    database: "estore",
    multipleStatements: true
});

// Route to get categories
productCategories.get("/", (req, res) => {
    pool.query("SELECT * FROM categories", (error, categories) => {
        if (error) {
            res.status(500).send(error);
        } else {
            res.status(200).send(categories);
        }
    });
});

module.exports = productCategories;