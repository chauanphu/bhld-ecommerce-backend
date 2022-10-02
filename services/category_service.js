// const db = require('./firebase')

const CategoryCollection = 'categories'
const Command = require('./mongodb')
var command = new Command(CategoryCollection)

const Category = {
    _value_: [],

    async get_all() {
        const _array_ = await command.init()
            .then(col => {
                return col.find({}).toArray()
            })
        command.close()
        return [..._array_]
    }
}
module.exports = Category