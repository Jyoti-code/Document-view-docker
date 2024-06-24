const admin = require('firebase-admin');
const serviceAccount = require('C:\\Users\\jyoti\\Downloads\\my-doc-view-project-firebase-adminsdk-eagli-e0098160f0.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  storageBucket: 'my-doc-view-project.appspot.com',
});

const bucket = admin.storage().bucket();

module.exports = {
  bucket,
};
