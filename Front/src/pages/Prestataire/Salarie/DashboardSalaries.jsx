// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import SideBar from "../../../components/SideBar";

const DashboardSalaries = () => {
  const [salaries, setSalaries] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:8888/api/salaries");
        const jsonData = await response.json();

        // Vérifiez si jsonData est un objet avec hydra:member
        if (jsonData && jsonData["hydra:member"]) {
          setSalaries(jsonData["hydra:member"]);
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

    fetchData();
  }, []);

  const fetchPlanningSalarie = async (salarieId) => {
    try {
      const response = await fetch(`http://localhost:8888/api/salaries/`);
      const jsonData = await response.json();

      // Vérifiez si jsonData est un objet avec les données du salarié
      if (jsonData && jsonData["hydra:member"]) {
        setSalaries(jsonData["hydra:member"]);

        const id = salarieId.split("/").pop();
        navigate(`/prestataire/planning-salarie/${id}`);
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

  const fetchDayOffSalarie = async (salarieId) => {
    try {
      const response = await fetch(`http://localhost:8888/api/salaries/`);
      const jsonData = await response.json();

      // Vérifiez si jsonData est un objet avec les données du salarié
      if (jsonData && jsonData["hydra:member"]) {
        setSalaries(jsonData["hydra:member"]);

        const id = salarieId.split("/").pop();
        navigate(`/prestataire/salarie/dayoff/${id}`);
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

  const fetchDeleteSalarie = async (salarieId) => {
    try {
      const response = await fetch(`http://localhost:8888${salarieId}`, {
        method: "DELETE",
      });

      if (response.ok) {
        const updatedSalarie = salaries.filter(
          (salarie) => salarie["@id"] !== salarieId
        );
        setSalaries(updatedSalarie);
      } else {
        console.error(`Échec de la suppression du salarié .`, error);
      }
    } catch (error) {
      console.error("Erreur lors de la suppression du salarié :", error);
    }
  };

  return (
    <>
      <h2 className="mt-10 mb-10 text-center text-3xl font-bold leading-9 tracking-tight text-gray-900">
        Salaries Team
      </h2>

      <div className="flex flex-row flex-1">
        <SideBar />

        <div className="flex flex-1 mb-5 sm:ml-64">
          <table className="w-full rounded-md border border-gray-300 float-right">
            <thead className="rounded-md bg-gray-100">
              <tr>
                <th className="px-6 py-4 text-sm font-normal uppercase text-gray-500">
                  Nom
                </th>
                <th className="px-6 py-4 text-sm font-normal uppercase text-gray-500">
                  Prenom
                </th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {salaries.map((salarie) => (
                <tr className="border-t border-gray-300" key={salarie["@id"]}>
                  <td className="text-sm">
                    <strong className="text-gray-900"> {salarie.nom}</strong>
                  </td>
                  <td className="text-sm">
                    <strong className="text-gray-900"> {salarie.prenom}</strong>
                  </td>

                  <td className="px-6 py-4">
                    <div className="flex items-center justify-end gap-2">
                      <button
                        onClick={() => fetchPlanningSalarie(salarie["@id"])}
                        className="rounded-md border border-transparent bg-indigo-600 py-1 px-3 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                      >
                        Planning
                      </button>
                      <button
                        onClick={() => fetchDayOffSalarie(salarie["@id"])}
                        className="rounded-md border border-transparent bg-indigo-600 py-1 px-3 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                      >
                        Congé
                      </button>
                      <button
                        onClick={() => fetchDeleteSalarie(salarie["@id"])}
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

export default DashboardSalaries;
