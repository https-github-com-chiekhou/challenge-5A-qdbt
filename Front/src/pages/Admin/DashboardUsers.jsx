// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import SideBar from "../../components/SideBar";

const DashboardUsers = () => {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchDataUsers = async () => {
      try {
        const response = await fetch("http://localhost:8888/api/users");
        const jsonData = await response.json();

        // Vérifiez si jsonData est un objet avec hydra:member
        if (jsonData && jsonData["hydra:member"]) {
          setUsers(jsonData["hydra:member"]);
        } else {
          console.error(
            "Les données de l'API ne sont pas au format attendu:",
            jsonData
          );
        }
      } catch (error) {
        console.error("Erreur lors de la récupération des données:", error);
      }
    };

    fetchDataUsers();
  }, []);

  const fetchDeleteUser = async (userId) => {
    try {
      const response = await fetch(`http://localhost:8888${userId}`, {
        method: "DELETE",
      });

      if (response.ok) {
        const updatedUsers = users.filter((user) => user["@id"] !== userId);
        setUsers(updatedUsers);
      } else {
        console.error(`Échec de la suppression de l'utilisateur .`, error);
      }
    } catch (error) {
      console.error("Erreur lors de la suppression de l'utilisateur:", error);
    }
  };

  const fetchUpdateFormUser = async (userId) => {
    try {
      const response = await fetch(`http://localhost:8888/api/users`);
      const jsonData = await response.json();

      // Vérifiez si jsonData est un objet avec les données de l'user
      if (jsonData && jsonData["hydra:member"]) {
        setUsers(jsonData["hydra:member"]);
        const id = userId.split("/").pop();
        navigate(`/admin/users/update/${id}`);
      } else {
        console.error(
          "Les données de l'API ne sont pas au format attendu:",
          jsonData
        );
      }
    } catch (error) {
      console.error("Erreur lors de la récupération des données:", error);
    }
  };

  return (
    <>
      <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
        Utilisateurs
      </h2>
      <div className="flex flex-row flex-1">
        <SideBar />

        <div className="flex flex-1 mb-5 ">
          <table className="p-4 sm:ml-64 rounded-md border border-gray-300 mt-5">
            <thead className="rounded-md bg-gray-100">
              <tr>
                <th className="px-6 py-4 text-sm font-normal uppercase text-gray-500">
                  Nom
                </th>
                <th className="px-6 py-4 text-sm font-normal uppercase text-gray-500">
                  Prenom
                </th>

                <th className="px-6 py-4 text-sm font-normal uppercase text-gray-500">
                  IsValid
                </th>

                <th className="px-6 py-4 text-sm font-normal uppercase text-gray-500">
                  Email
                </th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr className="border-t border-gray-300" key={user["@id"]}>
                  <td className="px-6 py-4 text-sm">
                    <strong className="text-gray-900"> {user.nom}</strong>
                  </td>
                  <td className="px-6 py-4 text-sm">
                    <strong className="text-gray-900">{user.prenom}</strong>
                  </td>

                  <td className="px-6 py-4 text-sm">
                    <strong className="text-gray-900">
                      {String(user.isValid)}
                    </strong>
                  </td>

                  <td className="px-6 py-4 text-sm">
                    <strong className="text-gray-900"> {user.email} </strong>
                  </td>

                  <td className="px-6 py-4">
                    <div className="flex items-center justify-end gap-2">
                      <button
                        onClick={() => fetchUpdateFormUser(user["@id"])}
                        className="rounded-md border border-transparent bg-indigo-600 py-1 px-3 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                      >
                        Update
                      </button>
                      <button
                        onClick={() => fetchDeleteUser(user["@id"])}
                        className="rounded-md border border-transparent bg-red-600 py-1 px-3 text-sm font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
                      >
                        Supprimer
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default DashboardUsers;
