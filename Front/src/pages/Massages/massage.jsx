import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';

import { Button, Img, Input, List, Text } from "../../components";
import Footer from "../../components/Footer";
import Header1 from "../../components/Header1";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup
} from 'react-leaflet';
import axios from 'axios';

const position = [48.866667, 2.333333];

const Massage = () => {
  const [salon, setSalon] = useState(null);
  const { salonId } = useParams();

  useEffect(() => {
    const fetchSalon = async () => {
      try {  
        let response = [];
        let jsonData = "";
        // Effectuer la requête GET vers l'API Platform Symfony
        if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
          response = await fetch(`http://localhost:8888/api/etablissements/${salonId}`);
          //response = await axios.get(`http://localhost:8888/api/etablissements/${salonId}`);
          jsonData = await response.json();
          console.log(response, jsonData)
          //jsonData = await response.data.json()
        } else {
          const url = process.env.URL_API_APP
          //response = await axios.get(url + ""); 
          response = await fetch(`http://localhost:8888/api/etablissement/${salonId}`);
          jsonData = await response.json();
        }
        // Mettre à jour l'état avec l'objet récupéré depuis la réponse
        setSalon(jsonData);
      } catch (error) {
        // Gérer les erreurs de requête
        //console.error('Error fetching object:', error);
      }
    };
    // Appeler la fonction de requête
    fetchSalon();
  }, [salonId]);
  return (
    <>
      <div className="bg-gray-50 flex flex-col font-markoone sm:gap-10 md:gap-10 gap-[100px] items-start justify-start mx-auto w-auto sm:w-full md:w-full">
        <div className="flex flex-col md:gap-10 gap-[60px] items-start justify-start w-full">
          <div className="flex flex-col gap-10 items-start justify-start w-full">
            <Header1 className="bg-white-A700 flex gap-2 h-20 md:h-auto items-center justify-between md:px-5 px-[120px] py-[19px] w-full" />
            <div className="flex flex-col font-manrope items-center justify-center md:px-10 sm:px-5 px-[120px] w-full">
              <div className="flex md:flex-col flex-row gap-6 items-center justify-center max-w-[1200px] mx-auto w-full">
                <div className="flex flex-1 flex-col items-center justify-start w-full">
                  <Img
                    className="h-[550px] md:h-auto object-cover rounded-bl-[10px] rounded-br-[10px] w-full"
                    src="./src/assets/images/exemple_list_salon/img1_salon.jpg"
                    alt=""
                  />
                </div>
                <div className="flex sm:flex-1 flex-col gap-6 h-[594px] md:h-auto items-start justify-start w-auto sm:w-full">
                  <Img
                    className="h-[263px] sm:h-auto object-cover rounded-bl-[10px] rounded-br-[10px] w-full"
                    src="./src/assets/images/exemple_list_salon/img2_salon.jpg"
                    alt=""
                  />
                  <div className="flex flex-col h-[307px] md:h-auto items-end justify-start w-96 sm:w-full">
                    <Img
                      className="h-[263px] sm:h-auto object-cover rounded-bl-[10px] rounded-br-[10px] w-full"
                      src="./src/assets/images/exemple_list_salon/img3_salon.jpg"
                      alt=""
                    />
                    
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col font-manrope items-center justify-center md:px-10 sm:px-5 px-[120px] w-full">
              <div className="flex md:flex-col flex-row gap-6 h-[1819px] md:h-auto items-start justify-center max-w-[1200px] mx-auto w-full">
                <div className="flex flex-1 flex-col gap-6 items-start justify-start w-full">
                  <div className="bg-white-A700 border border-blue_gray-100 border-solid flex flex-col items-start justify-start p-10 sm:px-5 rounded-[10px] w-full">
                    <div className="flex flex-col gap-11 items-start justify-start w-full">
                      <div className="flex flex-col gap-6 items-start justify-start w-full">
                        <div className="flex flex-col gap-4 items-start justify-start w-full">
                          <Text
                            className="leading-[37.00px] max-w-[712px] md:max-w-full sm:text-2xl md:text-[26px] text-[28px] text-gray-900 tracking-[-0.56px]"
                            size="txtManropeExtraBold28"
                          >
                            {salon.name}
                          </Text>
                          <Text
                            className="text-gray-900 text-xl tracking-[-0.40px] w-full"
                            size="txtManropeSemiBold20"
                          >
                            {salon.adresse}
                          </Text>
                        </div>
                        
                      </div>
                      <div className="flex flex-col gap-4 items-start justify-start w-full">
                        <Text
                          className="text-gray-900 text-xl tracking-[-0.40px] w-full"
                          size="txtManropeSemiBold20"
                        >
                          Well-constructed 1562 Sq Ft Home Is Now Offering To
                          You In Uttara For Sale
                        </Text>
                        
                          <>
                            {salon.prestataire.services && salon.prestataire.services.length > 0 ? (
                              salon.prestataire.services.map((service, index) => (
                                <div key={index} className="flex flex-row gap-10 items-center justify-between w-full">
                                  {service.nom}
                                </div>
                              )) 
                            ):(
                              <Text
                                className="leading-[32.00px] max-w-[712px] md:max-w-full text-gray-600 text-lg"
                                size="txtManropeRegular18"
                              >
                                Aucun service
                              </Text>
                            )}
                          </>
                        
                      </div>
                      <div className="flex flex-col gap-6 items-start justify-start w-full">
                        <div className="flex flex-col gap-6 items-start justify-start w-full">
                          <Text
                            className="sm:text-2xl md:text-[26px] text-[28px] text-gray-900 tracking-[-0.56px] w-full"
                            size="txtManropeExtraBold28"
                          >
                            Localisation
                          </Text>
                          
                        </div>
                        <div className="flex flex-col items-center justify-start w-full">
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
                          </MapContainer>
                  
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white-A700 border border-blue_gray-100 border-solid flex flex-col items-start justify-start p-10 sm:px-5 rounded-[10px] w-full">
                    <div className="flex flex-col gap-[26px] items-start justify-start w-full">
                      <Text
                        className="sm:text-2xl md:text-[26px] text-[28px] text-gray-900 tracking-[-0.56px] w-full"
                        size="txtManropeExtraBold28"
                      >
                        Agent Information
                      </Text>
                      <div className="flex flex-row gap-6 items-center justify-start w-full">
                        <Img
                          className="h-[150px] md:h-auto object-cover rounded-[10px] w-[150px]"
                          src="images/img_rectangle5599.png"
                          alt="rectangle5599"
                        />
                        <div className="flex flex-col gap-[3px] items-start justify-start w-auto">
                          <Text
                            className="text-gray-900 text-xl tracking-[-0.40px] w-auto"
                            size="txtManropeSemiBold20"
                          >
                            Bruno Fernandes
                          </Text>
                          <Input
                            name="reviewCounter"
                            placeholder="4 review"
                            className="font-semibold p-0 placeholder:text-gray-900 text-base text-gray-900 text-left w-full"
                            wrapClassName="flex pr-[9px] w-full"
                            prefix={
                              <Img
                                className="mt-0.5 mb-[3px] mr-3.5"
                                src="images/img_settings_gray_600.svg"
                                alt="settings"
                              />
                            }
                          ></Input>
                          <div className="flex flex-row gap-2.5 items-center justify-start w-full">
                            <Img
                              className="h-5 w-5"
                              src="images/img_mail_gray_600.svg"
                              alt="mail"
                            />
                            <Text
                              className="text-base text-gray-600 w-auto"
                              size="txtManropeMedium16"
                            >
                              bruno@relasto .com
                            </Text>
                          </div>
                          <div className="flex flex-row gap-2.5 items-center justify-start w-full">
                            <Img
                              className="h-5 w-5"
                              src="images/img_call.svg"
                              alt="call"
                            />
                            <Text
                              className="text-base text-gray-600 w-auto"
                              size="txtManropeMedium16"
                            >
                              +65 0231 965 965
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-white-A700 border border-blue_gray-100 border-solid flex sm:flex-1 flex-col items-start justify-start p-6 sm:px-5 rounded-[10px] w-auto sm:w-full">
                  <div className="flex flex-col gap-10 items-start justify-start w-[336px]">
                    <div className="flex flex-col gap-6 items-start justify-start w-full">
                      <Text
                        className="sm:text-2xl md:text-[26px] text-[28px] text-gray-900 tracking-[-0.56px] w-full"
                        size="txtManropeExtraBold28"
                      >
                        Les prestations
                      </Text>
                      <div className="flex flex-col gap-3 h-[440px] md:h-auto items-start justify-start w-full">
                        
                      <div className="flex sm:flex-col flex-row gap-4 items-start justify-start md:pr-10 sm:pr-5 pr-[180px] w-full">
                          <div className="bg-white-A700 border border-gray-600 border-solid flex flex-1 flex-col items-center justify-center sm:px-5 px-6 py-[7px] rounded-[10px] w-full">
                            <div className="flex flex-col gap-1 items-start justify-start w-full">
                              <Text
                                className="text-2xl md:text-[22px] text-gray-900 sm:text-xl tracking-[-0.48px] w-full"
                                size="txtManropeBold24"
                              >
                                $649,900
                              </Text>
                              <Text
                                className="text-gray-600 text-xs w-full"
                                size="txtManropeSemiBold12Gray600"
                              >
                                Online / Cash Payment
                              </Text>
                            </div>
                          </div>
                          <div className="bg-white-A700 border border-blue_gray-100 border-solid flex flex-1 flex-col items-center justify-center sm:px-5 px-6 py-[7px] rounded-[10px] w-full">
                            <div className="flex flex-col gap-1 items-start justify-start w-full">
                              <Text
                                className="text-2xl md:text-[22px] text-gray-900 sm:text-xl tracking-[-0.48px] w-full"
                                size="txtManropeBold24"
                              >
                                $850 / month
                              </Text>
                              <Text
                                className="text-gray-600 text-xs w-full"
                                size="txtManropeSemiBold12Gray600"
                              >
                                0% EMI for 6 Months
                              </Text>
                            </div>
                          </div>
                        </div>
                        
                        
                        
                      </div>
                    </div>
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
          
        </div>
        <Footer className="bg-white-A700 flex gap-2 items-center justify-center md:px-5 px-[120px] py-20 w-full" />
      </div>
    </>
  );
};

export default Massage;