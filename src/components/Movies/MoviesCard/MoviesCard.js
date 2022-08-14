import React, { useState } from "react";
import "./MoviesCard.css";

export default function MoviesCard() {
  const [isSaved, setIsSaved] = useState(false);

  return (
    <>
      <div className="moviescard">
        <img
          className="moviescard__image"
          src="https://thumbs.dfs.ivi.ru/storage37/contents/5/9/2d3f6ce6aa379795babc5589e89a74.jpg"
          alt="33 слова о дизайне"
        />
        <div className={!isSaved ? "moviescard__save" : "moviescard__saved"} />
        <div className="moviescard__info">
          <p className="moviescard__title">33 слова о дизайне</p>
          <p className="moviescard__time">1ч 17м</p>
        </div>
      </div>
      <div className="moviescard">
        <img
          className="moviescard__image"
          src="https://thumbs.dfs.ivi.ru/storage37/contents/5/9/2d3f6ce6aa379795babc5589e89a74.jpg"
          alt="33 слова о дизайне"
        />
        <div className={!isSaved ? "moviescard__save" : "moviescard__saved"} />
        <div className="moviescard__info">
          <p className="moviescard__title">Киноальманах «100 лет дизайна»</p>
          <p className="moviescard__time">1ч 17м</p>
        </div>
      </div>
      <div className="moviescard">
        <img
          className="moviescard__image"
          src="https://thumbs.dfs.ivi.ru/storage37/contents/5/9/2d3f6ce6aa379795babc5589e89a74.jpg"
          alt="33 слова о дизайне"
        />
        <div className={!isSaved ? "moviescard__save" : "moviescard__saved"} />
        <div className="moviescard__info">
          <p className="moviescard__title">В погоне за Бенкси</p>
          <p className="moviescard__time">1ч 17м</p>
        </div>
      </div>
      <div className="moviescard">
        <img
          className="moviescard__image"
          src="https://thumbs.dfs.ivi.ru/storage37/contents/5/9/2d3f6ce6aa379795babc5589e89a74.jpg"
          alt="33 слова о дизайне"
        />
        <div className={!isSaved ? "moviescard__save" : "moviescard__saved"} />
        <div className="moviescard__info">
          <p className="moviescard__title">Баския: Взрыв реальности</p>
          <p className="moviescard__time">1ч 17м</p>
        </div>
      </div>
      <div className="moviescard">
        <img
          className="moviescard__image"
          src="https://thumbs.dfs.ivi.ru/storage37/contents/5/9/2d3f6ce6aa379795babc5589e89a74.jpg"
          alt="33 слова о дизайне"
        />
        <div className={!isSaved ? "moviescard__save" : "moviescard__saved"} />
        <div className="moviescard__info">
          <p className="moviescard__title">Бег это свобода</p>
          <p className="moviescard__time">1ч 17м</p>
        </div>
      </div>
      <div className="moviescard">
        <img
          className="moviescard__image"
          src="https://thumbs.dfs.ivi.ru/storage37/contents/5/9/2d3f6ce6aa379795babc5589e89a74.jpg"
          alt="33 слова о дизайне"
        />
        <div className={!isSaved ? "moviescard__save" : "moviescard__saved"} />
        <div className="moviescard__info">
          <p className="moviescard__title">Книготорговцы</p>
          <p className="moviescard__time">1ч 17м</p>
        </div>
      </div>
      <div className="moviescard">
        <img
          className="moviescard__image"
          src="https://thumbs.dfs.ivi.ru/storage37/contents/5/9/2d3f6ce6aa379795babc5589e89a74.jpg"
          alt="33 слова о дизайне"
        />
        <div className={!isSaved ? "moviescard__save" : "moviescard__saved"} />
        <div className="moviescard__info">
          <p className="moviescard__title">Когда я думаю о Германии ночью</p>
          <p className="moviescard__time">1ч 17м</p>
        </div>
      </div>
      <div className="moviescard">
        <img
          className="moviescard__image"
          src="https://thumbs.dfs.ivi.ru/storage37/contents/5/9/2d3f6ce6aa379795babc5589e89a74.jpg"
          alt="33 слова о дизайне"
        />
        <div className={!isSaved ? "moviescard__save" : "moviescard__saved"} />
        <div className="moviescard__info">
          <p className="moviescard__title">
            Gimme Danger: История Игги и The Stooges
          </p>
          <p className="moviescard__time">1ч 17м</p>
        </div>
      </div>
      <div className="moviescard">
        <img
          className="moviescard__image"
          src="https://thumbs.dfs.ivi.ru/storage37/contents/5/9/2d3f6ce6aa379795babc5589e89a74.jpg"
          alt="33 слова о дизайне"
        />
        <div className={!isSaved ? "moviescard__save" : "moviescard__saved"} />
        <div className="moviescard__info">
          <p className="moviescard__title">Дженис: Маленькая девочка грустит</p>
          <p className="moviescard__time">1ч 17м</p>
        </div>
      </div>
      <div className="moviescard">
        <img
          className="moviescard__image"
          src="https://thumbs.dfs.ivi.ru/storage37/contents/5/9/2d3f6ce6aa379795babc5589e89a74.jpg"
          alt="33 слова о дизайне"
        />
        <div className={!isSaved ? "moviescard__save" : "moviescard__saved"} />
        <div className="moviescard__info">
          <p className="moviescard__title">Соберись перед прыжком</p>
          <p className="moviescard__time">1ч 17м</p>
        </div>
      </div>
      <div className="moviescard">
        <img
          className="moviescard__image"
          src="https://thumbs.dfs.ivi.ru/storage37/contents/5/9/2d3f6ce6aa379795babc5589e89a74.jpg"
          alt="33 слова о дизайне"
        />
        <div className={!isSaved ? "moviescard__save" : "moviescard__saved"}/>
        <div className="moviescard__info">
          <p className="moviescard__title">Пи Джей Харви: A dog called money</p>
          <p className="moviescard__time">1ч 17м</p>
        </div>
      </div>
      <div className="moviescard">
        <img
          className="moviescard__image"
          src="https://thumbs.dfs.ivi.ru/storage37/contents/5/9/2d3f6ce6aa379795babc5589e89a74.jpg"
          alt="33 слова о дизайне"
        />
        <div className={!isSaved ? "moviescard__save" : "moviescard__saved"} />
        <div className="moviescard__info">
          <p className="moviescard__title">По волнам: Искусство звука в кино</p>
          <p className="moviescard__time">1ч 17м</p>
        </div>
      </div>
    </>
  );
}
