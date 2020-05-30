const express = require("express")
const projectController = require("../app/controllers/projectController")

const router = express.Router()

router.get("/project-list", projectController.list)
router.get("/project-create", projectController.createProject)

module.exports = router