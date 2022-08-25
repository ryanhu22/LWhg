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

function showInfo() {
    console.log("clicked butotn")
    document.getElementById('contactButton').value = "6268628312"
}

// Export this router
module.exports = router