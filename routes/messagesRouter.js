import { Router } from "express";
import messageData from "../data/messages.js";

const messageRouter = Router();

messageRouter.get("/new", (req, res) => {
  res.render("form.ejs");
});

messageRouter.post("/new", (req, res) => {
  res.send("NEW MSG CREATED!");
});
messageRouter.get("/:id", (req, res) => {
  const memoId = req.params.id;
  const index = messageData.findIndex((msg) => msg.id === memoId);

  if (index === -1) {
    res.send("Memo not found.");
  } else {
    res.render("memo.ejs", { message: messageData[index] });
  }
});

export default messageRouter;
