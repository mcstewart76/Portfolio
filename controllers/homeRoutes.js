const router = require('express').Router();

router.get('/', (req, res) => {

res.render('homepage')
});

router.get('/about', (req,res) => {
    res.render('about')
});
router.get('/hobbies', (req,res) => {
    res.render('hobbies')
});
router.get('/resume', (req,res) => {
    res.render('resume')
});
router.get('/works', (req,res) => {
    res.render('works')
});

module.exports = router;