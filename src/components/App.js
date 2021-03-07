import React from "react";
import Header from "./Header.js";
import Main from "./Main.js";
import Footer from "./Footer.js";

function App() {
  return (
    <div className="App page">
      <Header />
      <Main />
      <Footer />

      <div className="popup popup_add-place">
        <div className="popup__container">
          <button
            type="button"
            className="popup__close-button button"
            aria-label="Закрыть окно"
          />
          <h3 className="popup__heading">Новое место</h3>
          <form
            className="popup__form"
            name="picture-form"
            autoComplete="off"
            noValidate
          >
            <label className="label">
              <input
                type="text"
                id="picture-name"
                className="popup__input popup__input_picture_name"
                name="name"
                placeholder="Название"
                minLength="2"
                maxLength="30"
                required
              />
              <span id="picture-name-error" className="error" />
            </label>
            <label className="label">
              <input
                type="url"
                id="picture-link"
                className="popup__input popup__input_picture_link"
                name="link"
                placeholder="Ссылка на картинку"
                required
              />
              <span id="picture-link-error" className="error" />
            </label>
            <button type="submit" className="popup__save-button">
              Сохранить
            </button>
          </form>
        </div>
      </div>

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

      <div className="popup popup_delete">
        <div className="popup__container">
          <button
            type="button"
            className="popup__close-button button"
            aria-label="Закрыть окно"
          />
          <h3 className="popup__heading popup__heading_delete">Вы Уверены?</h3>
          <form className="popup__form">
            <button
              type="button"
              className="popup__save-button popup__save-button_delete"
            >
              Да
            </button>
          </form>
        </div>
      </div>

      <div className="popup popup_avatar">
        <div className="popup__container">
          <button
            type="button"
            className="popup__close-button button"
            aria-label="Закрыть окно"
          />
          <h3 className="popup__heading popup__heading_avatar">
            Обновить аватар
          </h3>
          <form className="popup__form" autoComplete="off" noValidate>
            <label className="label">
              <input
                type="url"
                id="avatar"
                className="popup__input popup__input_avatar_name"
                name="avatar"
                placeholder="Ссылка на картинку"
                required
              />
              <span id="avatar-error" className="error" />
            </label>
            <button
              type="submit"
              className="popup__save-button popup__save-button_avatar"
            >
              Сохранить
            </button>
          </form>
        </div>
      </div>

      <template className="template">
        <article className="card">
          <button
            type="button"
            className="card__delete button"
            aria-label="Удалить карточку"
          />
          <img className="card__pic" src=" " alt=" " id="card-image" />
          <div className="card__wrapper">
            <h2 className="card__place-name" />
            <div>
              <button
                type="button"
                className="card__like button"
                aria-label="Поставить лайк"
              />
              <p className="card__like-counter">0</p>
            </div>
          </div>
        </article>
      </template>
    </div>
  );
}

export default App;
