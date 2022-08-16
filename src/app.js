const express = require("express");
const cors = require('cors');
const { get } = require("./categories/categories-controller");
const { calculateEmissions } = require("./emissions/emissions-controller");

const categoriesRouter = express.Router();
const emissionsRouter = express.Router();

categoriesRouter.get("/", (_, res) => {
    res.send(get());
})
emissionsRouter.post("/:categoryName", (req, res) => {
    res.send(calculateEmissions(req.body, req.params.categoryName));
})

const app = express();
app.use(express.json());
app.use(cors());

app.use('/categories', categoriesRouter);
app.use('/emissions', emissionsRouter);

const port = process.env.PORT || 4000;
app.listen(port);

console.log(`🚀 app listening on port ${port}`);
