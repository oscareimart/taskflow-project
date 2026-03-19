const router = require("express").Router();
const Task = require("../models/Task");


router.post("/", async(req,res) => {
    const task = new Task(req.body)
    await task.save()

    res.json(task)
})

module.exports = router;