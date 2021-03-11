import React from "react";

function ImagePopup(props) {
  

  return (
    <div className={`popup popup_image ${props.card ? 'popup_opened' : ''}`}>
      <div className="popup__image-container">
        <button
          type="button"
          className="popup__close-button button"
          aria-label="Закрыть окно"
          onClick={props.onClose}
        />
        <img
          className="popup__picture"
          id="popup-picture"
          src={props.card.link}
          alt={props.card.name}
        />
        <h3 className="popup__image-heading">{props.card.name}</h3>
      </div>
    </div>
  );
}

export default ImagePopup;