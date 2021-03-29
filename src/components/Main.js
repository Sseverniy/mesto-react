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
          id: card._id,
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
        { cards.map((card)=> (<Card card={card} key={card.id} onCardClick={onCardClick}/>))}
      </section>
    </main>
    )
}
export default Main;