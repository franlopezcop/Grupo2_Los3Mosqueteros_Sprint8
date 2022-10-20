const express = require("express");
const router = express.Router();

const apiUser = require("../api/apiUser.js")

router.get("/", apiUser.mostrarUsers)
router.get("/detalle/:id", apiUser.mostrarUser)

module.exports = router