const express = require('express')
const router = express.Router()

router.get('/', (req,res) => {
    res.render('index')
})

router.get('/about', (req, res) => {
    res.render('about')
})

router.get('/signup', (req, res) => {
    res.render('signup')
})

// Export this router
module.exports = router