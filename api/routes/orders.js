const express = require('express');
const router =  express.Router();

router.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'Orders was fetched!'
    })
})

router.post('/', (req, res, next) => {
    res.status(201).json({
        message: 'Orders was created!'
    })
})

module.exports = router;