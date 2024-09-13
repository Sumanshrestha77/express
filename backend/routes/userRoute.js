import express from "express";
import { fetch, create, update, deleteId, react} from "../controller/userController.js";

const route = express.Router();

route.post("/create", create);
route.get("/get-all-users", fetch);
route.put("/update/:id", update);
route.delete("/delete/:id", deleteId);

route.get("/react", react);



export default route;
