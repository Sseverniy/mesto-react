import React from "react";
import api from "../utils/api.js";
import Card from "./Card.js";
import {CurrentUserContext} from "../contexts/CurrentUserContext";

function Main({onEditAvatar, onEditProfile, onAddPlace, onCardClick}) {
  const currentUserData = React.useContext(CurrentUserContext);

  // const [userName, setUserName] = React.useState('');
  // const [userDescription, setUserDescription] = React.useState('');
  // const [userAvatar, setUserAvatar] = React.useState('');
  const [cards, setCards] = React.useState([]);

  function handleCardLike(card) {
    // Снова проверяем, есть ли уже лайк на этой карточке
    const isLiked = card.likes.some(i => i._id === currentUserData._id);

    //Отправляем запрос в API и получаем обновлённые данные карточки
    api.changeLikeCardStatus(card._id, isLiked).then((newCard) => {
      const newCards = cards.map((c) => c._id === card._id ? newCard : c);

      setCards(newCards);

    });
  }

  function handleCardDelete(card) {
    api.deleteCard(card.id)
      .then((newCard) => {
        setCards((state) => state.filter((c) => c.id !== newCard));
      })

  }

  React.useEffect(() => {
    api.getAllInitialData()
      .then((data) => {
        const [ initialCards, userProfileData] = data;
        // setUserName(userProfileData.name);
        // setUserDescription(userProfileData.about);
        // setUserAvatar(userProfileData.avatar);

        setCards(initialCards.map((card) =>({
          name: card.name,
          link: card.link,
          owner: card.owner,
          _id: card._id,
          likes: card.likes
        }
        )))      
      })
      .catch((err) => {console.log(err)});
  },[]);

  return (
    <main className="main">
      <section className="profile">
        <div className="profile__avatar" onClick={onEditAvatar} style={{ backgroundImage: `url(${currentUserData.avatar})` }}/>
        <div className="profile__id">
          <div className="profile__wrapper">
            <h1 className="profile__name">{currentUserData.name}</h1>
            <button type="button"
                    className="profile__edit-button button" aria-label="Редактировать профиль" onClick={onEditProfile}/>
          </div>
          <p className="profile__info">{currentUserData.about}</p>
        </div>
        <button type="button" className="profile__button button" aria-label="Добавить фото" onClick={onAddPlace}/>
      </section>

      <section className="cards">
        { cards.map((card)=> (<Card card={card} key={card._id} onCardClick={onCardClick} onCardLike={handleCardLike} onCardDelete={handleCardDelete}/>))}
      </section>
    </main>
    )
}
export default Main;