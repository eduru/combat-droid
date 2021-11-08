const express = require("express");
const cors = require("cors");
const TargetSelectionModule = require("./TargetSelectionModule");
const combatDroid = new TargetSelectionModule();

const app = express();

app.use(express.json());
app.use(
  cors({
    origin: "*",
  })
);

app.get("/", (req, res) => {
  res.json({ greeting: "may the force be with you" });
});

app.post("/radar", (req, res) => {
  const target = combatDroid.setTarget(req.body);
  res.status(200).send(target);
});

app.listen(3000, () => {
  console.log("Server listening on port: 3000");
});
