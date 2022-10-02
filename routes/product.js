var router = require('express').Router();
var Product = require('../services/product_service')
// api/products
router.get('/', async function (req, res) {
    let category_id = req.query.category
    if (category_id) {
        var { length, data } = await Product.get_category(category_id)
    } else {
        var { length, data } = await Product.get_all()
    }
    res.setHeader('Content-Range', length)
    res.json(data);
});

// api/products/:id
router.get('/:id', async function (req, res) {
    const id = req.params.id
    res.json(await Product.get_one(id));
});

module.exports = router;