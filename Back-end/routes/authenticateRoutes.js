import express from "express"
import {login, signup, logout, profileUpdate} from "../controllers/authenticationController.js"
import { routeProtection } from "../middleware/middle-routeProtection.js";

const route = express.Router();

route.post("/signup", signup)

route.post("/login", login)

route.post("/logout", logout)

route.put("/profileUpdate", routeProtection ,profileUpdate)


export default route;