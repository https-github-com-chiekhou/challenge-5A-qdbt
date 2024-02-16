// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import SideBar from "../../../components/SideBar";

const Etablissement = () => {
  const [services, setServices] = useState([]);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Récupérer tous les services
        const response = await fetch("http://localhost:8888/api/services");
        const data = await response.json();

        // Filtrer les services associés à l'établissement spécifique
        const servicesOfEtablissement = data["hydra:member"].filter(
          (service) => service.etablissement === `/api/etablissements/${id}`
        );

        setServices(servicesOfEtablissement);
      } catch (error) {
        console.error("Erreur lors de la récupération des services:", error);
      }
    };

    fetchData();
  }, [id]);

  const fetchDeleteService = async (serviceId) => {
    try {
      const response = await fetch(`http://localhost:8888${serviceId}`, {
        method: "DELETE",
      });

      if (response.ok) {
        const updatedServices = services.filter(
          (service) => service["@id"] !== serviceId
        );
        setServices(updatedServices);
      } else {
        console.error(`Échec de la suppression du service .`, error);
      }
    } catch (error) {
      console.error("Erreur lors de la suppression du service :", error);
    }
  };

  const fetchUpdateService = async (serviceId) => {
    try {
      const response = await fetch(`http://localhost:8888/api/services`);
      const jsonData = await response.json();

      // Vérifiez si jsonData est un objet avec les données de l'user
      if (jsonData && jsonData["hydra:member"]) {
        setServices(jsonData["hydra:member"]);
        const id = serviceId.split("/").pop();
        navigate(`/prestataire/etablissement/update/service/${id}`);
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
      <h2 className="mt-10 mb-12 text-center text-3xl font-bold leading-9 tracking-tight text-gray-900">
        Services Établissement
      </h2>

      <div className="flex flex-row flex-1 mt-10">
        <SideBar />

        <div className="flex flex-1 mb-5  sm:ml-64">
          {services.length === 0 ? (
            <p>Aucun service disponible pour cet établissement.</p>
          ) : (
            <table className="w-full rounded-md border border-gray-300 float-right">
              <thead className="rounded-md bg-gray-100">
                <tr>
                  <th className="px-6 py-4 text-sm font-normal uppercase text-gray-500">
                    Nom
                  </th>
                  <th className="px-6 py-4 text-sm font-normal uppercase text-gray-500">
                    Description
                  </th>
                  <th className="px-6 py-4 text-sm font-normal uppercase text-gray-500">
                    Categorie
                  </th>
                  <th className="px-6 py-4 text-sm font-normal uppercase text-gray-500">
                    Tarif
                  </th>
                  <th></th>
                </tr>
              </thead>
              <tbody className="mt-0">
                {services.map((service) => (
                  <tr className="border-t border-gray-300" key={service["@id"]}>
                    <td className="text-sm px-6 py-4">
                      <strong className="text-gray-900"> {service.nom}</strong>
                    </td>
                    <td className="text-sm px-6 py-4">
                      <strong className="text-gray-900">
                        {service.description}
                      </strong>
                    </td>
                    <td className="text-sm px-6 py-4">
                      <strong className="text-gray-900">
                        {service.categorie}
                      </strong>
                    </td>
                    <td className="text-sm px-6 py-4">
                      <strong className="text-gray-900">{service.tarif}</strong>
                    </td>

                    <td className="px-6 py-4">
                      <div className="flex items-center justify-end gap-2">
                        <button
                          onClick={() => fetchUpdateService(service["@id"])}
                          className="rounded-md border border-transparent bg-indigo-600 py-1 px-3 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                        >
                          Update
                        </button>
                        <button
                          onClick={() => fetchDeleteService(service["@id"])}
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
          )}
        </div>
      </div>
    </>
  );
};

export default Etablissement;
