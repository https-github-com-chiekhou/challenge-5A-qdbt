import logo from "../../assets/logo/logo.png";
import { ToastContainer, toast } from "react-toastify";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import SideBar from "../SideBar";

const FormUserUpdate = () => {
  const { id } = useParams();
  const [formUpdateUser, setFormUpdateUser] = useState({
    nom: "",
    prenom: "",
    telephone: "",
    email: "",
    password: "",
    plainPassword: "",
  });

  const fetchUserData = async () => {
    try {
      const response = await fetch(`http://localhost:8888/api/users/${id}`);
      const userData = await response.json();

      setFormUpdateUser((prevState) => ({
        ...prevState,
        nom: userData.nom || prevState.nom,
        prenom: userData.prenom || prevState.prenom,
        telephone: userData.telephone || prevState.telephone,
        email: userData.email || prevState.email,
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
    setFormUpdateUser({
      ...formUpdateUser,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmitUpdate = async (e) => {
    e.preventDefault();

    try {
      const responseUpdate = await fetch(
        `http://localhost:8888/api/users/${id}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/merge-patch+json",
          },
          body: JSON.stringify(formUpdateUser),
        }
      );

      if (!responseUpdate.ok) {
        console.error(
          "Update user creation failed:",
          responseUpdate.statusText
        );
        return;
      }

      toast.success("Mise à jour du profil utilisateur réussi", {
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
        <div className="flex flex-row flex-1">
          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
              Update User
            </h2>
            <form className="space-y-6" onSubmit={handleSubmitUpdate}>
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
                      type="tel"
                      pattern="[0-9]{10}"
                      autoComplete="telephone"
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
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>

              <div>
                <div>
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
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div>
                <div>
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

export default FormUserUpdate;
