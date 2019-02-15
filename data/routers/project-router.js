const express = require('express');
const router = express.Router();

const ProjectFuncs = require('../helpers/projectModel')

router.get('/:id', async (req, res) => {
    const project = await ProjectFuncs.get(req.params.id)
    try {
        res.status(200).json({project})
    } catch(err) {
        console.log(err)
        res.status(500).json({message: "error retrieving project"})
    }
});
router.post('/', async (req, res) => {
    if (!req.body.description || !req.body.name) {
        return res.status(400).json({message: "Please provide a name and description."})
    }
    const newProject = await ProjectFuncs.insert(req.body)
    try {
        res.status(201).json({newProject})
    }
    catch(err) {
        console.log(err)
        res.status(500).json({message: "failed to add new project"})
    }
})
module.exports = router;