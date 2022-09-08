var router = require('express').Router();

var Category = require('../services/category_service')
var Product = require('../services/product_service')

// api/products
router.get('/', async function (req, res) {
    res.json(await Category.get_all())
});

module.exports = router;