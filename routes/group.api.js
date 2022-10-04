var router = require('express').Router();

var Group = require('../services/group.service')

// api/categories
router.get('/', async function (req, res) {
    var { length, data } = await Group.get_all()
    res.setHeader('Content-Range', length)
    res.json(data);
});

// api/products/:id
router.get('/:id', async function (req, res) {
    const id = req.params.id
    res.json(await Group.get_one(id));
});

router.post('/', async function (req, res) {
    const _result_ = await Group.add(req.body)
    if (_result_.modifiedCount == 0) res.status(400).end()
    res.status(200).end()
});

router.put('/:id', async function (req, res) {
    const id = req.params.id
    const _result_ = await Group.update(id, req.body)
    if (_result_.modifiedCount == 0) res.status(400).end()
    else res.status(200).end()
});

router.delete('/:id', async function (req, res) {
    const id = req.params.id
    const _result_ = await Group.delete(id)
    res.status(200).end()
});

module.exports = router;