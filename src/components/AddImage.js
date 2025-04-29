import React, { useState } from 'react';
import axios from 'axios';
import Navbar from './Navbar';
import './AddImage.css'; // import CSS file

export default function AddImage() {
  const [file, setFile] = useState(null);
  const [message, setMessage] = useState('');

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    if (!file) {
      setMessage("Please select a file first.");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await axios.post("http://localhost:8082/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      });
      setMessage(response.data);
    } catch (error) {
      setMessage("Upload failed. Try again.");
    }
  };

  return (
    <div className="add-image-container mt-0">
      <Navbar /> <br></br>
      <h2 className="upload-title">Image Upload</h2>
      <input type="file" onChange={handleFileChange} className="upload-input" />
      <br />
      <button onClick={handleUpload} className="upload-button">Upload</button>
      <p className="upload-message">{message}</p>
    </div>
  );
}
