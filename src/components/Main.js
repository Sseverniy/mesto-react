import React from "react";

function Main() {
  return (
    <main className="main">
      <section className="profile">
        <div className="profile__avatar"/>
        <div className="profile__id">
          <div className="profile__wrapper">
            <h1 className="profile__name"/>
            <button type="button"
                    className="profile__edit-button button" aria-label="Редактировать профиль"/>
          </div>
          <p className="profile__info"/>
        </div>
        <button type="button" className="profile__button button" aria-label="Добавить фото"/>
      </section>

      <section className="cards">
      </section>
    </main>
    )
}
export default Main;