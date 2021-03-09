import React from "react";
import Header from "./Header.js";
import Main from "./Main.js";
import Footer from "./Footer.js";
import PopupWithForm from "./PopupWithForm.js";

function App() {

  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = React.useState(false);

  function handleEditAvatarClick() {
    // document.querySelector('.popup_avatar').classList.add('popup_opened');
    setEditAvatarPopupOpen(true);
  }
  function handleEditProfileClick() {
    // document.querySelector('.popup_edit-profile').classList.add('popup_opened');
    setEditProfilePopupOpen(true);
  }
  function handleAddPlaceClick() {
    // document.querySelector('.popup_add-place').classList.add('popup_opened');
    setAddPlacePopupOpen(true);
  }

  function closeAllPopups() {
    setAddPlacePopupOpen(false);
    setEditProfilePopupOpen(false);
    setEditAvatarPopupOpen(false);
  }

  return (
    <div className="App page">
      <Header />
      <Main
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onEditAvatar={handleEditAvatarClick}
      />
      <Footer />
      <PopupWithForm
        title="Редактировать профиль"
        name = "popup_edit-profile"
        isOpen = {isEditProfilePopupOpen}
        onClose= {closeAllPopups}
        children = {(<>
          <label className="label">
            <input type="text" id="profile-name" className="popup__input popup__input_profile_name" name="name" placeholder="Имя пользователя" required minlength="2" maxlength="40" />
            <span id="profile-name-error" className="error"></span>
          </label>
          <label className="label">
            <input type="text" id="profile-info" className="popup__input popup__input_profile_info" name="about" placeholder="О себе" required minlength="2" maxlength="200" />
            <span id="profile-info-error" className="error"></span>
          </label>
          <button type="submit" className="popup__save-button">Сохранить</button>
            </>
        )}
      />
      <PopupWithForm
        title="Новое место"
        name = "popup_add-place"
        isOpen = {isAddPlacePopupOpen}
        onClose= {closeAllPopups}
        children = {(<>
          <label className="label">
            <input type="text" id="picture-name" className="popup__input popup__input_picture_name" name="name" placeholder="Название" minlength="2" maxlength="30" required />
            <span id="picture-name-error" className="error"></span>
          </label>
          <label class="label">
            <input type="url" id="picture-link" className="popup__input popup__input_picture_link" name="link" placeholder="Ссылка на картинку" required />
            <span id="picture-link-error" className="error"></span>
          </label>
          <button type="submit" className="popup__save-button">Сохранить</button>
            </>
        )}
      />
      <PopupWithForm
        title="Обновить аватар"
        name = "popup_avatar"
        isOpen = {isEditAvatarPopupOpen}
        onClose= {closeAllPopups}
        children = {(<>
          <label className="label">
            <input type="url" id="avatar" className="popup__input popup__input_avatar_name" name="avatar" placeholder="Ссылка на картинку" required />
            <span id="avatar-error" className="error"></span>
          </label>
          <button type="submit" className="popup__save-button popup__save-button_avatar">Сохранить</button>
            </>
        )}
      />


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
