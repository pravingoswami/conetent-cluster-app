const mongoose = require("mongoose")

const setupDB = () => {
    mongoose.connect("mongodb://localhost:27017/content-cluster-app", {useCreateIndex : true, useFindAndModify :false, useNewUrlParser :true, useUnifiedTopology : true})
        .then(() => console.log("connected with the database"))
        .catch(err => console.log(err))
}

module.exports = setupDB