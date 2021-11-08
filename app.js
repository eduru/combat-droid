const express = require("express");
const TargetSelectionModule = require("./combatDroid/targetSelectionModule");
const selectTarget = new TargetSelectionModule();

const app = express();

app.use(express.json());

app.post("/radar", (req, res) => {
  const target = selectTarget.setTarget(req.body);
  res.status(200).send(target);
});

app.listen(8888, () => {
  console.log("Server listening on port: 8888");
});
