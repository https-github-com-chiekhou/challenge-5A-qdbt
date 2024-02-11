import logo from "../../assets/logo/logo.png";
import { ToastContainer, toast } from "react-toastify";
import React, { useState } from "react";
import "react-toastify/dist/ReactToastify.css";

const FormRegisterPrestaire = () => {
  const [formRegisterPrestataire, setFormRegisterPrestataire] = useState({
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

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "roles") {
      // Si le champ est "roles", mettez la valeur dans un tableau
      setFormRegisterPrestataire({
        ...formRegisterPrestataire,
        roles: [value],
      });
    } else {
      setFormRegisterPrestataire({
        ...formRegisterPrestataire,
        [name]: value,
      });
    }
  };

  const handleSubmitRegister = async (e) => {
    e.preventDefault();

    try {
      const responseRegister = await fetch("http://localhost:8888/api/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          nom: formRegisterPrestataire.nom,
          prenom: formRegisterPrestataire.prenom,
          email: formRegisterPrestataire.email,
          telephone: formRegisterPrestataire.telephone,
          roles: formRegisterPrestataire.roles,
          password: formRegisterPrestataire.password,
          plainPassword: formRegisterPrestataire.plainPassword,
        }),
      });

      if (!responseRegister.ok) {
        console.error("Register creation failed:", responseRegister.statusText);
        return;
      }

      const userData = await responseRegister.json();
      const userId = userData["@id"];

      const responsePrestataire = await fetch(
        "http://localhost:8888/api/prestataires",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            nomEntreprise: formRegisterPrestataire.nomEntreprise,
            descriptionEntreprise:
              formRegisterPrestataire.descriptionEntreprise,
            contact: formRegisterPrestataire.contact,
            kbis: formRegisterPrestataire.kbis,
            user: userId,
          }),
        }
      );

      if (!responsePrestataire.ok) {
        console.error(
          "Register prestataire creation failed:",
          responsePrestataire.statusText
        );
        return;
      }

      toast.success(
        "Inscription réussie veuillez vérifier votre boîte mail pour confirmer votre inscription !",
        {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        }
      );

      console.log("Form submitted successfully!");
    } catch (error) {
      console.error("Error during form submission:", error);
    }
  };

  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img className="mx-auto h-10 w-auto" src={logo} alt="Your Company" />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Register
          </h2>
        </div>

        <div></div>
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" onSubmit={handleSubmitRegister}>
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
                  Confirmation Password
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
                Sign in
              </button>
            </div>
          </form>
          <ToastContainer />

          <p className="mt-10 text-center text-sm text-gray-500">
            You are a member?{" "}
            <a
              href="/login"
              className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
            >
              Login
            </a>
          </p>
        </div>
      </div>
    </>
  );
};

export default FormRegisterPrestaire;
