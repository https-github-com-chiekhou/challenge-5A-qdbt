// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import Header1 from "../../components/Header1";
import { useParams } from "react-router-dom";
// import SideBar from '../../components/SideBar'

const PlanningSalarie = () => {
  const { id } = useParams();
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

  return (
    <div>
      {salarie ? (
        <>
          <Header1 />

          <h2 className="mt-10 text-center text-3xl font-bold leading-9 tracking-tight text-gray-900">
            Planning de {salarie.prenom}-{salarie.nom}
          </h2>

          <table className="w-full rounded-md border border-gray-300 bg-white float-right">
            <thead className="rounded-md bg-gray-100">
              <tr>
                <th className="px-6 py-4 text-left text-sm font-normal uppercase text-gray-500">
                  Jour de travail
                </th>
                <th className="px-6 py-4 text-left text-sm font-normal uppercase text-gray-500">
                  Heure Arrivée
                </th>
                <th className="px-6 py-4 text-left text-sm font-normal uppercase text-gray-500">
                  Heure Départ
                </th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {creneaux.map((creneau) => (
                <tr className="border-t border-gray-300" key={creneau["@id"]}>
                  <td className="px-6 py-4 text-sm">{creneau.day}</td>

                  <td className="px-6 py-4">{creneau.startTime}</td>

                  <td className="px-6 py-4">{creneau.endTime}</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center justify-end gap-2">
                      <button className="rounded-md border border-transparent bg-indigo-600 py-1 px-3 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                        Supprimer
                      </button>
                      <form method="POST" action="" onSubmit="">
                        <input type="hidden" name="" value="" />
                        <button className="rounded-md border border-transparent bg-red-600 py-1 px-3 text-sm font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2">
                          Update
                        </button>
                      </form>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      ) : null}
    </div>
  );
};

export default PlanningSalarie;
