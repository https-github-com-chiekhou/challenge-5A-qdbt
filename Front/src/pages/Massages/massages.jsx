import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import {
  Button,
  Img,
  Input,
  //Line,
  List,
  Text,
} from "../../components";
import Footer from "../../components/Footer";
import Header1 from "../../components/Header1";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup
} from 'react-leaflet';
//import OpenLayerMap from "../Map/Map3";
import SearchSalon from "../../components/Search/searchsalon";
import StarRating from "../../components/StarRating/starratting";
import "../Map/Map3";
const dropdownlargeOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const priceOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const dropdownlargeOneOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const position = [48.866667, 2.333333];
const position2 = [48.846137, 2.347412];

const ListMassageViewPage = () => {
  const [etablissements, setEtablissements] = useState(null);
  useEffect(() => {
    // Fonction asynchrone pour effectuer la requête
    const fetchSalons = async () => {
      try {  
        let response = [];
        let jsonData = "";
        // Effectuer la requête GET vers l'API Platform Symfony
        if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
          response = await fetch("http://localhost:8888/api/etablissements");
          jsonData = await response.json();
          //response = await axios.get('http://localhost:8888/api/etablissements');
          //console.log(response)
        } else {
          const url = process.env.URL_API_APP
          //response = await axios.get(url + ""); 
          response = await fetch("http://localhost:8888/api/etablissements");
          jsonData = await response.json();
        }
        // Mettre à jour l'état avec l'objet récupéré depuis la réponse
        setEtablissements(jsonData["hydra:member"]);
      } catch (error) {
        // Gérer les erreurs de requête
        //console.error('Error fetching object:', error);
      }
    };

    // Appeler la fonction de requête
    fetchSalons();
  }, []); 
  return (
    <>
      <div className="bg-gray-50 flex flex-col font-markoone sm:gap-10 md:gap-10 gap-[100px] items-start justify-start mx-auto w-auto sm:w-full md:w-full">
        <div className="flex flex-col md:gap-10 gap-[60px] items-center justify-center w-full">
          <div className="flex flex-col font-manrope items-center justify-start md:px-10 sm:px-5 px-[120px] w-full">
            <div className="flex flex-col gap-6 items-center justify-center max-w-[1200px] mx-auto w-full">
              <Text
                className="text-4xl sm:text-[32px] md:text-[34px] text-gray-900 tracking-[-0.72px] w-full"
                size="txtManropeExtraBold36"
              >
                Trouver votre salon
              </Text>
              <div className="flex flex-col gap-3 items-start justify-start w-full">
                <div className="flex md:flex-col flex-row gap-5 items-start justify-start w-full">
                  <SearchSalon></SearchSalon>
                </div>
                
              </div>
            </div>
          </div>
          {/* <OpenLayerMap/> */}
          <div className="flex flex-col font-manrope items-center justify-center md:px-10 sm:px-5 px-[120px] w-full">
            <div className="flex flex-col md:gap-10 gap-[60px] items-center justify-start w-full">
              
              <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-full" style={{maxHeight:"500px"}}>
                <MapContainer center={position} zoom={13} scrollWheelZoom={false} style={{ height: '400px', width: '100%' }}>
                    <TileLayer
                      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Marker position={position}>
                      <Popup>
                        A pretty CSS3 popup. <br /> Easily customizable.
                      </Popup>
                    </Marker>
                    <Marker position={position2}>
                      <Popup>
                        A pretty CSS3 popup. <br /> Easily customizable.
                      </Popup>
                    </Marker>
                </MapContainer>
              </div>

              <div  className="flex flex-col items-start justify-start w-full">
              <div className="md:gap-5 gap-6 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center min-h-[auto] w-full">
              
              { etablissements && etablissements.length > 0 ? (
              
              etablissements.map((etablissement, index) => (
                
                    <div key={index} className="flex flex-1 flex-col h-[612px] md:h-auto items-start justify-start w-full">
                      <Img
                        className="h-[260px] md:h-auto object-cover w-full"
                        src="./src/assets/images/exemple_list_salon/img1_salon.jpg"
                        alt="image"
                      />
                      <div className="bg-white-A700 border border-red-100 border-solid flex flex-col items-start justify-start px-5 py-[10px] rounded-bl-[10px] rounded-br-[10px] w-full">
                        <div className="flex flex-col gap-[27px] items-start justify-start w-full">
                        <div className="flex flex-row gap-3 items-center justify-start w-full">
                            
                            <Text
                              className="flex-1 text-base text-gray-900 w-auto"
                              size="txtManropeSemiBold16Gray900"
                            >
                              {etablissement.name}
                            </Text>
                          </div>
                          <div className="flex flex-col gap-[21px] items-start justify-start w-full">
                          
                          { etablissement.prestataire.services && etablissement.prestataire.services.length > 0 ? (
                          
                          etablissement.prestataire.services.map((serv, index) => (
                            <div key={index} className="flex flex-row gap-10 items-center justify-between w-full">
                            <div className="flex flex-1 flex-row gap-3 items-center justify-start w-full">
                              <Img
                                className="h-5 w-5"
                                src="./src/assets/images/img_massage.svg"
                                alt="volume"
                              />
                              <Text
                                className="flex-1 text-base text-gray-700 w-auto"
                                size="txtManropeSemiBold16Gray700"
                              >
                                {serv.nom}
                              </Text>
                            </div>
                            <div className="flex flex-1 flex-row gap-3 items-center justify-start w-full">
                              <Img
                                className="h-5 w-5"
                                src="images/img_ticket.svg"
                                alt="ticket"
                              />
                              <Text
                                className="text-base text-gray-700 w-auto"
                                size="txtManropeSemiBold16Gray700"
                              >
                                {serv.tarif}€
                              </Text>
                            </div>
                          </div>
                          ))
                          ) : (
                            <Text
                                className="text-base text-gray-700 w-auto"
                                size="txtManropeSemiBold16Gray700"
                              >
                                Pas de prestation
                              </Text>
                          )}
                          
                          
                          
                          
                          
                        </div>
                        <div className="flex flex-row gap-[31px] items-center justify-start w-full">
                          <Button
                            className="cursor-pointer flex-1 font-semibold h-12 text-base text-center w-full"
                            shape="round"
                            color="gray_900"
                            size="sm"
                            variant="fill"
                          >
                            <Link to={`/salon/${etablissement.id}`}>Voir plus de détails</Link>
                          </Button>
                          
                        </div>

                        </div>
                      </div>
                    </div>
                
              ))

              ) : (
                <Text
                  className="flex-1 text-base text-gray-900 w-auto"
                  size="txtManropeSemiBold16Gray900"
                >
                  Aucun résultat
                </Text>
              )}
              </div>
              </div>
              {/* <div className="flex flex-col items-start justify-start w-full">
                <div className="md:gap-5 gap-6 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center min-h-[auto] w-full">
                  <div className="flex flex-1 flex-col h-[612px] md:h-auto items-start justify-start w-full">
                    <Img
                      className="h-[260px] md:h-auto object-cover w-full"
                      src="./src/assets/images/exemple_list_salon/img1_salon.jpg"
                      alt="image"
                    />
                    <div className="bg-white-A700 border border-red-100 border-solid flex flex-col items-start justify-start px-5 py-[10px] rounded-bl-[10px] rounded-br-[10px] w-full">
                      <div className="flex flex-col gap-[27px] items-start justify-start w-full">
                      <StarRating rating={3.5} />
                        <div className="flex flex-row gap-3 items-center justify-start w-full">
                          <Img
                            className="h-6 w-6"
                            src=""
                            alt="eye"
                          />
                          <Text
                            className="flex-1 text-base text-gray-900 w-auto"
                            size="txtManropeSemiBold16Gray900"
                          >
                            Nom du salon
                          </Text>
                        </div>
                        <div className="flex flex-col gap-[21px] items-start justify-start w-full">
                          <div className="flex flex-row gap-10 items-center justify-between w-full">
                            <div className="flex flex-1 flex-row gap-3 items-center justify-start w-full">
                              <Img
                                className="h-5 w-5"
                                src="./src/assets/images/img_massage.svg"
                                alt="volume"
                              />
                              <Text
                                className="flex-1 text-base text-gray-700 w-auto"
                                size="txtManropeSemiBold16Gray700"
                              >
                                type de massage
                              </Text>
                            </div>
                            <div className="flex flex-1 flex-row gap-3 items-center justify-start w-full">
                              <Img
                                className="h-5 w-5"
                                src="images/img_ticket.svg"
                                alt="ticket"
                              />
                              <Text
                                className="text-base text-gray-700 w-auto"
                                size="txtManropeSemiBold16Gray700"
                              >
                                prix
                              </Text>
                            </div>
                          </div>
                          <div className="flex flex-row gap-10 items-center justify-between w-full">
                            <div className="flex flex-1 flex-row gap-3 items-center justify-start w-full">
                              <Img
                                className="h-5 w-5"
                                src="./src/assets/images/img_massage.svg"
                                alt="icon"
                              />
                              <Text
                                className="flex-1 text-base text-gray-700 w-auto"
                                size="txtManropeSemiBold16Gray700"
                              >
                                type de massage
                              </Text>
                            </div>
                            <div className="flex flex-1 flex-row gap-3 items-center justify-start w-full">
                              <Img
                                className="h-5 w-5"
                                src="images/img_settings_20.svg"
                                alt="settings"
                              />
                              <Text
                                className="text-base text-gray-700 w-auto"
                                size="txtManropeSemiBold16Gray700"
                              >
                               prix
                              </Text>
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-row gap-[31px] items-center justify-start w-full">
                          <Button
                            className="cursor-pointer flex-1 font-semibold h-12 text-base text-center w-full"
                            shape="round"
                            color="gray_900"
                            size="sm"
                            variant="fill"
                          >
                            Voir plus de détails
                          </Button>
                          
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col h-[612px] md:h-auto items-start justify-start w-full">
                    <Img
                      className="h-[260px] md:h-auto object-cover w-full"
                      src="./src/assets/images/exemple_list_salon/img2_salon.jpg"
                      alt="image"
                    />
                    <div className="bg-white-A700 border border-red-100 border-solid flex flex-col items-start justify-start px-5 py-[10px] rounded-bl-[10px] rounded-br-[10px] w-full">
                      <div className="flex flex-col gap-[27px] items-start justify-start w-full">
                      <StarRating rating={4.5} />
                        <div className="flex flex-row gap-3 items-center justify-start w-full">
                          <Img
                            className="h-6 w-6"
                            src=""
                            alt="eye"
                          />
                          <Text
                            className="flex-1 text-base text-gray-900 w-auto"
                            size="txtManropeSemiBold16Gray900"
                          >
                            Nom du salon
                          </Text>
                          <div>
                          </div>
                        </div>
                        <div className="flex flex-col gap-[21px] items-start justify-start w-full">
                          <div className="flex flex-row gap-10 items-center justify-between w-full">
                            <div className="flex flex-1 flex-row gap-3 items-center justify-start w-full">
                              <Img
                                className="h-5 w-5"
                                src="./src/assets/images/img_massage.svg"
                                alt="volume"
                              />
                              <Text
                                className="flex-1 text-base text-gray-700 w-auto"
                                size="txtManropeSemiBold16Gray700"
                              >
                                type de massage
                              </Text>
                            </div>
                            <div className="flex flex-1 flex-row gap-3 items-center justify-start w-full">
                              <Img
                                className="h-5 w-5"
                                src="images/img_ticket.svg"
                                alt="ticket"
                              />
                              <Text
                                className="text-base text-gray-700 w-auto"
                                size="txtManropeSemiBold16Gray700"
                              >
                                prix
                              </Text>
                            </div>
                          </div>
                          <div className="flex flex-row gap-10 items-center justify-between w-full">
                            <div className="flex flex-1 flex-row gap-3 items-center justify-start w-full">
                              <Img
                                className="h-5 w-5"
                                src="./src/assets/images/img_massage.svg"
                                alt="icon"
                              />
                              <Text
                                className="flex-1 text-base text-gray-700 w-auto"
                                size="txtManropeSemiBold16Gray700"
                              >
                                type de massage
                              </Text>
                            </div>
                            <div className="flex flex-1 flex-row gap-3 items-center justify-start w-full">
                              <Img
                                className="h-5 w-5"
                                src="images/img_settings_21.svg"
                                alt="settings"
                              />
                              <Text
                                className="text-base text-gray-700 w-auto"
                                size="txtManropeSemiBold16Gray700"
                              >
                               prix
                              </Text>
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-row gap-[31px] items-center justify-start w-full">
                          <Button
                            className="cursor-pointer flex-1 font-semibold h-12 text-base text-center w-full"
                            shape="round"
                            color="gray_900"
                            size="sm"
                            variant="fill"
                          >
                            Voir plus de détails
                          </Button>
                          
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col h-[612px] md:h-auto items-start justify-start w-full">
                    <Img
                      className="h-[260px] md:h-auto object-cover w-full"
                      src="./src/assets/images/exemple_list_salon/img2_salon.jpg"
                      alt="image"
                    />
                    <div className="bg-white-A700 border border-red-100 border-solid flex flex-col items-start justify-start px-5 py-[10px] rounded-bl-[10px] rounded-br-[10px] w-full">
                      <div className="flex flex-col gap-[27px] items-start justify-start w-full">
                      <StarRating rating={3.5} />
                        <div className="flex flex-row gap-3 items-center justify-start w-full">
                          <Img
                            className="h-6 w-6"
                            src=""
                            alt="eye"
                          />
                          <Text
                            className="flex-1 text-base text-gray-900 w-auto"
                            size="txtManropeSemiBold16Gray900"
                          >
                            Nom du salon
                          </Text>
                        </div>
                        <div className="flex flex-col gap-[21px] items-start justify-start w-full">
                          <div className="flex flex-row gap-10 items-center justify-between w-full">
                            <div className="flex flex-1 flex-row gap-3 items-center justify-start w-full">
                              <Img
                                className="h-5 w-5"
                                src="./src/assets/images/img_massage.svg"
                                alt="volume"
                              />
                              <Text
                                className="flex-1 text-base text-gray-700 w-auto"
                                size="txtManropeSemiBold16Gray700"
                              >
                                type de massage
                              </Text>
                            </div>
                            <div className="flex flex-1 flex-row gap-3 items-center justify-start w-full">
                              <Img
                                className="h-5 w-5"
                                src="images/img_ticket.svg"
                                alt="ticket"
                              />
                              <Text
                                className="text-base text-gray-700 w-auto"
                                size="txtManropeSemiBold16Gray700"
                              >
                                prix
                              </Text>
                            </div>
                          </div>
                          <div className="flex flex-row gap-10 items-center justify-between w-full">
                            <div className="flex flex-1 flex-row gap-3 items-center justify-start w-full">
                              <Img
                                className="h-5 w-5"
                                src="./src/assets/images/img_massage.svg"
                                alt="icon"
                              />
                              <Text
                                className="flex-1 text-base text-gray-700 w-auto"
                                size="txtManropeSemiBold16Gray700"
                              >
                                type de massage
                              </Text>
                            </div>
                            <div className="flex flex-1 flex-row gap-3 items-center justify-start w-full">
                              <Img
                                className="h-5 w-5"
                                src="images/img_settings_22.svg"
                                alt="settings"
                              />
                              <Text
                                className="text-base text-gray-700 w-auto"
                                size="txtManropeSemiBold16Gray700"
                              >
                               prix
                              </Text>
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-row gap-[31px] items-center justify-start w-full">
                          <Button
                            className="cursor-pointer flex-1 font-semibold h-12 text-base text-center w-full"
                            shape="round"
                            color="gray_900"
                            size="sm"
                            variant="fill"
                          >
                            Voir plus de détails
                          </Button>
                          
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex flex-1 flex-col h-[612px] md:h-auto items-start justify-start w-full">
                    <Img
                      className="h-[260px] md:h-auto object-cover w-full"
                      src="./src/assets/images/exemple_list_salon/img1_salon.jpg"
                      alt="image"
                    />
                    <div className="bg-white-A700 border border-red-100 border-solid flex flex-col items-start justify-start px-5 py-[10px] rounded-bl-[10px] rounded-br-[10px] w-full">
                      <div className="flex flex-col gap-[27px] items-start justify-start w-full">
                      <StarRating rating={3.5} />
                        <div className="flex flex-row gap-3 items-center justify-start w-full">
                          <Img
                            className="h-6 w-6"
                            src=""
                            alt="eye"
                          />
                          <Text
                            className="flex-1 text-base text-gray-900 w-auto"
                            size="txtManropeSemiBold16Gray900"
                          >
                            Nom du salon
                          </Text>
                        </div>
                        <div className="flex flex-col gap-[21px] items-start justify-start w-full">
                          <div className="flex flex-row gap-10 items-center justify-between w-full">
                            <div className="flex flex-1 flex-row gap-3 items-center justify-start w-full">
                              <Img
                                className="h-5 w-5"
                                src="./src/assets/images/img_massage.svg"
                                alt="volume"
                              />
                              <Text
                                className="flex-1 text-base text-gray-700 w-auto"
                                size="txtManropeSemiBold16Gray700"
                              >
                                type de massage
                              </Text>
                            </div>
                            <div className="flex flex-1 flex-row gap-3 items-center justify-start w-full">
                              <Img
                                className="h-5 w-5"
                                src="images/img_ticket.svg"
                                alt="ticket"
                              />
                              <Text
                                className="text-base text-gray-700 w-auto"
                                size="txtManropeSemiBold16Gray700"
                              >
                                prix
                              </Text>
                            </div>
                          </div>
                          <div className="flex flex-row gap-10 items-center justify-between w-full">
                            <div className="flex flex-1 flex-row gap-3 items-center justify-start w-full">
                              <Img
                                className="h-5 w-5"
                                src="./src/assets/images/img_massage.svg"
                                alt="icon"
                              />
                              <Text
                                className="flex-1 text-base text-gray-700 w-auto"
                                size="txtManropeSemiBold16Gray700"
                              >
                                type de massage
                              </Text>
                            </div>
                            <div className="flex flex-1 flex-row gap-3 items-center justify-start w-full">
                              <Img
                                className="h-5 w-5"
                                src="images/img_settings_27.svg"
                                alt="settings"
                              />
                              <Text
                                className="text-base text-gray-700 w-auto"
                                size="txtManropeSemiBold16Gray700"
                              >
                               prix
                              </Text>
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-row gap-[31px] items-center justify-start w-full">
                          <Button
                            className="cursor-pointer flex-1 font-semibold h-12 text-base text-center w-full"
                            shape="round"
                            color="gray_900"
                            size="sm"
                            variant="fill"
                          >
                            Voir plus de détails
                          </Button>
                          
                        </div>
                      </div>
                    </div>
                  </div>
                   
                </div>
              </div>*/}
              <div className="flex sm:flex-col flex-row gap-5 items-center justify-between w-full">
                <div className="flex flex-row gap-[5px] items-start justify-start w-auto">
                  <Button
                    className="cursor-pointer font-semibold h-12 text-base text-center w-12"
                    shape="round"
                    color="transparent"
                    size="sm"
                    variant="outline"
                  >
                    1
                  </Button>
                  <Button
                    className="cursor-pointer font-semibold h-12 text-base text-center w-12"
                    shape="round"
                    color="transparent"
                    size="sm"
                    variant="outline"
                  >
                    2
                  </Button>
                  <Button
                    className="cursor-pointer font-semibold h-12 text-base text-center w-12"
                    shape="round"
                    color="transparent"
                    size="sm"
                    variant="outline"
                  >
                    3
                  </Button>
                  <Button
                    className="cursor-pointer font-semibold h-12 text-base text-center w-12"
                    shape="round"
                    color="transparent"
                    size="sm"
                    variant="outline"
                  >
                    4
                  </Button>
                  <Button
                    className="cursor-pointer font-semibold h-12 text-base text-center w-12"
                    shape="round"
                    color="transparent"
                    size="sm"
                    variant="outline"
                  >
                    5
                  </Button>
                </div>
                <Button
                  className="cursor-pointer flex items-center justify-center min-w-[134px]"
                  rightIcon={
                    <Img
                      className="h-4 mt-px mb-[5px] ml-1"
                      src="./src/assets/images/img_arrowright.svg"
                      alt="arrow_right"
                    />
                  }
                  shape="round"
                  color="transparent"
                  size="sm"
                  variant="outline"
                >
                  <div className="font-semibold text-base text-left">
                    Next Page
                  </div>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ListMassageViewPage;