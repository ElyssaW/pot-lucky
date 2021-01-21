const express = require(express)
const router = express.Router()

router.get('/search', (req, res) => {
    res.render('offers/search.ejs')
})

router.get('/show', (req, res) => {
    res.render('offers/search.ejs')
})

module.exports = router