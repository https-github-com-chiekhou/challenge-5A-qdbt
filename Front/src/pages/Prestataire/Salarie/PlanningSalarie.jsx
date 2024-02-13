// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import SideBar from "../../../components/SideBar";

const PlanningSalarie = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [salarie, setSalarie] = useState(null);
  const [creneaux, setCreneau] = useState([]);

  useEffect(() => {
    const fetchSalarieDetails = async () => {
      try {
        const response = await fetch(
          `http://localhost:8888/api/salaries/${id}`
        );
        const salarieData = await response.json();

        if (response.ok) {
          setSalarie(salarieData);
        } else {
          console.error(
            "Erreur lors de la récupération des détails du salarié:",
            salarieData
          );
        }
      } catch (error) {
        console.error(
          "Erreur lors de la récupération des détails du salarié:",
          error
        );
      }
    };

    const fetchCreneauxDetails = async () => {
      try {
        const creneauxIds = salarie ? salarie.creneaux : [];

        const creneauDetailsPromises = creneauxIds.map(async (creneauId) => {
          const response = await fetch(`http://localhost:8888${creneauId}`);

          return response.json();
        });

        // Wait for all promises to resolve
        const creneauDetails = await Promise.all(creneauDetailsPromises);

        setCreneau(creneauDetails);
      } catch (error) {
        console.error(
          "Erreur lors de la récupération des détails des creneaux:",
          error
        );
      }
    };

    fetchSalarieDetails();
    fetchCreneauxDetails();
  }, [id, salarie]);

  const fetchDeleteCreneau = async (creneauId) => {
    try {
      const response = await fetch(`http://localhost:8888${creneauId}`, {
        method: "DELETE",
      });

      if (response.ok) {
        const updatedCreneau = creneaux.filter(
          (creneau) => creneau["@id"] !== creneauId
        );
        setCreneau(updatedCreneau);
      } else {
        console.error(
          `Échec de la suppression du créneau .`,
          response.statusText
        );
      }
    } catch (error) {
      console.error("Erreur lors de la suppression du créneau :", error);
    }
  };

  const fetchUpdateFormCreneau = async (creneauId) => {
    try {
      const response = await fetch(`http://localhost:8888/api/creneaus`);
      const jsonData = await response.json();

      // Vérifiez si jsonData est un objet avec les données de l'user
      if (jsonData && jsonData["hydra:member"]) {
        setCreneau(jsonData["hydra:member"]);
        const id = creneauId.split("/").pop();
        navigate(`/prestataire/planning-salarie/update/${id}`);
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
    <div>
      {salarie ? (
        <>
          <h2 className="mt-10 text-center text-3xl font-bold leading-9 tracking-tight text-gray-900">
            Planning de {salarie.prenom}-{salarie.nom}
          </h2>

          <div className="flex flex-row flex-1">
            <SideBar />

            <div className="flex flex-1 mb-5 ml-10">
              <table className="mt-10 w-full rounded-md border border-gray-300 bg-white ">
                <thead className="rounded-md bg-gray-100">
                  <tr>
                    <th className="px-6 py-4 text-sm font-normal uppercase text-gray-500">
                      Jour de travail
                    </th>
                    <th className="px-6 py-4 text-sm font-normal uppercase text-gray-500">
                      Heure Arrivée
                    </th>
                    <th className="px-6 py-4 text-sm font-normal uppercase text-gray-500">
                      Heure Départ
                    </th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {creneaux.map((creneau) => (
                    <tr
                      className="border-t border-gray-300"
                      key={creneau["@id"]}
                    >
                      <td className="px-6 py-4 text-sm">{creneau.day}</td>

                      <td className="px-6 py-4 text-sm">
                        {new Date(creneau.startTime).toLocaleTimeString([], {
                          hour: "2-digit",
                          minute: "2-digit",
                        })}
                      </td>

                      <td className="px-6 py-4 text-sm">
                        {" "}
                        {new Date(creneau.endTime).toLocaleTimeString([], {
                          hour: "2-digit",
                          minute: "2-digit",
                        })}
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center justify-end gap-2">
                          <button
                            onClick={() =>
                              fetchUpdateFormCreneau(creneau["@id"])
                            }
                            className="rounded-md border border-transparent bg-indigo-600 py-1 px-3 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                          >
                            Update
                          </button>
                          <button
                            onClick={() => fetchDeleteCreneau(creneau["@id"])}
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
      ) : null}
    </div>
  );
};

export default PlanningSalarie;
