import React, { useState } from 'react';
import UserProfileTabs from './UserProfileTabs';
import Footer from "../components/Footer";
import Header1 from "../components/Header1";

const exampleProfileImage = 'https://via.placeholder.com/150';

const User = () => {
  const [activeTab, setActiveTab] = useState('historique');

  const handleTabClick = (tab) => {
    console.log("handle : ", tab);
    setActiveTab(tab);
  };

  const renderTabContent = (activeTab) => {
    console.log("tab : ", activeTab)
    // Fonction pour rendre le contenu spécifique à chaque onglet
    switch (activeTab) {
      case 'historique':
        return (
          <div className='text-gray-700'>
            <p>Contenu de l'onglet Historique</p>
            <ul>
              <li>Événement 1</li>
              <li>Événement 2</li>
              <li>Événement 3</li>
            </ul>
          </div>
        );
      case 'favoris':
        return (
          <div className='text-gray-700'>
            <p>Contenu de l'onglet Favoris</p>
            <ul>
              <li>Article favori 1</li>
              <li>Article favori 2</li>
              <li>Article favori 3</li>
            </ul>
          </div>
        );
      case 'manage address':
        return (
          <div className='text-gray-700'>
            <p>Contenu de l'onglet Manage Address</p>
            <ul>
              <li>Adresse 1</li>
              <li>Adresse 2</li>
              <li>Adresse 3</li>
            </ul>
          </div>
        );
      case 'notifications':
        return (
          <div className='text-gray-700'>
            <p>Contenu de l'onglet Notifications</p>
            <ul>
              <li>Notification 1</li>
              <li>Notification 2</li>
              <li>Notification 3</li>
            </ul>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    
    <div className="bg-white min-h-screen p-4 text-black">
      <Header1 className="bg-white-A700 flex gap-2 h-20 md:h-auto items-center justify-between md:px-5 px-[120px] py-[19px] w-full" />
      <h1 className="text-gray-700 text-3xl font-semibold mb-4">Profil Utilisateur</h1>
      <a href="http://localhost:3000/admin" className="text-sm font-semibold leading-6 text-gray-900">
            -Admin
          </a>

      {/* Profil Section (Centrée) */}
      <div className="bg-white p-4 rounded-md shadow-md mb-4">
        <div className="flex items-center mb-4 inline-flex">
          {/* Photo de profil */}
          <div className="rounded-full overflow-hidden mr-4">
            {/* Ajoute ici l'image du profil */}
            <img src={exampleProfileImage} alt="Profile" className="w-24 h-24 object-cover" />
          </div>

          {/* Nom et prénom de l'utilisateur */}
          <div>
            <h2 className="text-gray-700 text-xl font-semibold">John Doe</h2>
          </div>
        </div>

        {/* Informations de l'utilisateur */}
        <div>
          <p className="text-gray-700">Nom d'utilisateur : johndoe123</p>
          <p className="text-gray-700 mb-2">Adresse : 123 Rue de la Liberté</p>
          <p className="text-gray-700 mb-2">Ville : VilleVille</p>
          <p className="text-gray-700 mb-2">Description du Profil : Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vehicula urna eget convallis rhoncus.</p>
        </div>

        {/* Bouton éditable */}
        <button className="bg-blue-500 text-black py-2 px-4 rounded-md mt-4">Éditer le Profil</button>
      </div>

      {/* Onglets */}
      <div className="bg-white p-4 rounded-md shadow-md">
        <UserProfileTabs activeTab={activeTab} onTabClick={handleTabClick} />
        {/* Contenu spécifique à chaque onglet */}
        {renderTabContent(activeTab)}
      </div>
      <Footer className="bg-white-A700 flex gap-2 items-center justify-center md:px-5 px-[120px] py-20 w-full" />
    </div>
  );
};

export default User;