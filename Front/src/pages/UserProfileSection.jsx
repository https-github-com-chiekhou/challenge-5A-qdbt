import React from 'react';

const UserProfileSection = ({ title, icon }) => {
  return (
    <div className="bg-black p-4 rounded-md shadow-md mb-4 md:mb-0">
      <div className="flex items-center mb-2">
        <span className="text-2xl mr-2">{/* Ajoute ici un composant d'icône avec la classe Tailwind pour l'icône */}</span>
        <h2 className="text-gray-700 text-xl font-semibold">{title}</h2>
      </div>
      {/* Ajoute ici le contenu spécifique à chaque section */}
    </div>

  );
};

export default UserProfileSection;