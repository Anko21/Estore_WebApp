# eStore Web App

## Overview

eStore is a modern, responsive e-commerce web application built with **React** and **Redux Toolkit**. This project provides a fully functional e-commerce front-end experience, allowing users to browse products, filter by category and price, and add items to their cart. The application is designed with a clean UI and organized structure, making it easy for users to navigate and interact with the online store.


![estore_video](docs/estore_video.mp4)


## Features

- **Category Browsing**: Users can explore products by selecting categories, with a dynamic sidebar that displays main categories and subcategories.
- **Product Filtering**: The app offers a price range filter, enabling users to adjust the minimum and maximum price to view relevant products.
- **Cart Management**: Users can add items to the shopping cart, with real-time updates to item quantity, cart total, and total items in the cart.

## Technologies Used

- **React**: For building dynamic, reusable UI components.
- **Redux Toolkit**: Manages application state efficiently and provides slices for different parts of the application (cart, categories, products).
- **Sass**: Custom stylesheets for organized, scalable CSS code with `_top-nav.scss`, `_side-nav.scss`, and other modular stylesheets.

## Project Structure

- **Redux Store**: The app uses Redux Toolkit's `createSlice` and `configureStore` for state management. Each main feature (Cart, Categories, Products) has its own slice for clean and isolated state logic.
- **Components**: The project is divided into several reusable components:
  - `TopNav`: The main navigation bar containing branding, search, login, and cart info.
  - `SideNav`: A sidebar with product categories and a price filter range slider.
  - `Products`: A grid display of products with "Add to Cart" functionality.
  - `MainComponent`: The main page layout housing the `SideNav` and `Products` components.
  - `CatNav`: A category navigation bar showcasing main product categories.

## Installation and Setup
  - git clone https://github.com/Anko21/Estore_WebApp.git
  - cd eStore_WebApp
  - Install dependencies:
      - npm install
  - Start the development server:
      - npm start
- Open your browser and navigate to http://localhost:3000 to see the application in action.

Future Improvements
Backend Integration: 
- Connect with an API for user authentication, product, and category data.
- Enhanced Authentication: Add a fully functional login and registration system with protected routes.
- Advanced Filtering: Include additional filters, such as brand, rating, and sorting options.

