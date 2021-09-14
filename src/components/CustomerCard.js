import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { addFoodToCustomer } from "../features/customerSlice";

function CustomerCard({ id, name, food }) {
  const dispatch = useDispatch();
  const [customerInput, setCustomerInput] = useState("");

  return (
    <div className="customer-food-card-container">
      <p>{name}</p>
      <div className="customer-foods-container">
        <div className="customer-food">
          {food.map((food, index) => {
            return <p key={index}>{food}</p>;
          })}
        </div>
        <div className="customer-food-input-container">
          <input
            value={customerInput}
            onChange={(e) => setCustomerInput(e.target.value)}
          />
          <button
            onClick={() => {
              if (!customerInput) return;
              dispatch(
                addFoodToCustomer({
                  id,
                  food: customerInput,
                })
              );
              setCustomerInput("");
            }}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default CustomerCard;
