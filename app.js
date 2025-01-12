import express from "express";
import path from "path";
import { fileURLToPath } from "url";

import messageRouter from "./routes/messagesRouter.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3000;

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.static(__dirname + "/public"));
app.use("/messages", messageRouter);

app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.listen(PORT, () => console.log(`Server now listening at port ${PORT}`));
