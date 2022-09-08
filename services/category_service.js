const db = require('./firebase')

const Category = {
    _value_: [],

    async get_all() {
        if (this._value_.length == 0) {
            snapshot = await db.collection('categories').get();
            snapshot.forEach(async (doc) => {
                var item = {
                    id: doc.id,
                    ...doc.data()
                }
                this._value_.push(item)
            });
        }
        let _array_ = [...this._value_]
        _array_.sort((a, b) => a.name.localeCompare(b.name))
        return [..._array_]
    }
}
module.exports = Category