const express = require ("express"); 
const routes = express.Router(); 

const UserController = require("./controllers/UserController");

//User
routes.get("/user/:user_id", UserController.getById);
routes.post("/user", UserController.create);
routes.put("/user/:user_id", UserController.update);
routes.delete("/user/:user_id", UserController.delete);

module.exports = routes;