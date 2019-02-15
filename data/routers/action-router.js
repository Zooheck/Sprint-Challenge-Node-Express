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
module.exports = router;