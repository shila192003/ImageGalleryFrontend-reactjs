import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from './Navbar';

export default function ImageList() {
  const [images, setImages] = useState([]);

  const fetchImages = () => {
    axios.get("http://localhost:8082/getAll")
      .then(response => {
        setImages(response.data);
      })
      .catch(error => {
        console.error("Error fetching images:", error);
      });
  };

  useEffect(() => {
    fetchImages();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8082/delete/${id}`);
      setImages(images.filter(image => image.id !== id)); // Update UI after deletion
    } catch (error) {
      console.error("Error deleting image:", error);
    }
  };

  return (
    <div>
      
      <div style={styles.container}>
        {images.map((image) => (
          <div key={image.id} style={styles.card}>
            <img
              src={`http://localhost:8082/download/${image.id}`}
              alt={image.name}
              style={styles.image}
            />
            <p>{image.name}</p>
            <button style={styles.button} onClick={() => handleDelete(image.id)}>
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    flexWrap: "wrap",
    gap: "20px",
    padding: "20px",
    justifyContent: "center"
  },
  card: {
    border: "1px solid #ccc",
    borderRadius: "8px",
    padding: "10px",
    textAlign: "center",
    width: "200px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)"
  },
  image: {
    width: "100%",
    height: "auto",
    objectFit: "cover",
    borderRadius: "4px"
  },
  button: {
    marginTop: "10px",
    padding: "6px 12px",
    backgroundColor: "#ff4d4d",
    color: "white",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer"
  }
};
