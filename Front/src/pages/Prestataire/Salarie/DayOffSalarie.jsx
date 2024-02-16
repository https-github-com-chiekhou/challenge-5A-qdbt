// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import SideBar from "../../../components/SideBar";

const DayOffSalarie = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [salarie, setSalarie] = useState(null);
  const [dayOffs, setDayOff] = useState([]);

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

    const fetchDayOffDetails = async () => {
      try {
        const dayOffIds = salarie ? salarie.dayOffs : [];

        const dayOffDetailsPromises = dayOffIds.map(async (dayOffId) => {
          const response = await fetch(`http://localhost:8888${dayOffId}`);

          return response.json();
        });

        // Wait for all promises to resolve
        const dayOffDetails = await Promise.all(dayOffDetailsPromises);

        setDayOff(dayOffDetails);
      } catch (error) {
        console.error(
          "Erreur lors de la récupération des détails des creneaux:",
          error
        );
      }
    };

    fetchSalarieDetails();
    fetchDayOffDetails();
  }, [id, salarie]);

  const fetchDeleteDayOff = async (dayOffId) => {
    try {
      const response = await fetch(`http://localhost:8888${dayOffId}`, {
        method: "DELETE",
      });

      if (response.ok) {
        const updatedDayOff = dayOffs.filter(
          (dayOff) => dayOff["@id"] !== dayOffId
        );
        setDayOff(updatedDayOff);
      } else {
        console.error(`Échec de la suppression de l'utilisateur .`, error);
      }
    } catch (error) {
      console.error("Erreur lors de la suppression de l'utilisateur:", error);
    }
  };

  const fetchUpdateFormDayOff = async (dayOffId) => {
    try {
      const response = await fetch(`http://localhost:8888/api/day_offs`);
      const jsonData = await response.json();

      // Vérifiez si jsonData est un objet avec les données de l'user
      if (jsonData && jsonData["hydra:member"]) {
        setDayOff(jsonData["hydra:member"]);
        const id = dayOffId.split("/").pop();
        navigate(`/prestataire/salarie/update/dayOff/${id}`);
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
            Jour de congé de {salarie.prenom}-{salarie.nom}
          </h2>

          <div className="flex flex-row flex-1">
            <SideBar />

            <div className="flex flex-1 mb-5 ml-10">
              <table className="mt-10 w-full rounded-md border border-gray-300 bg-white ">
                <thead className="rounded-md bg-gray-100">
                  <tr>
                    <th className="px-6 py-4 text-sm font-normal uppercase text-gray-500">
                      Intitulé
                    </th>
                    <th className="px-6 py-4 text-sm font-normal uppercase text-gray-500">
                      Du
                    </th>
                    <th className="px-6 py-4 text-sm font-normal uppercase text-gray-500">
                      Au
                    </th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {dayOffs.map((dayOff) => (
                    <tr
                      className="border-t border-gray-300"
                      key={dayOff["@id"]}
                    >
                      <td className="px-6 py-4 text-sm">{dayOff.name}</td>

                      <td className="px-6 py-4 m-0 text-sm">
                        {new Date(dayOff.dateStart).toLocaleDateString([], {
                          day: "2-digit",
                          month: "2-digit",
                          year: "numeric",
                        })}
                      </td>

                      <td className="px-6 py-4 text-sm">
                        {" "}
                        {new Date(dayOff.dateEnd).toLocaleDateString([], {
                          day: "2-digit",
                          month: "2-digit",
                          year: "numeric",
                        })}
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center justify-end gap-2">
                          <button
                            onClick={() => fetchUpdateFormDayOff(dayOff["@id"])}
                            className="rounded-md border border-transparent bg-indigo-600 py-1 px-3 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                          >
                            Update
                          </button>
                          <button
                            onClick={() => fetchDeleteDayOff(dayOff["@id"])}
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

export default DayOffSalarie;
