import React from "react";
import api from "../utils/Api.js";
import Card from "./Card.js";

function Main(props) {
  const [userName, setUserName] = React.useState();
  const [userDescription, setUserDescription] = React.useState();
  const [userAvatar, setUserAvatar] = React.useState();
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    api.getAllInitialData()
      .then((data) => {
        const [ initialCards, userProfileData] = data;
        setUserName(userProfileData.name);
        setUserDescription(userProfileData.about);
        setUserAvatar(userProfileData.avatar);

        setCards(initialCards.map((card) =>({
          name: card.name,
          link: card.link,
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
        <div className="profile__avatar" onClick={props.onEditAvatar} style={{ backgroundImage: `url(${userAvatar})` }}/>
        <div className="profile__id">
          <div className="profile__wrapper">
            <h1 className="profile__name">{userName}</h1>
            <button type="button"
                    className="profile__edit-button button" aria-label="Редактировать профиль" onClick={props.onEditProfile}/>
          </div>
          <p className="profile__info">{userDescription}</p>
        </div>
        <button type="button" className="profile__button button" aria-label="Добавить фото" onClick={props.onAddPlace}/>
      </section>

      <section className="cards">
        { cards.map((card)=> (<Card card={card} key={card.id}/>))}
      </section>
    </main>
    )
}
export default Main;