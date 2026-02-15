const Data = require("../models/DataModel");

exports.getAllData = async (req, res) => {
  const data = await Data.find();
  res.json(data);
};

exports.createData = async (req, res) => {
  const newData = await Data.create(req.body);
  res.json(newData);
};

exports.updateData = async (req, res) => {
  const updated = await Data.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.json(updated);
};

exports.deleteData = async (req, res) => {
  await Data.findByIdAndDelete(req.params.id);
  res.json({ message: "Deleted" });
};
