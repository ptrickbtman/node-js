const express = require("express")
const router = express.Router();

router.get("/", (req, res) => {
    res.render('index.html', { first: "Bienvenido!" })
})

router.get("/prototipos", (req, res) => {
    res.render('prototypes.html', { first: "Bienvenido" })
})



module.exports = router;