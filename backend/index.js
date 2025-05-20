const express = require("express");
const cors = require("cors");
app.use(express.json());

const router = express.Router();
module.exports = router;
const rootRouter = require("./routes/root");
app.use("/user", rootRouter);
app.use(cors());

app.listen(3000, () => {
  console.log("Server is running on port 3000");
}
);


