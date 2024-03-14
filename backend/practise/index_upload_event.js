// const mongoose = require("mongoose");

// mongoose.connect("mongodb://localhost:27017/mongo1301");

// const ProductSchema = new mongoose.Schema({
//   name: String,
// });
// const saveInDB = async () => {
//   const ProductModal = mongoose.model("products", ProductSchema);
//   let data = new ProductModal({
//     price: 239999,
//     name: "samsung s44",
//   });
//   let res = await data.save();
//   console.log(res);
// };

// // saveInDB();
// const updateInDB = async () => {
//   const Product = mongoose.model("products", ProductSchema);
//   const data = await Product.updateMany(
//     { name: "samsung s44" },
//     {
//       $set: {
//         price: 456321,
//       },
//     }
//   );
//   console.log(data);
// };

// // updateInDB();

// const readInDB = async () => {
//   const Product = mongoose.model("products", ProductSchema);
//   const data = await Product.find({ name: "samsung s44" });
//   console.log(data);
// };

// // readInDB();

// const deleteInDB = async () => {
//   const Product = mongoose.model("products", ProductSchema);
//   const data = await Product.deleteMany({ name: "samsung s44" });
//   console.log(data);
// };

// deleteInDB();

const express = require("express");
const multer = require("multer");
require("./config");
const Product = require("./product");
const fs = require("fs");
const path = require("path");
const cors = require("cors");
const EventEmiter = require("events");

const event = new EventEmiter();

let count = 0;
event.on("count", () => {
  console.log(++count);
});

const app = express();

const uploadFile = multer({
  storage: multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "uploads");
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname);
    },
  }),
}).single("file");

const countMiddleware = (req, res, next) => {
  event.emit("count");
  next();
};

app.use(express.json());
app.use(cors());

app.post("/create", countMiddleware, uploadFile, async (req, resp) => {
  const obj = {
    ...JSON.parse(req.body.metadata),
    image: fs.readFileSync(
      path.join(__dirname + "/uploads/" + req.file.originalname)
    ),
  };
  const data = new Product(obj);
  const res = await data.save();
  resp.send(res);
});

app.get("/getFileBinaryData", countMiddleware, async (req, resp) => {
  const res = await Product.findOne({ title: "iPhone 13" });
  resp.send({ image: res.image, filename: "stars.jpg", type: "jpeg" });
});

app.listen(8080);
