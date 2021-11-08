const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 3000;

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
  const { protocols, scan } = req.body;
  res.json(req.body);
});

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});
