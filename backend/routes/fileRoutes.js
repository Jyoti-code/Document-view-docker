
const express = require('express');
const { uploadFile, getFiles } = require('../controllers/fileController');

const router = express.Router();

// http://localhost:5000/api/files/uploadDoc
router.post('/uploadDoc', uploadFile);

router.get('/getFiles', getFiles);

module.exports = router;

