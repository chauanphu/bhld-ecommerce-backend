var router = require('express').Router();
var Product = require('../services/product.service')

// api/products
router.get('/', async function (req, res) {
    let category_path = req.query.category_path
    if (category_path) {
        var { length, data } = await Product.get_by_category(category_path)
    } else {
        var { length, data } = await Product.get_all()
    }
    res.setHeader('Content-Range', length)
    res.json(data);
});

// api/products/:id
router.get('/:id', async function (req, res) {
    const id = req.params.id
    const type = req.query.type
    if (type === 'shop') {
        res.json(await Product.get_name(id));
    } else {
        res.json(await Product.get_one(id));
    }
});

router.post('/', async function (req, res) {
    await Product.add(req.body)
    res.status(200).end()
}, (error, req, res, next) => {
    res.status(400).send({ error: error.message })
});

router.put('/:id', async function (req, res) {
    const id = req.params.id
    const _result_ = await Product.update(id, req.body)
    // if (_result_.modifiedCount == 0) res.status(400).end()
    res.status(200).end()
}, (error, req, res, next) => {
    res.status(400).send({ error: error.message })
});

router.delete('/:id', async function (req, res) {
    const id = req.params.id
    await Product.delete(id)
    res.status(200).end()
});
module.exports = router;