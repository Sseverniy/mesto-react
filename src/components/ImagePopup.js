import React from "react";

function ImagePopup() {
  

  return (
    <div className="popup popup_image">
      <div className="popup__image-container">
        <button
          type="button"
          className="popup__close-button button"
          aria-label="Закрыть окно"
        />
        <img
          className="popup__picture"
          id="popup-picture"
          src="https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg"
          alt="Камчатка"
        />
        <h3 className="popup__image-heading">Камчатка</h3>
      </div>
    </div>
  );
}

export default ImagePopup;