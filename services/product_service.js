// const db = require('./firebase')

// const Products = {
//     _value_: [],

//     async _updatedata_() {
//         if (this._value_.length == 0) {
//             snapshot = await db.collection('products').get();
//             snapshot.forEach(async (doc) => {
//                 ref = await doc.data().category.get();
//                 var item = {
//                     id: doc.id,
//                     ...doc.data()
//                 }
//                 item.category = ref.data().name
//                 item.category_id = ref.id
//                 this._value_.push(item)
//             });
//         }
//     },
//     /**
//      * 
//      * @param {string} orderby 
//      * @param {number} page 
//      * @param {number} limit 
//      * @returns 
//      */
//     async get_all() {
//         await this._updatedata_()
//         let _array_ = [...this._value_]
//         _array_.sort((a, b) => a.category.localeCompare(b.category))
//         return {
//             length: this._value_.length,
//             data: [..._array_]
//         }
//     },
//     async get_one(id) {
//         await this._updatedata_()
//         return this._value_.find(item => item.id === id)
//     },
//     async get_category(id) {
//         await this._updatedata_()
//         let result = this._value_.filter(item => item.category_id === id)
//         return {
//             length: result.length,
//             data: [...result]
//         }
//     },
//     get_related: (id) => []
// }
// module.exports = Products

// const db = require('./firebase')

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