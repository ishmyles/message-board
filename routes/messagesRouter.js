import { Router } from "express";

const messageRouter = Router();

messageRouter.get("/new", (req, res) => {
  res.send("New message form");
});

messageRouter.post("/new", (req, res) => {
  res.send("NEW MSG CREATED!");
});
messageRouter.get("/:id", (req, res) => {
  res.send("Viewing msg id: " + req.params.id);
});

export default messageRouter;
