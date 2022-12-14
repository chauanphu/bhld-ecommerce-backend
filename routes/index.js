var router = require('express').Router();
var product = require('./product.api')
var category = require('./category.api')
var users = require('./users.api')
// var group = require('./group.api')

// split up route handling
router.use('/products', product);
router.use('/categories', category);
router.use('/users', users);
// router.use('/groups', group);
// etc.

module.exports = router;