import React from 'react';
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function Card({ card, onCardClick }) {
  const currentUserData = React.useContext(CurrentUserContext);
  console.log(currentUserData);
  console.log(card);
  console.log(card.owner);

  // Определяем, являемся ли мы владельцем текущей карточки
  const isOwn = card.owner._id === currentUserData._id;
  

  // Создаём переменную, которую после зададим в `className` для кнопки удаления
  const cardDeleteButtonClassName = (
    `card__delete button ${isOwn ? '' : 'card__delete_hidden'}`
  );

  // Определяем, есть ли у карточки лайк, поставленный текущим пользователем
  const isLiked = card.likes.some(i => i._id === currentUserData._id);

  // Создаём переменную, которую после зададим в `className` для кнопки лайка
  const cardLikeButtonClassName = (
    `card__like ${isLiked ? 'card__like_active' : ''}`
  );

  function handleClick() {
    onCardClick(card);
  }

  return (
    <article className="card">
      <button type="button" className="card__delete button" aria-label="Удалить карточку" />
      <img className="card__pic" src={card.link} alt={card.name} id="card-image" onClick={handleClick} />
      <div className="card__wrapper">
        <h2 className="card__place-name">{card.name}</h2>
        <div>
          <button type="button" className="card__like button" aria-label="Поставить лайк" />
          <p className="card__like-counter">{card.likes.length}</p>
        </div>
      </div>
    </article>
  )
}

export default Card;