import logo from "../../assets/logo/logo.png";
import { ToastContainer, toast } from "react-toastify";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import SideBar from "../SideBar";

const FormUpdatePrestataire = () => {
  const { id } = useParams();
  const [formUpdatePrestataire, setFormUpdatePrestataire] = useState({
    nom: "",
    prenom: "",
    telephone: "",
    email: "",
    roles: [],
    password: "",
    plainPassword: "",
    nomEntreprise: "",
    descriptionEntreprise: "",
    contact: "",
    kbis: "",
    user: null,
  });

  const fetchUserData = async () => {
    try {
      const response = await fetch(`http://localhost:8888/api/users/${id}`);
      const userData = await response.json();

      setFormUpdatePrestataire((prevState) => ({
        ...prevState,
        nom: userData.nom || prevState.nom,
        prenom: userData.prenom || prevState.prenom,
        telephone: userData.telephone || prevState.telephone,
        email: userData.email || prevState.email,
        roles: userData.roles || prevState.roles,
        nomEntreprise: userData.nomEntreprise || prevState.nomEntreprise,
        descriptionEntreprise:
          userData.descriptionEntreprise || prevState.descriptionEntreprise,
        contact: userData.contact || prevState.contact,
        kbis: userData.kbis || prevState.kbis,
        password: userData.password || prevState.password,
        plainPassword: userData.plainPassword || prevState.plainPassword,
      }));
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  useEffect(() => {
    fetchUserData();
  }, [id]);

  const handleChange = (e) => {
    setFormUpdatePrestataire({
      ...formUpdatePrestataire,
      [e.target.name]: e.target.value,
    });
  };

  const handleUpdatePrestataire = async (e) => {
    e.preventDefault();

    try {
      const responseUpdate = await fetch(
        `http://localhost:8888/api/users/${id}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/merge-patch+json",
          },
          body: JSON.stringify(formUpdatePrestataire),
        }
      );

      if (!responseUpdate.ok) {
        console.error(
          "Update user creation failed:",
          responseUpdate.statusText
        );
        return;
      }

      toast.success("Mise à jour du profil prestataire réussi", {
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
      <div className="flex flex-row flex-1">
        <SideBar />
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <img
              className="mx-auto h-10 w-auto"
              src={logo}
              alt="Your Company"
            />
            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
              Update Prestataire
            </h2>
          </div>
          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form className="space-y-6" onSubmit={handleUpdatePrestataire}>
              <div className="flex-1">
                <label
                  htmlFor="roles"
                  className="block text-sm font-medium leading-5 text-gray-700"
                >
                  Rôle
                </label>
                <select
                  id="roles"
                  name="roles"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  onChange={handleChange}
                >
                  {" "}
                  <option value="">Choisir votre rôle</option>
                  <option value="ROLE_PRESTATAIRE">PRESTATAIRE</option>
                </select>
              </div>
              <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div className="sm:col-span-3">
                  <label
                    htmlFor="first-name"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Nom
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="nom"
                      id="nom"
                      autoComplete="given-name"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="sm:col-span-3">
                  <label
                    htmlFor="last-name"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Prenom
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="prenom"
                      id="prenom"
                      autoComplete="family-name"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>

              <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div className="sm:col-span-3">
                  <label
                    htmlFor="telephone"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Telephone
                  </label>
                  <div className="mt-2">
                    <input
                      id="telephone"
                      name="telephone"
                      type="telephone"
                      autoComplete="telephone"
                      required
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="sm:col-span-3">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Email
                  </label>
                  <div className="mt-2">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>

              <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div className="sm:col-span-3">
                  <label
                    htmlFor="nomEntreprise"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Entreprise
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="nomEntreprise"
                      id="nomEntreprise"
                      autoComplete="given-name"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="sm:col-span-3">
                  <label
                    htmlFor="kbis"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Kbis
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="kbis"
                      id="kbis"
                      autoComplete="family-name"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="contact"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Contact Entreprise
                  </label>
                </div>
                <div className="mt-2">
                  <input
                    id="contact"
                    name="contact"
                    type="contact"
                    autoComplete="current-contact"
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div>
                <div className="flex-1">
                  <label
                    htmlFor="descriptionEntreprise"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Description Entreprise
                  </label>
                  <textarea
                    id="descriptionEntreprise"
                    name="descriptionEntreprise"
                    placeholder=" Décrire l'entreprise ..."
                    className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    onChange={handleChange}
                  ></textarea>
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Password
                  </label>
                </div>
                <div className="mt-2">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="plainPassword"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Confirmation Update Password
                  </label>
                </div>
                <div className="mt-2">
                  <input
                    id="plainPassword"
                    name="plainPassword"
                    type="password"
                    autoComplete="current-password"
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    onChange={handleChange}
                  />
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
    </>
  );
};

export default FormUpdatePrestataire;
