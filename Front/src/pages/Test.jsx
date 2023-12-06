/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
import React, { useEffect, useState } from 'react';
import Header1 from '../components/Header1';

const Test = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:8888/api/users');
                const jsonData = await response.json();

                // Vérifiez si jsonData est un objet avec hydra:member
                if (jsonData && jsonData['hydra:member']) {
                    setData(jsonData['hydra:member']);
                } else {
                    console.error('Les données de l\'API ne sont pas au format attendu:', jsonData);
                }
            } catch (error) {
                console.error('Erreur lors de la récupération des données:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <>

            <Header1 />
            <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
                <h1 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Données de l'API Platform</h1>
                <ul className=" text-center text-md font-bold leading-9 tracking-tight text-gray-900">
                    {data.map(item => (
                        <li className=" text-center text-2xl font-bold leading-9 tracking-tight text-gray-900" key={item['@id']}>
                            <strong className=" text-center text-gray-900">Email:</strong> {item.email}, <strong>Créé le:</strong> {item.createdAt}
                        </li>
                    ))}
                </ul>
            </div>

        </>
    );
};


export default Test;
