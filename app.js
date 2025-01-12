import express from "express";
import messageRouter from "./routes/messagesRouter.js";

const app = express();
const PORT = 3000;

app.use("/messages", messageRouter);

app.get("/", (req, res) => {
  res.send("HOME PAGE");
});

app.listen(PORT, () => console.log(`Server now listening at port ${PORT}`));
