import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

const generateFakeEnterprises = () => {
  return [
    { id: 1, nom: 'Entreprise A', createur: 'John Doe', mail: 'john@example.com', adresse: '123 Rue ABC', telephone: '123-456-7890', site: 'http://entreprisea.com', valide: true },
    { id: 2, nom: 'Entreprise B', createur: 'Jane Doe', mail: 'jane@example.com', adresse: '456 Rue XYZ', telephone: '987-654-3210', site: 'http://entrepriseb.com', valide: false },
    { id: 3, nom: 'Entreprise C', createur: 'Bob Smith', mail: 'bob@example.com', adresse: '789 Rue LMN', telephone: '555-123-4567', site: 'http://entreprisec.com', valide: true },
  ];
};

const GestionAdherents = ({ entreprises }) => {
  const { entrepriseId } = useParams();
  const [entreprise, setEntreprise] = useState(null);

  // Effect pour récupérer les informations de l'entreprise spécifique
  useEffect(() => {
    if(!entreprise) entreprises = generateFakeEnterprises()
    const selectedEntreprise = entreprises.find((e) => e.id === parseInt(1, 10));
    setEntreprise(selectedEntreprise);
  }, [entreprises, entrepriseId]);

  if (!entreprise) {
    return <div>Chargement...</div>;
  }

  return (
    <div className="bg-gray-100 min-h-screen text-black p-4">
      <h2 className="text-gray-700 text-3xl font-semibold mb-4">{entreprise.nom}</h2>

      {/* Panneau avec les statistiques */}
      <div className="bg-white rounded-md shadow-md p-4 mb-4">
        <h3 className="text-gray-700 text-xl font-semibold mb-2">Statistiques de l'entreprise</h3>
        {/* Ajoutez vos statistiques ici */}
      </div>

      {/* Liste des prestataires */}
      <div className="bg-white rounded-md shadow-md p-4 mb-4">
        <h3 className="text-gray-700 text-xl font-semibold mb-2">Liste des Prestataires</h3>
        {/* Ajoutez la liste des prestataires ici */}
      </div>

      {/* Informations de l'entreprise avec le bouton Éditer */}
      <div className="bg-white rounded-md shadow-md p-4 mb-4">
        <h3 className="text-gray-700 text-xl font-semibold mb-2">Informations de l'entreprise</h3>
        <ul>
          <li className="text-gray-700">ID: {entreprise.id}</li>
          <li className="text-gray-700">Créateur: {entreprise.createur}</li>
          <li className="text-gray-700">Mail: {entreprise.mail}</li>
          <li className="text-gray-700">Adresse: {entreprise.adresse}</li>
          <li className="text-gray-700">Téléphone: {entreprise.telephone}</li>
          <li className="text-gray-700">Site: {entreprise.site}</li>
          <li className="text-gray-700">Validé: {entreprise.valide ? 'Oui' : 'Non'}</li>
        </ul>
        <Link to={`/admin/${entreprise.id}/editer`}>
          <button className="text-gray-700 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2">
            Éditer
          </button>
        </Link>
      </div>
      <Link to={`/admin`}>
          <button className="text-gray-700 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2">
            retour
          </button>
        </Link>
    </div>
  );
};

export default GestionAdherents;