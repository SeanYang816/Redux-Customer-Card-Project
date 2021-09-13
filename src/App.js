import "./App.css";
import { useSelector } from 'react-redux'
import ReservationCard from './components/ReservationCard'
import { useDispatch } from "react-redux";
import { addReservation } from "./features/reservationSlice";
import { useState } from "react";

function App() {

  const reservations = useSelector(state => state.reservations.value)
  const [reservationNameInput, setReservationNameInput] = useState("");

  const dispatch = useDispatch()

  const handleAddReservations = () => {
    if (!reservationNameInput) return;
    dispatch(addReservation(reservationNameInput))
    setReservationNameInput('')
  }

  //https://www.youtube.com/watch?v=jR4fagDcvrc&ab_channel=LaithHarb

  return (
    <div className="App">
      <div className="container">
        <div className="reservation-container">
          <div>
            <h5 className="reservation-header">Reservations</h5>
            <div className="reservation-cards-container">
              {reservations.map((reservationName, index) => {
                return <ReservationCard reservationName={reservationName} key={index} index={index}/>
              })}
            </div>
          </div>
          <div className="reservation-input-container">
            <input value={reservationNameInput} onChange={(e)=>setReservationNameInput(e.target.value)} />
            <button onClick={handleAddReservations}>Add</button>
          </div>
        </div>
        <div className="customer-food-container">
          <div className="customer-food-card-container">
            <p> </p>
            <div className="customer-foods-container">
              <div className="customer-food"></div>
              <div className="customer-food-input-container">
                <input/>
                <button>Add</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;