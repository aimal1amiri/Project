import express from "express"
import { routeProtection } from "../middleware/middle-routeProtection.js";
import { sidebarUsers } from "../controllers/sidebarUsersController.js";
import { userMessages } from "../controllers/userMessagesController.js";
import { messageSend } from "../controllers/messagesSendController.js";

const messageRoutes =express.Router();

messageRoutes.get("/users", routeProtection, sidebarUsers)
messageRoutes.get("/:id",routeProtection, userMessages)
messageRoutes.post("/send/:id", routeProtection, messageSend)


export default messageRoutes