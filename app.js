import express from "express";
import bodyParser from "body-parser";
import assignmentRouter from "./apps/assignments.js";
import accountRounter from "./apps/account.js";

const app = express();
const port = 4000;

app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  return res.send("Hello Teacher!!");
});

app.use("/assignments", assignmentRouter);
app.use("/accounts", accountRounter);

app.listen(port, () => {
  console.log(`Server is running at the port ${port}`);
});
