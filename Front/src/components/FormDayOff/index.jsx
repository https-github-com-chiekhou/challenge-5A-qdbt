// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SideBar from "../SideBar";

const FormDayOff = () => {
  const [formData, setFormData] = useState({
    datePlanning: "",
    dateStart: "",
    dateEnd: "",
    name: "",
    salarie: null,
    dayOff: null,
  });

  const [salaries, setSalaries] = useState([]);

  useEffect(() => {
    const fetchSalaries = async () => {
      try {
        const response = await fetch("http://localhost:8888/api/salaries");
        const jsonData = await response.json();

        if (jsonData && jsonData["hydra:member"]) {
          setSalaries(jsonData["hydra:member"]);
        } else {
          console.error("Failed to fetch salaries:", jsonData);
        }
      } catch (error) {
        console.error("Error fetching salaries:", error);
      }
    };
    fetchSalaries();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const responseDay = await fetch("http://localhost:8888/api/day_offs", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!responseDay.ok) {
        console.error("DayOff creation failed:", responseDay.statusText);
        return;
      }

      const dayOffData = await responseDay.json();
      const dayOffId = dayOffData["@id"];

      // Requête pour créer le planning
      const planningResponse = await fetch(
        "http://localhost:8888/api/plannings",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            datePlanning: formData.datePlanning,
            salarie: formData.salarie,
            dayOff: dayOffId,
          }),
        }
      );

      if (!planningResponse.ok) {
        console.error("Planning creation failed:", planningResponse.statusText);

        await fetch(`http://localhost:8888/api/day_offs/${dayOffId}`, {
          method: "DELETE",
        });

        return;
      }
      toast.success("Jour de congés ajouter au planning !", {
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

  // eslint-disable-next-line no-unused-vars
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900 ">
        Congé Salarié
      </h2>
      <div className="flex flex-row flex-1 bg-gray-100 ">
        <SideBar />
        <div className="flex flex-row flex-1">
          <div className="flex flex-1 mb-5 ml-10">
            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div>
                  <div className="flex-1">
                    <label
                      htmlFor="datePlanning"
                      className="block text-sm font-medium leading-5 text-gray-700"
                    >
                      Date planning
                    </label>
                    <input
                      type="date"
                      id="datePlanning"
                      name="datePlanning"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div>
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Intitulé Congé
                    </label>
                  </div>
                  <div className="mt-2">
                    <input
                      id="name"
                      name="name"
                      type="text"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div>
                  <div className="flex-1">
                    <label
                      htmlFor="salarie_id"
                      className="block text-sm font-medium leading-5 text-gray-700"
                    >
                      Salarié
                    </label>
                    <select
                      id="salarie_id"
                      name="salarie"
                      className="block w-full border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                      onChange={handleChange}
                    >
                      <option value={null}>Choisir un salarie</option>
                      {salaries.map((salarie) => (
                        <option key={salarie["@id"]} value={salarie["@id"]}>
                          {salarie.nom} {salarie.prenom}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                  <div className="sm:col-span-3">
                    <label
                      htmlFor="dateStart"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      De
                    </label>
                    <div className="mt-2">
                      <input
                        type="date"
                        id="dateStart"
                        name="dateStart"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-3">
                    <label
                      htmlFor="dateEnd"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      À
                    </label>
                    <div className="mt-2">
                      <input
                        type="date"
                        id="dateEnd"
                        name="dateEnd"
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
                    Ajouter
                  </button>
                </div>
              </form>
              <ToastContainer />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default FormDayOff;
