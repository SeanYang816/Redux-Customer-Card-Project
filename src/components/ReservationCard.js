import React from "react";
import { useDispatch } from "react-redux";
import { removeReservation } from "../features/reservationSlice";
import { addCustomer } from "../features/customerSlice";
import { v4 as uuid } from "uuid";

function ReservationCard({ reservationName, index }) {
  const dispatch = useDispatch();
  return (
    <div
      onClick={() => {
        dispatch(removeReservation(index));
        dispatch(
          addCustomer({
            id: uuid(),
            name: reservationName,
            food: [],
          })
        );
      }}
    >
      <div className="reservation-card-container">{reservationName}</div>
    </div>
  );
}

export default ReservationCard;
