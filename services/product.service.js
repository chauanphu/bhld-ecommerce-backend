const ProductModel = require('../database/product.model')

const Products = {
    async get_all() {
        try {
            const _array_ = await ProductModel.find({}).exec()
            return {
                length: _array_.length,
                data: [..._array_]
            }
        } catch (err) {
            console.error(err)
            return false
        }
    },
    /**
     * 
     * @param {string} category expect category to be like mat-na-loc-doc
     * @returns 
     */
    async get_by_category(category) {
        const _array_ = await ProductModel.find({ parent_path: new RegExp(`${category}`) }).exec()
        return {
            length: _array_.length,
            data: [..._array_]
        }
    },
    async get_one(id) {
        const _result_ = await ProductModel.findById(id)
        return _result_
    },
    async add(data) {
        let _new_ = await ProductModel.create(data)
        return _new_
    },
    async update(id, data) {
        const _result_ = await ProductModel.findByIdAndUpdate(id, data)
        return _result_
    },
    async delete(id) {
        const _result_ = await ProductModel.findByIdAndDelete(id)
        return _result_
    }
}
module.exports = Products