const CategoryCollection = 'products'
const Command = require('./mongodb')
const { ObjectId } = require('mongodb');

var command = new Command(CategoryCollection)

const Products = {
    async get_all() {
        const _array_ = await command.init()
            .then(col => {
                return col.find({}).toArray()
            })
        command.close()
        return {
            length: _array_.length,
            data: [..._array_]
        }
    },
    async get_one(id) {
        const _result_ = await command.init()
            .then(col => {
                return col.findOne({ "_id": ObjectId(id) })
            })
        command.close()
        return _result_
    },
    async add(data) {
        await command.init()
            .then(col => {
                return col.insertOne(data)
            })
        command.close()
    },
    async delete(id) {
        const _result_ = await command.init()
            .then(col => {
                return col.deleteOne({ "_id": ObjectId(id) })
            })
        command.close()
        return _result_
    }
}
module.exports = Products