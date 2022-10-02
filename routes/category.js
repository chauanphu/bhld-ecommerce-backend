var router = require('express').Router();

var Category = require('../services/category_service')

// api/products
router.get('/', async function (req, res) {
    const { length, data } = await Category.get_all()
    res.setHeader('Content-Range', length)
    res.json(data)
});

module.exports = router;