import express from "express";
import asyncHandler from "express-async-handler";
import path from "path";
import { fileURLToPath } from "url";

import messageData from "./data/messages.js";
import messageRouter from "./routes/messagesRouter.js";
import CustomNotFoundError from "./errors/CustomNotFoundError.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3000;

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/public"));
app.use("/messages", messageRouter);

app.get("/", (req, res) => {
  res.render("index.ejs", { messages: messageData });
});

app.get(
  "*",
  asyncHandler((req, res) => {
    throw new CustomNotFoundError("Page not found!");
  })
);

app.use((err, req, res, next) => {
  if (err.statusCode === 404) {
    res.status(404).render("ErrorPage.ejs", {
      errorCode: err.statusCode,
      errorMessage: err.message,
    });
  } else {
    res.status(500).render("ErrorPage.ejs", {
      errorCode: 500,
      errorMessage: err.message,
    });
  }
});

app.listen(PORT, () => console.log(`Server now listening at port ${PORT}`));
