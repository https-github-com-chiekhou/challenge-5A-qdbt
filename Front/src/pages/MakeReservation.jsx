import Footer from "../components/Footer/index.jsx";
import Header1 from "../components/Header1/index.jsx";
import Select from "react-select";
import {useState} from "react";
import Calendar from "react-calendar";

const MakeReservation = () => {
    const [users, setUsers] = useState();
    const [prestataire, setPrestataire] = useState();

    const currentDate = new Date();
    const minHour = 9;
    const maxHour = 20;

    const [selectedDate, setSelectedDate] = useState(new Date());
    const [selectedTimeSlot, setSelectedTimeSlot] = useState(null);

    const fetchPrestataireData = () => {
        fetch(`https://localhost:8888/api/salaries/${id}`)
    }

    const handleDateChange = (date) => {
        setSelectedDate(date);
        setSelectedTimeSlot(null);
    };


    // Simuler les créneaux horaires du prestataire
    //TODO recuperer le prestataire et ses creneaux pour le timeslot
    const generateTimeSlots = (minHour, maxHour, intervalMinutes) => {
        const timeSlots = [];
        let currentTime = new Date();
        currentTime.setHours(minHour, 0, 0);

        while (currentTime.getHours() < maxHour) {
            timeSlots.push({
                label: `${currentTime.getHours()}:${(currentTime.getMinutes() < 10 ? '0' : '') + currentTime.getMinutes()}`,
                value: currentTime.toISOString(),
            });

            currentTime.setMinutes(currentTime.getMinutes() + intervalMinutes);
        }
        return timeSlots;
    };
    const timeSlots = generateTimeSlots(minHour, maxHour, 60);

    const handleTimeSlotChange = (selectedOption) => {
        setSelectedTimeSlot(selectedOption);
    };
    return (
        <>
            <h2 className="text-black-900 text-center font-bold">Calendrier de disponibilité</h2>
            <Calendar
                onChange={handleDateChange}
                minDate={currentDate}
                value={selectedDate}
                selectRange={false}
                select={selectedDate}
                className="text-black-900"
            />
            <h2>Sélectionnez un créneau horaire :</h2>
            <Select
                options={timeSlots}
                value={selectedTimeSlot}
                onChange={handleTimeSlotChange}
                placeholder="Choisissez un créneau horaire"
                className="text-black-900"
            />
            {selectedTimeSlot && (
                <div>
                    <h3>Créneau horaire sélectionné :</h3>
                    <p>{selectedTimeSlot.label}</p>
                </div>
            )}
            <div className="block">
                {/*<textarea placeholder="Placer un commentaire si vous voulez"></textarea>*/}
                <button className="padi">Prendre un rendez-vous</button>
            </div>
        </>
    )
}

export default MakeReservation;