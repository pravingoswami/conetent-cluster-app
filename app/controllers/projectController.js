const Project = require("../model/project")

module.exports.list = (req, res) => {
    Project.find()
        .then(project => res.json(project))
        .catch(err => res.json(err))
}

module.exports.createProject = (req, res) => {
    const project = new Project(req.body)
    project.save()
        .then(project => res.json(project))
        .catch(err => res.json(err))
}

module.exports.editProject = (req, res) => {
    
}