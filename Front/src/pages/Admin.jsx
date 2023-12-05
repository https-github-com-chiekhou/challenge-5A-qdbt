import React, { useState } from 'react';
import UserProfileTabs from './UserProfileTabs';
import Footer from "../components/Footer";
import Header1 from "../components/Header1";
import GestionAdherents from "./gestionAdherents";
// import { Link } from 'react-router-dom';
import { Link, BrowserRouter as Router, Route } from 'react-router-dom';

const exampleProfileImage = 'https://via.placeholder.com/150';
const generateFakeEnterprises = () => {
  return [
    { id: 1, nom: 'Entreprise A', createur: 'John Doe', mail: 'john@example.com', adresse: '123 Rue ABC', telephone: '123-456-7890', site: 'http://entreprisea.com', valide: true },
    { id: 2, nom: 'Entreprise B', createur: 'Jane Doe', mail: 'jane@example.com', adresse: '456 Rue XYZ', telephone: '987-654-3210', site: 'http://entrepriseb.com', valide: false },
    { id: 3, nom: 'Entreprise C', createur: 'Bob Smith', mail: 'bob@example.com', adresse: '789 Rue LMN', telephone: '555-123-4567', site: 'http://entreprisec.com', valide: true },
  ];
};

const Admin = () => {
  
const [entreprises, setEntreprises] = useState(generateFakeEnterprises());
return (
    <>
      <div className="bg-white min-h-screen p-4 text-black">
        <Header1 className="bg-white-A700 flex gap-2 h-20 md:h-auto items-center justify-between md:px-5 px-[120px] py-[19px] w-full" />
        <h1 className="text-gray-700 text-3xl font-semibold mb-4">Administration</h1>
        <a href="http://localhost:3000/User" className="text-sm font-semibold leading-6 text-gray-900">
          -Utilisateur
        </a>

        {/* Tableau des Entreprises */}
        <div className="text-gray-700 bg-white p-4 rounded-md shadow-md mb-4">
          <h2 className="text-xl font-semibold mb-2">Liste des Entreprises</h2>
          <table className="min-w-full border border-gray-200">
            <thead>
              <tr>
                <th className="border p-2"><input type="checkbox" /></th>
                <th className="border p-2">ID</th>
                <th className="border p-2">Nom de l'Entreprise</th>
                <th className="border p-2">Createur</th>
                <th className="border p-2">Mail</th>
                <th className="border p-2">Adresse</th>
                <th className="border p-2">Téléphone</th>
                <th className="border p-2">Site</th>
                <th className="border p-2">Valide</th>
                <th className="border p-2">Link</th>
              </tr>
            </thead>
            <tbody>
              {entreprises.map((entreprise) => (
                <tr key={entreprise.id}>
                  <td className="border p-2">
                    {/* Ajoutez ici la logique pour la case à cocher */}
                    <input type="checkbox" />
                  </td>
                  <td className="border p-2">{entreprise.id}</td>
                  <td className="border p-2">{entreprise.nom}</td>
                  <td className="border p-2">{entreprise.createur}</td>
                  <td className="border p-2">{entreprise.mail}</td>
                  <td className="border p-2">{entreprise.adresse}</td>
                  <td className="border p-2">{entreprise.telephone}</td>
                  <td className="border p-2">{entreprise.site}</td>
                  <td className="border p-2">{entreprise.valide ? 'Oui' : 'Non'}</td>
                  <td className="border p-2">
                  {/* Ajoutez le bouton avec le lien vers la page d'administration spécifique */}
                  <Link to={`/admin/${entreprise.id}`}>
                    <button className=" text-gray-700 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                      Gérer
                    </button>
                  </Link>
                </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <Footer className="bg-white-A700 flex gap-2 items-center justify-center md:px-5 px-[120px] py-20 w-full" />
      </div>
    </>
  );
};

export default Admin;
