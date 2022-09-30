var router = require('express').Router();

var Category = require('../services/category_service')

// api/products
router.get('/', async function (req, res) {
    res.json(await Category.get_all())
});

module.exports = router;