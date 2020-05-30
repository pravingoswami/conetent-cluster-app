const express = require("express")
const setupDB = require("./config/database")
const router = require("./config/routes")

const app = express()

setupDB()
app.use(express.json())
app.use("/", router)
const port = 3023

app.listen(port , () => console.log("Linstening on port", port))