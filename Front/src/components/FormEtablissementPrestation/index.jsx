// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { getUserInfoFromToken } from "../../localStorage";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SideBar from "../SideBar";

const FormEtablissementPrestation = () => {
  const [formData, setFormData] = useState({
    name: "",
    adresse: "",
    nomService: "",
    tarif: "",
    categorie: "",
    description: "",
    prestataire: null,
    etablissement: null,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const user = await getUserInfoFromToken();

      const response = await fetch("http://localhost:8888/api/prestataires");
      const data = await response.json();

      console.log(data);
      // Filtrer les services associés à l'établissement spécifique
      const prestataireUser = data["hydra:member"].filter(
        (prestataire) => prestataire.user === `/api/users/${user.id}`
      );

      console.log(prestataireUser[0]["@id"]);

      const responseEtablissement = await fetch(
        "http://localhost:8888/api/etablissements",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: formData.name,
            adresse: formData.adresse,
            prestataire: prestataireUser[0]["@id"],
          }),
        }
      );

      if (!responseEtablissement.ok) {
        console.error(
          "Etablissement creation failed:",
          responseEtablissement.statusText
        );
        return;
      }

      const etablissementData = await responseEtablissement.json();
      const etablissementId = etablissementData["@id"];

      const serviceResponse = await fetch(
        "http://localhost:8888/api/services",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            tarif: formData.tarif,
            categorie: formData.categorie,
            nom: formData.nom,
            description: formData.description,
            prestataire: prestataireUser[0]["@id"],
            etablissement: etablissementId,
          }),
        }
      );

      toast.success("Votre établissement a été crée avec succès !", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });

      if (!serviceResponse.ok) {
        console.error("Planning creation failed:", serviceResponse.statusText);

        await fetch(
          `http://localhost:8888/api/etablissement/${etablissementId}`,
          {
            method: "DELETE",
          }
        );

        return;
      }

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
      <div className="flex flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full mt-10 sm:max-w-sm">
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Établissement / Prestations
          </h2>
        </div>

        <div className="flex flex-row flex-1 ">
          <SideBar />
          <div className=" sm:mx-auto sm:w-full sm:max-w-sm">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                  <div className="sm:col-span-3">
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium leading-5 text-gray-700"
                    >
                      Name Entreprise
                    </label>
                    <div className="mt-2">
                      <input
                        type="text"
                        id="name"
                        name="name"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-3">
                    <label
                      htmlFor="adresse"
                      className="block text-sm font-medium leading-5 text-gray-700"
                    >
                      Adresse Entreprise
                    </label>
                    <div className="mt-2">
                      <input
                        type="text"
                        id="adresse"
                        name="adresse"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                </div>
              </div>

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
                  Ajouter
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
export default FormEtablissementPrestation;
