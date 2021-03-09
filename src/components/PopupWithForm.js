import React from "react";

function PopupWithForm(props) {
  return (
    <div className={`popup popup_type_${props.name}`}>
      <div className="popup__container">
        <button
          type="button"
          className="popup__close-button button"
          aria-label="Закрыть окно"
        ></button>
        <h3 className="popup__heading">{props.title}</h3>
        <form
          className="popup__form"
          name={props.name}
          autocomplete="off"
          novalidate
        >
          {props.children}
        </form>
      </div>
    </div>
  );
}

export default PopupWithForm;
