
const admin = require("firebase-admin");
const serviceAccount = require("./serviceAccountKey.json");

//conexion de firestore
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

module.exports = admin.firestore();


