const UserModel = require('../database/user.model')

const Users = {
    async get_all() {
        try {
            const _array_ = await UserModel.find({}).exec()
            return {
                length: _array_.length,
                data: [..._array_]
            }
        } catch (err) {
            console.error(err)
            return false
        }
    },
    async get_one(id) {
        const _result_ = await UserModel.findById(id)
        return _result_
    },
    async add(data) {
        let _new_ = await UserModel.create(data)
        return _new_
    },
    async update(id, data) {
        const _result_ = await UserModel.findByIdAndUpdate(id, data)
        return _result_
    },
    async delete(id) {
        const _result_ = await UserModel.findByIdAndDelete(id)
        return _result_
    }
}
module.exports = Users