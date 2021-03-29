import React from "react";
import Header from "./Header.js";
import Main from "./Main.js";
import Footer from "./Footer.js";
import PopupWithForm from "./PopupWithForm.js";
import ImagePopup from "./ImagePopup.js";
import {CurrentUserContext} from "../contexts/CurrentUserContext";
import api from "../utils/api";

function App() {
  const [currentUser, setCurrentUser] = React.useState('');
  // const [cards, setCards] = React.useState([]);

  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState(false);

  function handleEditAvatarClick() {
    setEditAvatarPopupOpen(true);
  }
  function handleEditProfileClick() {
    setEditProfilePopupOpen(true);
  }
  function handleAddPlaceClick() {
    setAddPlacePopupOpen(true);
  }
  function handleCardClick(card) {
    setSelectedCard(card);
  }

  function closeAllPopups() {
    setAddPlacePopupOpen(false);
    setEditProfilePopupOpen(false);
    setEditAvatarPopupOpen(false);
    setSelectedCard(false);
  }

  React.useEffect(() => {
    api.getUserInfo()
      .then((userProfileData) => {
        setCurrentUser(userProfileData);
      })
      .catch((err)=> console.log(err));
  }, []);

//   React.useEffect(() => {
//     api.getInitialCards()
//       .then((initialCards) => {
//         setCards(initialCards.map((card) =>({
//           name: card.name,
//           link: card.link,
//           id: card._id,
//           likes: card.likes
//         })))
//       })
//       .catch((err)=> console.log(err));
// }, [])

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="App page">
        <Header />
        <Main
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          onEditAvatar={handleEditAvatarClick}
          onCardClick={handleCardClick}
        />    
        <Footer />
        <ImagePopup
          card={selectedCard}
          onClose={closeAllPopups}
        />
        <PopupWithForm title="Редактировать профиль" name = "popup_edit-profile" isOpen = {isEditProfilePopupOpen} onClose= {closeAllPopups}>
          <>
            <label className="label">
              <input type="text" id="profile-name" className="popup__input popup__input_profile_name" name="name" placeholder="Имя пользователя" required minLength="2" maxLength="40" />
              <span id="profile-name-error" className="error"></span>
            </label>
            <label className="label">
              <input type="text" id="profile-info" className="popup__input popup__input_profile_info" name="about" placeholder="О себе" required minLength="2" maxLength="200" />
              <span id="profile-info-error" className="error"></span>
            </label>
            <button type="submit" className="popup__save-button">Сохранить</button>
          </>
        </PopupWithForm>
        <PopupWithForm title="Новое место" name = "popup_add-place" isOpen = {isAddPlacePopupOpen} onClose= {closeAllPopups}>
          <>
            <label className="label">
              <input type="text" id="picture-name" className="popup__input popup__input_picture_name" name="name" placeholder="Название" minLength="2" maxLength="30" required />
              <span id="picture-name-error" className="error"></span>
            </label>
            <label className="label">
              <input type="url" id="picture-link" className="popup__input popup__input_picture_link" name="link" placeholder="Ссылка на картинку" required />
              <span id="picture-link-error" className="error"></span>
            </label>
            <button type="submit" className="popup__save-button">Сохранить</button>
          </>
        </PopupWithForm>
        <PopupWithForm title="Обновить аватар" name = "popup_avatar" isOpen = {isEditAvatarPopupOpen} onClose= {closeAllPopups}>
          <>
            <label className="label">
              <input type="url" id="avatar" className="popup__input popup__input_avatar_name" name="avatar" placeholder="Ссылка на картинку" required />
              <span id="avatar-error" className="error"></span>
            </label>
            <button type="submit" className="popup__save-button popup__save-button_avatar">Сохранить</button>
          </>
        </PopupWithForm>
        <PopupWithForm title="Вы уверены?" name="popup_delete">
          <>
            <button type="button" className="popup__save-button popup__save-button_delete">Да</button>
          </>
        </PopupWithForm>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
