import React from 'react'
import { useDispatch } from 'react-redux'
import { removeReservation } from '../features/reservationSlice'

function ReservationCard({reservationName, index}) {

    const dispatch = useDispatch()
    return (
        <div onClick={()=> dispatch(removeReservation(index))} >
              <div className="reservation-card-container">{reservationName}</div>

        </div>
    )
}

export default ReservationCard
