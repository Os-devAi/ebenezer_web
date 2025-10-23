import React, { useState } from 'react';
import './Gallery.css';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const galleryImages = [
    'https://ik.imagekit.io/nhu6ngxhk/EbenezerPictures/picture_one.jpg',
    'https://ik.imagekit.io/nhu6ngxhk/EbenezerPictures/picture_three.jpg',
    'https://ik.imagekit.io/nhu6ngxhk/EbenezerPictures/picture_two.jpg',
    'https://ik.imagekit.io/nhu6ngxhk/EbenezerPictures/image.png?updatedAt=1761251987479',
    'https://ik.imagekit.io/nhu6ngxhk/EbenezerPictures/image1.png?updatedAt=1761251812906',
    'https://ik.imagekit.io/nhu6ngxhk/EbenezerPictures/image22.png'
  ];

  const openModal = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <section id="galeria" className="gallery-section">
      <div className="container">
        <h2 className="section-title-gallery">Nuestra Galería</h2>
        
        <div className="gallery-grid">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="gallery-item"
              onClick={() => openModal(image)}
            >
              <img src={image} alt={`Instalación ${index + 1}`} />
              <div className="gallery-overlay">
                <span>Ver más</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedImage && (
        <div className="modal" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={closeModal}>×</button>
            <img src={selectedImage} alt="Modal" />
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;