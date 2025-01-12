import { Router } from "express";
import asyncHandler from "express-async-handler";
import messageData from "../data/messages.js";
import createNewMsg from "../utils/createNewMsg.js";
import CustomNotFoundError from "../errors/CustomNotFoundError.js";

const messageRouter = Router();

messageRouter.get("/new", (req, res) => {
  res.render("form.ejs");
});

messageRouter.post(
  "/new",
  asyncHandler((req, res) => {
    const { userName } = req.body;
    const { memoMsg } = req.body;
    const newMemo = createNewMsg(memoMsg, userName);

    messageData.push(newMemo);

    res.render("index.ejs", { messages: messageData });
  })
);

messageRouter.get(
  "/:id",
  asyncHandler((req, res) => {
    const memoId = req.params.id;
    const index = messageData.findIndex((msg) => msg.id === memoId);

    if (index === -1) {
      throw new CustomNotFoundError("Memo not found!");
    } else {
      res.render("memo.ejs", { message: messageData[index] });
    }
  })
);

export default messageRouter;
