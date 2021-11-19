const express = require("express");
const router = express.Router();
const Todos = require("../models/Todo.js");
router.use(express.json());

router.get("/", async (req, res) => {
  const get = await Todos.findAll();
  res.send(get);
});

module.exports = router;
