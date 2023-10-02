import React from "react";
import "../../styles/bookings.scss";
const CarItem = (props) => {
  const { carName, category, type, groupSize, rentPrice, imgUrl } = props.item;
  return (
    <div className="car__item">
      <div className="car__item-top">
        <div className="car__item-tile">
          <h3>{carName}</h3>
          <p>{category}</p>
        </div>
        <span>
          <i className="ri-heart-line"></i>
        </span>
      </div>
      <div className="car__img">
        <img className="car__img" src={imgUrl} alt="" />
      </div>
      <div className="car__item-bottom">
        <div className="car__bottom-left">
          <p>
            <i className="ri-user-line"></i> {groupSize}
          </p>
          <p>
            <i className="ri-repeat-line"></i>
            {type}
          </p>
        </div>
        <p className="car__rent">${rentPrice}/d</p>
      </div>
    </div>
  );
};

export default CarItem;
