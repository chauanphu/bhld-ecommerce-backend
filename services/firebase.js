const { initializeApp, applicationDefault, cert } = require('firebase-admin/app');
const { getFirestore, Timestamp, FieldValue, getDocs } = require('firebase-admin/firestore');
require("dotenv").config();

const serviceAccount = require(process.env.KEY_PATH);

initializeApp({
    credential: cert(serviceAccount)
});

const db = getFirestore();
module.exports = db