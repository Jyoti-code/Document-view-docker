import React, { useState } from 'react';
import axios from 'axios';

const FileUpload = () => {
  const [file, setFile] = useState(null);
  const [tags, setTags] = useState('');

  const handleFileUpload = async () => {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('tags', tags);

    try {
      const token = localStorage.getItem('token');
      const response = await axios.post('http://localhost:5000/api/files/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          'Authorization': `Bearer ${token}`
        }
      });
      console.log('File uploaded successfully', response.data);
    } catch (error) {
      console.error('Error uploading file', error);
    }
  };

  return (
    <div>
      <input type="file" onChange={(e) => setFile(e.target.files[0])} />
      <input type="text" value={tags} onChange={(e) => setTags(e.target.value)} placeholder="Tags (comma separated)" />
      <button onClick={handleFileUpload}>Upload File</button>
    </div>
  );
};

export default FileUpload;
