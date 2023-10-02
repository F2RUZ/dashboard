import React from "react";
import "../styles/bookings.scss";
import BookingCARD from "../assets/fetch-data/booking-cards";
import CarItem from "../components/UI/CarItem";

const Bookings = () => {
  return (
    <div className="booking">
      <div className="booking__wrapper">
        <h2 className="booking__title">Booking</h2>
        <div className="filter__widget-wrapper">
          <div className="filter__widget-01">
            <select>
              <option value="new">New</option>
              <option value="popular">Popular</option>
              <option value="upcoming">Upcoming</option>
            </select>
          </div>
          <div className="filter__widget-02">
            <select>
              <option value="toyota">Toyota</option>
              <option value="bmw">BMW</option>
              <option value="audi">Audi</option>
            </select>
          </div>
        </div>
        <div className="booking__card-list">
          {BookingCARD.map((item, index) => (
            <CarItem key={index} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Bookings;
