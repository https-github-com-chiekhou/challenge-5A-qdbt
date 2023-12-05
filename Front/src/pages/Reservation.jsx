import Header1 from "../components/Header1";
import Footer from '../components/Footer'
import {Button, Img, Input, List, Text} from "../components";
import Calendar from 'react-calendar';
import React, { useState } from 'react';


const Reservation = () => {

    //TODO: récupérer le prestataire choisi avec son calendrier et donc ses disponibilités
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [selectedTimeSlot, setSelectedTimeSlot] = useState(null);

    const handleDateChange = (date) => {
        setSelectedDate(date);
        // Réinitialiser le créneau horaire lors du changement de date
        setSelectedTimeSlot(null);
    };

    const handleTimeSlotSelect = (value) => {
        setSelectedTimeSlot(value);
    };

    return (
        <>
            <Header1/>
            <h2 className="text-black-900 text-center font-bold">Calendrier de disponibilité</h2>
            <Calendar
                onChange={handleDateChange}
                value={selectedDate}
                selectRange={false}
                select={selectedDate}
                tileContent={({ date, view }) =>
                    view === 'month' && date.getDate() === selectedDate.getDate() ? (
                        <div className="availability-indicator">Disponible</div>
                    ) : null
                }
                onClickDay={(value) => handleDateChange(value)}
                className="text-black-900"
            />
            {selectedTimeSlot && (
                <div>
                    <h3>Créneau horaire sélectionné :</h3>
                    <p>{selectedTimeSlot}</p>
                </div>
            )}
            <Footer/>
        </>
    )
}

export default Reservation;