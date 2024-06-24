import React, { useState } from 'react';
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import axios from 'axios';
import { app } from '../config/firebase';


const Upload = () => {
  const [file, setFile] = useState(null);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [fileDetails, setFileDetails] = useState([]);

  const onChange = e => {
    setFile(e.target.files[0]);
  };

  const uploadFileToFirebase = file => {
    return new Promise((resolve, reject) => {
      const storage = getStorage(app);
      const storageRef = ref(storage, 'uploads/' + file.name);
      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        'state_changed',
        snapshot => {
          const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          setUploadProgress(progress);
          // console.log('Upload is ' + progress + '% done');
        },
        error => {
          console.error('Upload failed:', error);
          reject(error);
        },
        async () => {
          try {
            const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
            console.log('Upload successful, file available at', downloadURL);
            resolve(downloadURL);
          } catch (error) {
            console.error('Error getting download URL:', error);
            reject(error);
          }
        }
      );
    });
  };

  const onSubmit = async e => {
    e.preventDefault();
    if (!file) return;

    try {
      const downloadURL = await uploadFileToFirebase(file);
  
      const res = await axios.post('http://localhost:5001/api/files/uploadDoc', {
        url: downloadURL,
        name: file.name
      });
  
      // Update the local state to display the file details
      setFileDetails([...fileDetails, res.data.file]);
    } catch (error) {
      console.error('Error uploading file:', error);
    }
  };

  return (
    <div className="container">
  <form className="mt-4" onSubmit={onSubmit}>
  <div className="row">
    <div className="col-md-6">
    <input className="form-control" type="file" onChange={onChange} required />
    </div>
    <div className="col-md-4">
    <button className="btn btn-primary" type="submit">Upload</button>
    </div>
  </div>
    {uploadProgress > 0 && <p className="mt-2">Upload progress: {uploadProgress}%</p>}
  </form>

  <div className="mt-4">
    <ul className="list-group">
      {fileDetails.map((file, index) => (
        <li key={index} className="list-group-item">
          <a href={file.fileUrl} target="_blank" rel="noopener noreferrer">{file.filename}</a>
        </li>
      ))}
    </ul>
  </div>
</div>

  );
};

export default Upload;
