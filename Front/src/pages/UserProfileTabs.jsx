import React, { useState } from 'react';

const UserProfileTabs = ({ activeTab, onTabClick }) => {
  // const [activeTab, setActiveTab] = useState('historique'); // Définit l'onglet actif par défaut

  const handleTabClick = (tab) => {
    onTabClick(tab);
    // Ajoute ici la logique pour afficher le contenu spécifique à chaque onglet
  };

  return (
    <div className="flex space-x-4">
      <TabItem title="Historique" activeTab={activeTab} onTabClick={handleTabClick} />
      <TabItem title="Favoris" activeTab={activeTab} onTabClick={handleTabClick} />
      <TabItem title="Manage Address" activeTab={activeTab} onTabClick={handleTabClick} />
      <TabItem title="Notifications" activeTab={activeTab} onTabClick={handleTabClick} />
    </div>
  );
};

const TabItem = ({ title, activeTab, onTabClick }) => {
  const isActive = activeTab === title.toLowerCase();

  return (
    <div
      className={`cursor-pointer ${isActive ? 'text-blue-500 border-b-2 border-blue-500' : 'text-gray-500'}`}
      onClick={() => onTabClick(title.toLowerCase())}
    >
      {title}
    </div>
  );
};

const renderTabContent = () => {
  // Fonction pour rendre le contenu spécifique à chaque onglet
  switch (activeTab) {
    case 'historique':
      return (
        <div>
          <p>Contenu de l'onglet Historique (Faux)</p>
          <ul>
            <li>Événement 1</li>
            <li>Événement 2</li>
            <li>Événement 3</li>
          </ul>
        </div>
      );
    case 'favoris':
      return (
        <div>
          <p>Contenu de l'onglet Favoris (Faux)</p>
          <ul>
            <li>Article favori 1</li>
            <li>Article favori 2</li>
            <li>Article favori 3</li>
          </ul>
        </div>
      );
    case 'manage address':
      return (
        <div>
          <p>Contenu de l'onglet Manage Address (Faux)</p>
          <ul>
            <li>Adresse 1</li>
            <li>Adresse 2</li>
            <li>Adresse 3</li>
          </ul>
        </div>
      );
    case 'notifications':
      return (
        <div>
          <p>Contenu de l'onglet Notifications (Faux)</p>
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

export default UserProfileTabs;