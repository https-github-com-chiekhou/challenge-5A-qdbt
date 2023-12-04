// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import Header1 from "../../components/Header1";
import { useNavigate } from "react-router-dom";
// import SideBar from '../../components/SideBar'

const DashboardSalaries = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:8888/api/salaries");
        const jsonData = await response.json();

        // Vérifiez si jsonData est un objet avec hydra:member
        if (jsonData && jsonData["hydra:member"]) {
          setData(jsonData["hydra:member"]);
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

  const fetchDataAndRedirect = async (salarieId) => {
    try {
      const response = await fetch(`http://localhost:8888/api/salaries/`);
      const jsonData = await response.json();

      // Vérifiez si jsonData est un objet avec les données du salarié
      if (jsonData && jsonData["hydra:member"]) {
        setData(jsonData["hydra:member"]);

        console.log(jsonData["hydra:member"]);

        // Redirigez l'utilisateur vers la page du salarié avec son ID
        navigate(`/prestataire/planning-salarie${salarieId}`);
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
      <Header1 />

      <h2 className="mt-10 text-center text-3xl font-bold leading-9 tracking-tight text-gray-900">
        Salaries Team
      </h2>

      <table className="w-full rounded-md border border-gray-300 bg-white float-right">
        <thead className="rounded-md bg-gray-100">
          <tr>
            <th className="px-6 py-4 text-left text-sm font-normal uppercase text-gray-500">
              Nom
            </th>
            <th className="px-6 py-4 text-left text-sm font-normal uppercase text-gray-500">
              Prenom
            </th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr className="border-t border-gray-300" key={item["@id"]}>
              <td className="px-6 py-4 text-sm">
                <strong className="text-gray-900"> {item.nom}</strong>
              </td>
              <td className="px-6 py-4 text-sm">
                <strong className="text-gray-900"> {item.prenom}</strong>
              </td>

              <td className="px-6 py-4">
                <div className="flex items-center justify-end gap-2">
                  <button
                    onClick={() => fetchDataAndRedirect(item["@id"])}
                    className="rounded-md border border-transparent bg-indigo-600 py-1 px-3 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  >
                    Planning
                  </button>
                  <form method="POST" action="" onSubmit="">
                    <input type="hidden" name="" value="" />
                    <button className="rounded-md border border-transparent bg-red-600 py-1 px-3 text-sm font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2">
                      Annuler
                    </button>
                  </form>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default DashboardSalaries;
