import React, { useState } from "react";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const CompagnyViewPage = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState('');
  const [reservedSlots, setReservedSlots] = useState([]);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleTimeSelection = (time) => {
    setSelectedTime(time);
  };

  const handleReservation = () => {
    if (selectedTime && !reservedSlots.includes(selectedTime)) {
      setReservedSlots([...reservedSlots, selectedTime]);
      setSelectedTime('');
    }
  };

  // Générer une liste d'heures pour la journée sélectionnée
  const generateTimeSlots = () => {
    const timeSlots = [];
    for (let hour = 8; hour <= 20; hour++) {
      timeSlots.push(`${hour}:00`);
    }
    return timeSlots;
  };

  // Formatage de la date et de l'heure sélectionnées
  const formatDateTime = () => {
    if (selectedTime) {
      return `Réservations pour le ${selectedDate.toLocaleDateString()} ${selectedTime}`;
    }
    return `Réservations pour le ${selectedDate.toLocaleDateString()}`;
  };
    
  return (
    <>
      <h1>Tableau de réservation</h1>
      <div className="calendar-container">
        <Calendar
          onChange={handleDateChange}
          value={selectedDate}
        />
      </div>
      <div className="reservation-details">
        <h2>{formatDateTime()}</h2>
      </div>
      <div className="time-slots">
        <h2>Choisissez une heure :</h2>
        <ul className="time-list">
          {generateTimeSlots().map((time) => (
            <li
              key={time}
              className={reservedSlots.includes(time) ? 'reserved' : (selectedTime === time ? 'selected' : '')}
              onClick={() => handleTimeSelection(time)}
            >
              {time}
            </li>
          ))}
        </ul>
        <button onClick={handleReservation}>Réserver</button>
      </div>
    </>
  );
};

export default CompagnyViewPage;
