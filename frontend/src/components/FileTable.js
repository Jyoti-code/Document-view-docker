import React, { useState, useEffect } from 'react';
import axios from 'axios';

const FileTable = () => {
  const [fileDetails, setFileDetails] = useState([]);

  useEffect(() => {
    fetchFiles();
  }, []);

  const fetchFiles = async () => {
    try {
      const res = await axios.get('http://localhost:5001/api/files/getFiles');
      setFileDetails(res.data);
    } catch (error) {
      console.error('Error fetching files:', error);
    }
  };

  return (
    <div className="container">
  <table className="table table-striped">
    <thead>
      <tr>
        <th scope="col">Sr No</th>
        <th scope="col">File Name</th>
        <th scope="col">Created Date</th>
        <th scope="col">View</th>
      </tr>
    </thead>
    <tbody>
      {fileDetails.map((file, index) => (
        <tr key={index}>
          <td>{index + 1}</td>
          <td>{file.filename}</td>
          <td>{new Date(file.createdDate).toLocaleString()}</td>
          <td>
            <a className='btn btn-primary' href={file.fileUrl} target="_blank" rel="noopener noreferrer">
              View
            </a>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
</div>

  );
};

export default FileTable;
