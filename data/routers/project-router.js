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
module.exports = router;