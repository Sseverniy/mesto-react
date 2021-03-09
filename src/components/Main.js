import React from "react";

function Main() {
  function handleEditAvatarClick() {
    document.querySelector('.popup_avatar').classList.add('popup_opened');
  }
  function handleEditProfileClick() {
    document.querySelector('.popup_edit-profile').classList.add('popup_opened');
  }
  function handleAddPlaceClick() {
    document.querySelector('.popup_add-place').classList.add('popup_opened');
  }

  return (
    <main className="main">
      <section className="profile">
        <div className="profile__avatar" onClick={handleEditAvatarClick}/>
        <div className="profile__id">
          <div className="profile__wrapper">
            <h1 className="profile__name"/>
            <button type="button"
                    className="profile__edit-button button" aria-label="Редактировать профиль" onClick={handleEditProfileClick}/>
          </div>
          <p className="profile__info"/>
        </div>
        <button type="button" className="profile__button button" aria-label="Добавить фото" onClick={handleAddPlaceClick}/>
      </section>

      <section className="cards">
      </section>
    </main>
    )
}
export default Main;