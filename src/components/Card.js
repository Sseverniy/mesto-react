import React from 'react';

function Card(props) {
  function handleClick() {
    props.onCardClick(props.card);
  }

  return (
    <article className="card">
      <button type="button" className="card__delete button" aria-label="Удалить карточку" />
      <img className="card__pic" src={props.card.link} alt={props.card.name} id="card-image" onClick={handleClick}/>
      <div className="card__wrapper">
        <h2 className="card__place-name">{props.card.name}</h2>
        <div>
          <button type="button" className="card__like button" aria-label="Поставить лайк" />
          <p className="card__like-counter">{props.card.likes.length}</p>
        </div>
      </div>
    </article>
  )
}

export default Card;