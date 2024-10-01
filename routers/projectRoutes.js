const express = require("express");
const router = express.Router();
const {getProjects,getProjectsDetails,createProjects,UpdateProjects,DeleteProjects}=require("../controllers/projectController");

router.route('/').get(getProjects);

router.route("/").post(createProjects);

router.route("/:id").put(UpdateProjects);

router.route("/:id").delete(DeleteProjects);

router.route("/:id").get(getProjectsDetails);

module.exports = router;