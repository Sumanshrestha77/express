import express from "express";
import { fetch, create, update, deleteId } from "../controller/userController.js";

const route = express.Router();

route.post("/create", create);
route.get("/get-all-users", fetch);
route.put("/update/:id", update);
route.delete("/delete/:id", deleteId);



export default route;
