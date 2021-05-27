const express = require ("express"); 
const routes = express.Router(); 

const UserController = require("./controllers/UserController");
const UserValidator = require("./validators/UserValidator");

const CategoryController = require("./controllers/CategoryController");
const CategoryValidator = require("./validators/CategoryValidator");

//User
routes.get("/user/:user_id",UserValidator.getById, UserController.getById);
routes.post("/user",UserValidator.create, UserController.create);
routes.put("/user/:user_id",UserValidator.update, UserController.update);
routes.delete("/user/:user_id",UserValidator.delete,UserController.delete);

// Category
routes.get(
  "/category/:category_id",
  CategoryValidator.getById,
  CategoryController.getById
);
routes.post("/category", CategoryValidator.create, CategoryController.create);
routes.put(
  "/category/:category_id",
  CategoryValidator.update,
  CategoryController.update
);
routes.delete(
  "/category/:category_id",
  CategoryValidator.delete,
  CategoryController.delete
);

module.exports = routes;