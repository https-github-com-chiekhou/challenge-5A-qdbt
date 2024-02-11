import { ToastContainer, toast } from "react-toastify";
import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import SideBar from "../SideBar";

const FormPlanningUpdate = () => {
  const { id } = useParams();
  const [formUpdateCreneau, setFormUpdateCreneau] = useState({
    startTime: "",
    endTime: "",
    day: "",
  });

  const fetchCreneauData = async () => {
    try {
      const response = await fetch(`http://localhost:8888/api/creneaus/${id}`);
      const creneauData = await response.json();

      setFormUpdateCreneau((prevState) => ({
        ...prevState,
        day: creneauData.day || prevState.day,
        startTime: creneauData.startTime || prevState.startTime,
        endTime: creneauData.endTime || prevState.endTime,
      }));
    } catch (error) {
      console.error("Error fetching creneau data:", error);
    }
  };

  useEffect(() => {
    fetchCreneauData();
  }, [id]);

  const handleChange = (e) => {
    setFormUpdateCreneau({
      ...formUpdateCreneau,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmitUpdate = async (e) => {
    e.preventDefault();

    try {
      const responseUpdate = await fetch(
        `http://localhost:8888/api/creneaus/${id}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/merge-patch+json",
          },
          body: JSON.stringify(formUpdateCreneau),
        }
      );

      if (!responseUpdate.ok) {
        console.error(
          "Update creneaux creation failed:",
          responseUpdate.statusText
        );
        return;
      }

      toast.success("Mise à jour du jour des créneaux réussi", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });

      console.log("Form submitted successfully!");
    } catch (error) {
      console.error("Error during form submission:", error);
    }
  };

  return (
    <>
      <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
        Planning Salarié Update
      </h2>

      <div className="flex flex-row flex-1">
        <SideBar />
        <div className="flex flex-1 mb-5 ml-10">
          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form className="space-y-6" onSubmit={handleSubmitUpdate}>
              <div>
                <div className="flex-1">
                  <label
                    htmlFor="day"
                    className="block text-sm font-medium leading-5 text-gray-700"
                  >
                    Jour de la semaine
                  </label>
                  <select
                    id="day"
                    name="day"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    onChange={handleChange}
                  >
                    <option value="MONDAY">Lundi</option>
                    <option value="TUESDAY">Mardi</option>
                    <option value="WEDNESDAY">Mercredi</option>
                    <option value="THURSDAY">Jeudi</option>
                    <option value="FRIDAY">Vendredi</option>
                    <option value="SATURDAY">Samedi</option>
                    <option value="SUNDAY">Dimanche</option>
                  </select>
                </div>
              </div>

              <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div className="sm:col-span-3">
                  <label
                    htmlFor="startTime"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    De
                  </label>
                  <div className="mt-2">
                    <input
                      type="time"
                      id="startTime"
                      name="startTime"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="sm:col-span-3">
                  <label
                    htmlFor="endTime"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    À
                  </label>
                  <div className="mt-2">
                    <input
                      type="time"
                      id="endTime"
                      name="endTime"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>
              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Update
                </button>
              </div>
            </form>
            <ToastContainer />
          </div>
        </div>
        {/* <Link to={`/prestataire/salarie/list-salaries`}>
          <button className="text-gray-700 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2">
            Retour
          </button>
        </Link> */}
      </div>
    </>
  );
};

export default FormPlanningUpdate;
