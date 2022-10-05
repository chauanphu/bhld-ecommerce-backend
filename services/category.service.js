const CategoryModel = require('../database/category.model')

const nest_group = (array = []) => {
    let new_array = []
    // Iterate through each items
    for (let i = 0; i < array.length; i++) {
        // Copy each item
        let temp_value = { ...array[i] }
        // Split path
        const link = temp_value.path.split('/')
        // If there is only 1 link => Parent Link
        if (link.length == 1) new_array.push(temp_value)
        else {
            // Case parent have already been added

            // Case parent havent been added
        }
    }
    return new_array
}

const Category = {
    async get_all() {
        const _array_ = await CategoryModel.find({}).exec()
        return {
            length: _array_.length,
            data: [..._array_]
        }
    },
    async get_one(id) {
        const _result_ = await CategoryModel.findById(id)
        return _result_
    },
    async get_organised() {
        const _array_ = await command.init()
            .then(col => {
                return col.find({}).toArray()
            })
        command.close()
        const nested_array = nest_group(_array_)
        return {
            length: _array_.length,
            data: [...nested_array]
        }
    },
    async add(data) {
        let _new_ = await CategoryModel.create(data)
        return _new_
    },
    async update(id, data) {
        const _result_ = await CategoryModel.findByIdAndUpdate(id, data)
        return _result_
    },
    async delete(id) {
        const _result_ = await CategoryModel.findByIdAndDelete(id)
        return _result_
    }
}
module.exports = Category