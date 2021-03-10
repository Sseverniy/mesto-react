import React from 'react';

function Card(card) {
  return (
    <article className="card">
      <button type="button" className="card__delete button" aria-label="Удалить карточку" />
      <img className="card__pic" src={card.card.link} alt={card.card.name} id="card-image" />
      <div className="card__wrapper">
        <h2 className="card__place-name">{card.card.name}</h2>
        <div>
          <button type="button" className="card__like button" aria-label="Поставить лайк" />
          <p className="card__like-counter">{card.card.likes.length}</p>
        </div>
      </div>
    </article>
  )
}

export default Card;