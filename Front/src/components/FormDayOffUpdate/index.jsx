import { ToastContainer, toast } from "react-toastify";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import SideBar from "../SideBar";

const FormDayOffUpdate = () => {
  const { id } = useParams();
  const [formUpdateDay, setFormUpdateDay] = useState({
    dateStart: "",
    dateEnd: "",
    name: "",
  });

  const fetchDayData = async () => {
    try {
      const response = await fetch(`http://localhost:8888/api/day_offs/${id}`);
      const dayData = await response.json();

      setFormUpdateDay((prevState) => ({
        ...prevState,
        name: dayData.nom || prevState.nom,
        dateStart: dayData.dateStart || prevState.dateStart,
        dateEnd: dayData.dateEnd || prevState.dateEnd,
      }));
    } catch (error) {
      console.error("Error fetching dayoff data:", error);
    }
  };

  useEffect(() => {
    fetchDayData();
  }, [id]);

  const handleChange = (e) => {
    setFormUpdateDay({
      ...formUpdateDay,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmitUpdate = async (e) => {
    e.preventDefault();

    try {
      const responseUpdate = await fetch(
        `http://localhost:8888/api/day_offs/${id}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/merge-patch+json",
          },
          body: JSON.stringify(formUpdateDay),
        }
      );

      if (!responseUpdate.ok) {
        console.error(
          "Update dayOff creation failed:",
          responseUpdate.statusText
        );
        return;
      }

      toast.success("Mise à jour du jour de cong réussi", {
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
      <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900 ">
        Congé Salarié Update
      </h2>
      <div className="flex flex-row flex-1 bg-gray-100 ">
        <SideBar />
        <div className="flex flex-row flex-1">
          <div className="flex flex-1 mb-5 ml-10">
            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
              <form className="space-y-6" onSubmit={handleSubmitUpdate}>
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
                    Update
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

export default FormDayOffUpdate;
