import React, { useEffect, useState } from "react";
import { getUserInfoFromToken } from "../localStorage";
import { Link } from "react-router-dom";

const Profil = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [userRole, setUserRole] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const userInfo = await getUserInfoFromToken();

        if (userInfo && userInfo.id) {
          const response = await fetch(
            `http://localhost:8888/api/users/${userInfo.id}`
          );

          if (response.ok) {
            const userData = await response.json();
            setUser(userData);
            setUserRole(userData.roles[0]);
          } else {
            console.error(
              "Erreur lors de la récupération des détails de l'utilisateur connecté:",
              response.statusText
            );
            setError(`Erreur: ${response.statusText}`);
          }
        } else {
          console.error("userInfo ou userInfo.id est indéfini.");
          setError(
            "Erreur: Impossible de récupérer les détails de l'utilisateur."
          );
        }
      } catch (error) {
        console.error(
          "Erreur lors de la récupération des détails de l'utilisateur connecté:",
          error
        );
        setError(`Erreur: ${error.message}`);
      } finally {
        setLoading(false);
      }
    };

    fetchUserDetails();
  }, []);

  if (loading) {
    return <p>Chargement en cours...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  if (!user) {
    return <p>Aucun détail d'utilisateur trouvé.</p>;
  }

  return (
    <>
      <div className="bg-gray-100">
        <div className="container mx-auto py-8">
          <div className="grid grid-cols-4 sm:grid-cols-12 gap-6 px-4">
            <div className="col-span-4 sm:col-span-3">
              <div className="bg-white shadow rounded-lg p-6">
                <div className="flex flex-col items-center">
                  <img
                    src="https://randomuser.me/api/portraits/men/94.jpg"
                    className="w-32 h-32 bg-gray-300 rounded-full mb-4 shrink-0"
                  ></img>
                  <h1 className="text-xl font-bold">
                    {user.prenom} {user.nom}
                  </h1>
                  <p className="text-gray-700">Software Developer</p>
                  <div className="mt-6 flex flex-wrap gap-4 justify-center">
                    <a
                      href="#"
                      className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
                    >
                      Contact
                    </a>
                    <a
                      href="#"
                      className="bg-gray-300 hover:bg-gray-400 text-gray-700 py-2 px-4 rounded"
                    >
                      Resume
                    </a>
                  </div>
                </div>
                <div className="my-6 border-t border-gray-300">
                  <div className="flex flex-col">
                    <span className="text-gray-700 uppercase font-bold tracking-wider mb-2">
                      Informations Personnelles
                    </span>
                    <ul>
                      <li className="mb-2">Téléphone : {user.telephone} </li>
                      <li className="mb-2">Email : {user.email} </li>
                    </ul>
                  </div>
                </div>
                <div className="my-6 border-t border-gray-300">
                  <div className="flex flex-col">
                    <span className="text-gray-700 uppercase font-bold tracking-wider mb-2">
                      Dashboard
                    </span>
                    <div className="mt-6 flex flex-wrap gap-4 justify-center">
                      {(userRole === "ROLE_ADMIN" && (
                        <>
                          <Link to={`/admin`}>
                            <button className="text-white bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2">
                              Admin Dashboard
                            </button>
                          </Link>
                        </>
                      )) ||
                        (userRole === "ROLE_PRESTATAIRE" && (
                          <>
                            <Link to={`/prestataire`}>
                              <button className="text-white bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2">
                                Prestataire Dashboard
                              </button>
                            </Link>
                          </>
                        ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profil;
