const express = require("express");
const router = express.Router();
const Items = require("../models/Items");

// READ
// get all items
router.get("/", async (req, res) => {
  const items = await Items.find().sort({ important: "DESC" });
  res.json(items);
});

// CREATE
// add new item
router.post("/post", async (req, res) => {
  // req.body = {
  //   name: "eggs",
  //   quantity: 1,
  //   important: true,
  // }
  const item = new Items(req.body);
  const savedItem = await item.save();
  res.json(savedItem);
});

// READ
// get 1 item
router.get("/get/:id", async (req, res) => {
  const item = await Items.findById({ _id: req.params.id });
  res.json(item);
});

// UPDATE
// update 1 item
router.patch("/update/:id", async (req, res) => {
  const item = await Items.findByIdAndUpdate(
    { _id: req.params.id },
    { $set: req.body }
  );
  res.json(item);
});

// DELETE
// delete 1 item
router.delete("/delete/:id", async (req, res) => {
  const item = await Items.findByIdAndDelete({ _id: req.params.id });
  res.json(item);
});

module.exports = router;
