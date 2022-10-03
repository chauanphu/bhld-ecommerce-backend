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

router.post('/', async function (req, res) {
    console.log('Body: ', req.body)
    await Product.add(req.body)
    res.status(200).end()
});

router.put('/:id', async function (req, res) {
    const id = req.params.id
    const _result_ = await Product.update(id, req.body)
    if (_result_.modifiedCount == 0) res.status(400).end()
    else res.status(200).end()
});

router.delete('/:id', async function (req, res) {
    const id = req.params.id
    console.log(await Product.delete(id))
    res.status(200).end()
});
module.exports = router;