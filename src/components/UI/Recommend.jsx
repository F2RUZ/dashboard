import React from "react";

const Recommend = (props) => {
  const { carName, retweet, imgUrl, rentPrice } = props.item;
  return (
    <div className="recommed__car__card">
      <div className="recommed__car__top">
        <h5>
          <span>
            <i className="ri-restart-line"></i>
          </span>
          74 % recommended
        </h5>
      </div>
      <div className="recommed__car__img">
        <img src={imgUrl} alt="" />
      </div>
      <div className="recommed__car__bottom">
        <h4>{carName}</h4>
        <div>
          <div className="recommed__car__other">
            <div className="recommend__car__icon">
              <p>
                <i className="ri-repeat-line"></i>
                {retweet}k
              </p>
              <p>
                <i className="ri-settings-4-fill"></i>
              </p>
              <p>
                <i className="ri-timer-flash-fill"></i>
              </p>
              <span>$ {rentPrice}/h</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recommend;
