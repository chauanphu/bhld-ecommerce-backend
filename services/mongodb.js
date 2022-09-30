const { MongoClient } = require('mongodb');
const MONGO_URL = 'mongodb://localhost:27017'

// Database Name
const dbName = 'TGP';
const ProductsCollection = 'products'

class Command {
    client = new MongoClient(MONGO_URL);

    /**
     * Name of the collection
     * @param {string} collection 
     */
    constructor(collection) {
        this.collection = collection
    }

    /**
     * 
     * @param {void} callback 
     */
    async init() {
        try {
            await this.client.connect()
            console.log('Connect successfully')
            const db = this.client.db(dbName)
            const _collection_ = db.collection(this.collection)
            return _collection_
        } catch (error) {
            console.log("Err: ", error)
        }
    }
    close() {
        this.client.close()
    }
}

module.exports = Command