// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import SideBar from "../../../components/SideBar";

const ListEtablissement = () => {
  const [etablissements, setEtablissements] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "http://localhost:8888/api/etablissements"
        );
        const jsonData = await response.json();

        // Vérifiez si jsonData est un objet avec hydra:member
        if (jsonData && jsonData["hydra:member"]) {
          setEtablissements(jsonData["hydra:member"]);
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

  const fetchDataAndRedirect = async (etablissementId) => {
    try {
      const response = await fetch(`http://localhost:8888/api/etablissements/`);
      const jsonData = await response.json();

      // Vérifiez si jsonData est un objet avec les données du salarié
      if (jsonData && jsonData["hydra:member"]) {
        setEtablissements(jsonData["hydra:member"]);

        const id = etablissementId.split("/").pop();
        navigate(`/prestataire/etablissement/${id}`);
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

  const fetchDeleteEtablissement = async (etablissementId) => {
    try {
      const response = await fetch(`http://localhost:8888${etablissementId}`, {
        method: "DELETE",
      });

      if (response.ok) {
        const updateEtablissements = etablissements.filter(
          (etablissement) => etablissement["@id"] !== etablissementId
        );
        setEtablissements(updateEtablissements);
      } else {
        console.error(`Échec de la suppression de l'etablissement .`, error);
      }
    } catch (error) {
      console.error("Erreur lors de la suppression de l'etablissement:", error);
    }
  };

  return (
    <>
      <h2 className="mt-10 mb-10 text-center text-3xl font-bold leading-9 tracking-tight text-gray-900">
        Liste Établissement
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
                  Adresse
                </th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {etablissements.map((etablissement) => (
                <tr
                  className="border-t border-gray-300"
                  key={etablissement["@id"]}
                >
                  <td className="text-sm">
                    <strong className="text-gray-900">
                      {" "}
                      {etablissement.name}
                    </strong>
                  </td>
                  <td className="text-sm">
                    <strong className="text-gray-900">
                      {" "}
                      {etablissement.adresse}
                    </strong>
                  </td>

                  <td className="px-6 py-4">
                    <div className="flex items-center justify-end gap-2">
                      <Link to={`/prestataire/etablissement/add`}>
                        <button className="rounded-md border border-transparent bg-indigo-600 py-1 px-3 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                          Ajouter
                        </button>
                      </Link>
                      <button
                        onClick={() =>
                          fetchDataAndRedirect(etablissement["@id"])
                        }
                        className="rounded-md border border-transparent bg-indigo-600 py-1 px-3 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                      >
                        Services
                      </button>
                      <button
                        onClick={() =>
                          fetchDeleteEtablissement(etablissement["@id"])
                        }
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

export default ListEtablissement;
