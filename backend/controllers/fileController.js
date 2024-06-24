const File = require('../models/File');

exports.uploadFile = async (req, res, next) => {
  const { url, name } = req.body;

  if (!url || !name) {
    return res.status(400).json({ message: 'url and name fields are required' });
  }

  try {
    const newFile = new File({
      filename: name,
      fileUrl: url,
      createdDate: Date.now()
    });

    await newFile.save();

    res.status(201).json({
      success: true,
      file: newFile,
    });
  } catch (error) {
    console.error('Error uploading file:', error);
    res.status(500);
    next(error);
  }
};

exports.getFiles = async (req, res) => {
  try {
    const files = await File.find();
    res.status(200).json(files);
  } catch (error) {
    console.error('Error fetching files:', error);
    res.status(500).json({ message: 'Server error' });
  }
};
