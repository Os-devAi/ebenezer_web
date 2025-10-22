import React, { useState } from 'react';
import './Gallery.css';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const galleryImages = [
    'https://ik.imagekit.io/nhu6ngxhk/EbenezerPictures/picture_one.jpg',
    'https://ik.imagekit.io/nhu6ngxhk/EbenezerPictures/picture_three.jpg',
    'https://ik.imagekit.io/nhu6ngxhk/EbenezerPictures/picture_two.jpg',
    'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    'https://images.unsplash.com/photo-1560090995-016e7b95d48f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80',
    'https://images.unsplash.com/photo-1591343395082-e120087004b4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80'
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
        <h2 className="section-title">Nuestra Galería</h2>
        <p className="section-subtitle">Conoce nuestras instalaciones y ambiente</p>

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