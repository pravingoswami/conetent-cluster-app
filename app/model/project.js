const mongoose = require("mongoose")

const Schema = mongoose.Schema

const projectModel = new Schema({
    
    project : {
        type : String,
        required : true
    },

    cluster : [{
        name : {
            type : String
        },
        subCluster : {
            type : [Object]
        },
        item : {
            type : [String]
        }
    }],

    item : [String],

    createdAt : {
        type : Date,
        default : Date.now()
    }
})

const Project  = mongoose.model("Project", projectModel)

module.exports = Project