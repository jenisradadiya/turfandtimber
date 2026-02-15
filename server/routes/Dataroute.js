const router = require("express").Router();
const ctrl = require("../controllers/DataController");

router.get("/", ctrl.getAllData);
router.post("/", ctrl.createData);
router.put("/:id", ctrl.updateData);
router.delete("/:id", ctrl.deleteData);

module.exports = router;
