import { ToastContainer, toast } from "react-toastify";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import SideBar from "../SideBar";

const FormUpdateService = () => {
  const { id } = useParams();
  const [formUpdateService, setFormUpdateService] = useState({
    nom: "",
    tarif: "",
    categorie: "",
    description: "",
  });

  const fetchServiceData = async () => {
    try {
      const response = await fetch(`http://localhost:8888/api/services/${id}`);
      const serviceData = await response.json();

      setFormUpdateService((prevState) => ({
        ...prevState,
        nom: serviceData.nom || prevState.nom,
        tarif: serviceData.tarif || prevState.tarif,
        categorie: serviceData.categorie || prevState.categorie,
        description: serviceData.description || prevState.description,
      }));
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  useEffect(() => {
    fetchServiceData();
  }, [id]);

  const handleChange = (e) => {
    setFormUpdateService({
      ...formUpdateService,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmitUpdate = async (e) => {
    e.preventDefault();

    try {
      const responseUpdate = await fetch(
        `http://localhost:8888/api/services/${id}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/merge-patch+json",
          },
          body: JSON.stringify(formUpdateService),
        }
      );

      if (!responseUpdate.ok) {
        console.error(
          "Update user creation failed:",
          responseUpdate.statusText
        );
        return;
      }

      toast.success("Mise à jour du service réussi", {
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
      <div className="flex flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="flex flex-row flex-1 ">
          <SideBar />
          <div className=" sm:mx-auto sm:w-full sm:max-w-sm">
            <h2 className="mt-5 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
              Update Service
            </h2>
            <form className="space-y-6" onSubmit={handleSubmitUpdate}>
              <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div className="sm:col-span-3">
                  <label
                    htmlFor="nom"
                    className="block text-sm font-medium leading-5 text-gray-700"
                  >
                    Nom Prestation
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      id="nom"
                      name="nom"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="sm:col-span-3">
                  <label
                    htmlFor="tarif"
                    className="block text-sm font-medium leading-5 text-gray-700"
                  >
                    Tarif
                  </label>
                  <div className="mt-2">
                    <input
                      type="number"
                      step="0.01"
                      id="tarif"
                      name="tarif"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>

              <div>
                <div className="flex-1">
                  <label
                    htmlFor="categorie"
                    className="block text-sm font-medium leading-5 text-gray-700"
                  >
                    Catégorie
                  </label>
                  <select
                    id="categorie"
                    name="categorie"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    onChange={handleChange}
                  >
                    <option value="Massage">Massage</option>
                    <option value="Soins">Soins</option>
                  </select>
                </div>
              </div>

              <div>
                <div className="flex-1">
                  <label
                    htmlFor="description"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Description
                  </label>
                  <textarea
                    id="description"
                    name="description"
                    className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    onChange={handleChange}
                    placeholder="Décrire la presatation"
                  ></textarea>
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Update Service
                </button>
              </div>
            </form>
            <ToastContainer />
          </div>
        </div>
      </div>
    </>
  );
};

export default FormUpdateService;
