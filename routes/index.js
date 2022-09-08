var router = require('express').Router();
var product = require('./product')
var category = require('./category')

// split up route handling
router.use('/products', product);
router.use('/categories', category);
// etc.

module.exports = router;