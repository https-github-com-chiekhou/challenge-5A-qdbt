import React, { useEffect, useState } from "react";
import SideBar from "../../components/SideBar";

const Prestataire = () => {
  const [salaries, setSalaries] = useState([]);
  const [services, setServices] = useState([]);
  const [etablissements, setEtablissements] = useState([]);
  const [reservations, setReservations] = useState([]);

  useEffect(() => {
    const fetchDataSalaries = async () => {
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

    fetchDataSalaries();
  }, []);

  useEffect(() => {
    const fetchDataService = async () => {
      try {
        const response = await fetch("http://localhost:8888/api/services");
        const jsonData = await response.json();

        // Vérifiez si jsonData est un objet avec hydra:member
        if (jsonData && jsonData["hydra:member"]) {
          setServices(jsonData["hydra:member"]);
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

    fetchDataService();
  }, []);

  useEffect(() => {
    const fetchDataReservation = async () => {
      try {
        const response = await fetch("http://localhost:8888/api/reservations");
        const jsonData = await response.json();

        // Vérifiez si jsonData est un objet avec hydra:member
        if (jsonData && jsonData["hydra:member"]) {
          setReservations(jsonData["hydra:member"]);
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

    fetchDataReservation();
  }, []);

  useEffect(() => {
    const fetchDataEtablissements = async () => {
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

    fetchDataEtablissements();
  }, []);

  return (
    <>
      <section id="stats">
        <div className="container mx-auto px-3">
          <h2 className="text-4xl mt-10 mb-6 font-bold text-center">
            Statistics
          </h2>
          <p className="max-w-xs mx-auto text-center text-gray-400 md:max-w-md">
            Track how your links are performing across the web with our advanced
            statistics dashboard.
          </p>
        </div>
      </section>
      <div className="flex flex-row flex-1">
        <SideBar />

        <div className="flex flex-1 mb-5 ">
          <section id="features" className=" w-full bg-gray-100">
            <div className="relative container flex flex-col items-start px-6 mx-auto md:flex-row md:space-x-7">
              <div className="hidden absolute top-24 w-10/12 left-16 h-3 bg-cyan md:block"></div>

              <div className="absolute w-2 left-1/2 h-full -ml-1 bg-cyan md:hidden"></div>

              <div className="relative flex flex-col mt-24 p-6 space-y-6 bg-white rounded-lg md:mt-8 md:w-1/3">
                <div className="absolute -ml-10 left-1/2 -top-10 md:left-16">
                  <div className="flex items-center justify-center w-20 h-20 p-4 rounded-full bg-veryDarkViolet">
                    <img src="images/icon-brand-recognition.svg" alt="" />
                  </div>
                </div>
                <h5 className="pt-6 text-xl font-bold text-center capitalize md:text-left">
                  Reservations
                </h5>
                <p className="text-center text-gray-400 md:text-left">
                  {reservations.length}
                </p>
              </div>

              <div className="relative flex flex-col mt-24 p-6 space-y-6 bg-white rounded-lg md:mt-8 md:w-1/3">
                <div className="absolute -ml-10 left-1/2 -top-10 md:left-16">
                  <div className="flex items-center justify-center w-20 h-20 p-4 rounded-full bg-veryDarkViolet">
                    <img src="images/icon-detailed-records.svg" alt="" />
                  </div>
                </div>
                <h5 className="pt-6 text-xl font-bold text-center capitalize md:text-left">
                  Services
                </h5>
                <p className="text-center text-gray-400 md:text-left">
                  {services.length}
                </p>
              </div>

              <div className="relative flex flex-col mt-24 p-6 space-y-6 bg-white rounded-lg md:mt-8 md:w-1/3">
                <div className="absolute -ml-10 left-1/2 -top-10 md:left-16">
                  <div className="flex items-center justify-center w-20 h-20 p-4 rounded-full bg-veryDarkViolet">
                    <img src="images/icon-fully-customizable.svg" alt="" />
                  </div>
                </div>
                <h5 className="pt-6 text-xl font-bold text-center capitalize md:text-left">
                  Etablissements
                </h5>
                <p className="text-center text-gray-400 md:text-left">
                  {etablissements.length}
                </p>
              </div>

              <div className="relative flex flex-col mt-24 p-6 space-y-6 bg-white rounded-lg md:mt-8 md:w-1/3">
                <div className="absolute -ml-10 left-1/2 -top-10 md:left-16">
                  <div className="flex items-center justify-center w-20 h-20 p-4 rounded-full bg-veryDarkViolet">
                    <img src="images/icon-fully-customizable.svg" alt="" />
                  </div>
                </div>
                <h5 className="pt-6 text-xl font-bold text-center capitalize md:text-left">
                  Salariés
                </h5>
                <p className="text-center text-gray-400 md:text-left">
                  {salaries.length}
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default Prestataire;
