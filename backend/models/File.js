const mongoose = require('mongoose');

const fileSchema = new mongoose.Schema({
  filename: { type: String, required: true },
  fileUrl: { type: String, required: true },
  createdDate: { type: Date, default: Date.now },
});

const File = mongoose.model('File', fileSchema);

module.exports = File;
