const express = require('express');
const router = express.Router();

const ActionFuncs = require('../helpers/actionModel')

router.get('/:id', async (req, res) => {
    let action = await ActionFuncs.get(req.params.id)
    try {
        res.status(200).json({action})
    }
    catch (err) {
        console.log(err)

    }

});

router.post('/', async (req, res) => {
    const newAction = await ActionFuncs.insert(req.body)
    try {
        res.status(201).json({newAction})
    }
    catch(err) {
        console.log(err)
        res.status(500).json({message: 'failed to add new action'})
    }
});

router.put('/:id', async (req, res) => {
    try {
        if (!req.body.project_id || !req.body.description || !req.body.notes) {
            return res.status(400).json({message: "Please provide a project_id, notes, and description."})
        }
        const action = await ActionFuncs.update(req.params.id, req.body)
        if(action) {
            res.status(200).json({action})
        } else {
            res.status(404).json({message: 'this action could not be found'})
        }
    } 
    catch(err) {
        console.log(err)
        res.status(500).json({
            message: 'Error updating the action'
        })
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const action = await ActionFuncs.remove(req.params.id)
        if (action > 0) {
            res.status(200).json({message: `Action ${req.params.id} has been deleted`})
        } else {
            res.status(404).json({message: "Could not find action with that id"})
        }
    } catch(err) {
        console.log(err)
        res.status(500).json({
            message: 'Error deleting the action'
        })
    }
});
module.exports = router;