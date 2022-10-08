var router = require('express').Router();

var Category = require('../services/category.service')


// api/categories
router.get('/', async function (req, res) {
    var result = await Category.get_all()
    if (result) {
        res.setHeader('Content-Range', result.length)
        res.json(result.data);
    } else {
        return res.status(404)
    }
});

// api/products/:id
router.get('/:id', async function (req, res) {
    const id = req.params.id
    res.json(await Category.get_one(id));
});

router.post('/', async function (req, res) {
    await Category.add(req.body)
    res.status(200).end()
});

router.put('/:id', async function (req, res) {
    const id = req.params.id
    const _result_ = await Category.update(id, req.body)
    if (_result_.modifiedCount == 0) res.status(400).end()
    else res.status(200).end()
});

router.delete('/:id', async function (req, res) {
    const id = req.params.id
    await Category.delete(id)
    res.status(200).end()
});

module.exports = router;