// const db = require('./firebase')

const CategoryCollection = 'categories'
const Command = require('./mongodb')
var command = new Command(CategoryCollection)
const { ObjectId } = require('mongodb');

const Category = {
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
    async get_organised() {
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
    async add(data) {
        await command.init()
            .then(col => {
                return col.insertOne(data)
            })
        command.close()
    },
    async update(id, data) {
        const _result_ = await command.init()
            .then(col => {
                return col.updateOne({ "_id": ObjectId(id) }, { $set: data });
            })
        command.close()
        return _result_
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
module.exports = Category