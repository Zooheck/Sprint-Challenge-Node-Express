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
module.exports = router;