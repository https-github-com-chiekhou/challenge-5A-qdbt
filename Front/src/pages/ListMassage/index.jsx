import React from "react";

import {
  Button,
  // GoogleMap,
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

const position = [51.505, -0.09];

const ListMassageViewPage = () => {
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
                <div className="flex md:flex flex-row gap-5 items-start justify-start w-full">
                  <div className="bg-white-A700 border border-blue_gray-100 border-solid flex flex-1 flex-col h-[60px] md:h-auto justify-start px-4 py-3.5 rounded-[10px] w-full">
                    <Input
                      name="frame1000001565"
                      placeholder="Entrez la prestation ou le prestataire"
                      className="font-semibold p-0 placeholder:text-gray-700 text-gray-700 text-left text-lg w-full"
                      wrapClassName="flex w-auto sm:w-full"
                      suffix={
                        <Img
                          className="mt-auto mb-0.5 h-6 ml-3"
                          src="./src/assets/images/img_search_gray_700.svg"
                          alt="search"
                        />
                      }
                    ></Input>
                  </div>

                  <Button
                    className="cursor-pointer flex items-center justify-center min-w-[124px]"
                    rightIcon={
                      <Img
                        className="h-5 mt-px mb-[3px] ml-2.5"
                        src="./src/assets/images/img_search_gray_700.svg"
                        alt="search"
                      />
                    }
                    shape="round"
                    color="gray_900"
                    size="md"
                    variant="fill"
                  >
                    <div className="font-bold text-left text-lg">Search</div>
                  </Button>
                </div>
                {/* <div className="flex flex-row flex-wrap gap-2.5 items-start justify-start max-w-[1200px] w-full">
                  <Button
                    className="cursor-pointer flex items-center justify-center w-[145px]"
                    rightIcon={
                      <Img
                        className="h-4 mt-px mb-0.5 ml-2"
                        src="images/img_close_gray_900.svg"
                        alt="close"
                      />
                    }
                    shape="round"
                    color="blue_gray_100_02"
                    size="xs"
                    variant="outline"
                  >
                    <div className="font-semibold text-left text-sm">
                      Bathrooms 2+
                    </div>
                  </Button>
                  <Button
                    className="cursor-pointer flex items-center justify-center min-w-[243px]"
                    rightIcon={
                      <Img
                        className="h-4 mb-1 ml-2"
                        src="images/img_close_gray_900.svg"
                        alt="close"
                      />
                    }
                    shape="round"
                    color="blue_gray_100_02"
                    size="xs"
                    variant="outline"
                  >
                    <div className="font-semibold text-left text-sm">
                      Square Feet 750 - 2000 sq. ft
                    </div>
                  </Button>
                  <Button
                    className="cursor-pointer flex items-center justify-center min-w-[151px]"
                    rightIcon={
                      <Img
                        className="h-4 mt-px mb-0.5 ml-2"
                        src="images/img_close_gray_900.svg"
                        alt="close"
                      />
                    }
                    shape="round"
                    color="blue_gray_100_02"
                    size="xs"
                    variant="outline"
                  >
                    <div className="font-semibold text-left text-sm">
                      Year Built 5 - 15
                    </div>
                  </Button>
                  <Button
                    className="cursor-pointer flex items-center justify-center min-w-[168px]"
                    rightIcon={
                      <Img
                        className="h-4 mb-1 ml-2"
                        src="images/img_close_gray_900.svg"
                        alt="close"
                      />
                    }
                    shape="round"
                    color="blue_gray_100_02"
                    size="xs"
                    variant="outline"
                  >
                    <div className="!text-gray-900 font-semibold text-left text-sm">
                      For Sale By Agent
                    </div>
                  </Button>
                  <Button
                    className="cursor-pointer flex items-center justify-center min-w-[174px]"
                    rightIcon={
                      <Img
                        className="h-4 mt-px mb-0.5 ml-2"
                        src="images/img_close_gray_900.svg"
                        alt="close"
                      />
                    }
                    shape="round"
                    color="blue_gray_100_02"
                    size="xs"
                    variant="outline"
                  >
                    <div className="!text-gray-900 font-semibold text-left text-sm">
                      New Construction
                    </div>
                  </Button>
                </div> */}
              </div>
            </div>
          </div>
          <div className="flex flex-col font-manrope items-center justify-center md:px-10 sm:px-5 px-[120px] w-full">
            <div className="flex flex-col md:gap-10 gap-[60px] items-center justify-start w-full">
              <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start w-full">
                {/* <GoogleMap
                  className="h-1 md:mt-0 mt-[423px] rounded-sm w-[12%]"
                  showMarker={false}
                ></GoogleMap> 
                <Line className="h-[3px] md:ml-[0] ml-[842px] w-[11%]" />*/}
                {/*<Img
                  src="./src/assets/images/google_map/carte.webp"
                  alt="map salon"
                ></Img>
              ></Img>*/}
                <div className="flex mb-[236px] md:ml-[0] ml-[26px] px-4 py-6 relative w-[159px]">
                <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
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
              <div className="flex flex-col items-start justify-start w-full">
                <div className="gap-6 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center min-h-[auto] w-full">
                  <div className="flex flex-1 flex-col h-[512px] md:h-auto items-start justify-start w-full">
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
                            <div className="flex flex-1 flex-row gap-3 items-center justify-between w-full">
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
                            <div className="flex flex-1 flex-row gap-3 items-center justify-between w-full">
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
                  <div className="flex flex-1 flex-col h-[512px] md:h-auto items-start justify-start w-full">
                    <Img
                      className="h-[260px] md:h-auto object-cover w-full"
                      src="./src/assets/images/exemple_list_salon/img2_salon.jpg"
                      alt="image"
                    />
                    <div className="bg-white-A700 border border-red-100 border-solid flex flex-col items-start justify-start px-5 py-[10px] rounded-bl-[10px] rounded-br-[10px] w-full">
                      <div className="flex flex-col gap-[27px] items-start justify-start w-full">
                        <div className="flex flex-row gap-3 items-center justify-start w-full">
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
                            <div className="flex flex-1 flex-row gap-3 items-center justify-between w-full">
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
                            <div className="flex flex-1 flex-row gap-3 items-center justify-between w-full">
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
                  <div className="flex flex-1 flex-col h-[512px] md:h-auto items-start justify-start w-full">
                    <Img
                      className="h-[260px] md:h-auto object-cover w-full"
                      src="./src/assets/images/exemple_list_salon/img2_salon.jpg"
                      alt="image"
                    />
                    <div className="bg-white-A700 border border-red-100 border-solid flex flex-col items-start justify-start px-5 py-[10px] rounded-bl-[10px] rounded-br-[10px] w-full">
                      <div className="flex flex-col gap-[27px] items-start justify-start w-full">
                        <div className="flex flex-row gap-3 items-center justify-start w-full">
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
                            <div className="flex flex-1 flex-row gap-3 items-center justify-between w-full">
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
                            <div className="flex flex-1 flex-row gap-3 items-center justify-between w-full">
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
                  <div className="flex flex-1 flex-col h-[512px] md:h-auto items-start justify-start w-full">
                    <Img
                      className="h-[260px] md:h-auto object-cover w-full"
                      src="./src/assets/images/exemple_list_salon/img3_salon.jpg"
                      alt="image"
                    />
                    <div className="bg-white-A700 border border-red-100 border-solid flex flex-col items-start justify-start px-5 py-[10px] rounded-bl-[10px] rounded-br-[10px] w-full">
                      <div className="flex flex-col gap-[27px] items-start justify-start w-full">
                        <div className="flex flex-row gap-3 items-center justify-start w-full">
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
                            <div className="flex flex-1 flex-row gap-3 items-center justify-between w-full">
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
                            <div className="flex flex-1 flex-row gap-3 items-center justify-between w-full">
                              <Img
                                className="h-5 w-5"
                                src="images/img_settings_23.svg"
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
                  <div className="flex flex-1 flex-col h-[512px] md:h-auto items-start justify-start w-full">
                    <Img
                      className="h-[260px] md:h-auto object-cover w-full"
                      src="./src/assets/images/exemple_list_salon/img3_salon.jpg"
                      alt="image"
                    />
                    <div className="bg-white-A700 border border-red-100 border-solid flex flex-col items-start justify-start px-5 py-[10px] rounded-bl-[10px] rounded-br-[10px] w-full">
                      <div className="flex flex-col gap-[27px] items-start justify-start w-full">
                        <div className="flex flex-row gap-3 items-center justify-start w-full">
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
                            <div className="flex flex-1 flex-row gap-3 items-center justify-between w-full">
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
                            <div className="flex flex-1 flex-row gap-3 items-center justify-between w-full">
                              <Img
                                className="h-5 w-5"
                                src="images/img_settings_24.svg"
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
                  <div className="flex flex-1 flex-col h-[512px] md:h-auto items-start justify-start w-full">
                    <Img
                      className="h-[260px] md:h-auto object-cover w-full"
                      src="./src/assets/images/exemple_list_salon/img3_salon.jpg"
                      alt="image"
                    />
                    <div className="bg-white-A700 border border-red-100 border-solid flex flex-col items-start justify-start px-5 py-[10px] rounded-bl-[10px] rounded-br-[10px] w-full">
                      <div className="flex flex-col gap-[27px] items-start justify-start w-full">
                        <div className="flex flex-row gap-3 items-center justify-start w-full">
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
                            <div className="flex flex-1 flex-row gap-3 items-center justify-between w-full">
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
                            <div className="flex flex-1 flex-row gap-3 items-center justify-between w-full">
                              <Img
                                className="h-5 w-5"
                                src="images/img_settings_25.svg"
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
                  <div className="flex flex-1 flex-col h-[512px] md:h-auto items-start justify-start w-full">
                    <Img
                      className="h-[260px] md:h-auto object-cover w-full"
                      src="./src/assets/images/exemple_list_salon/img3_salon.jpg"
                      alt="image"
                    />
                    <div className="bg-white-A700 border border-red-100 border-solid flex flex-col items-start justify-start px-5 py-[10px] rounded-bl-[10px] rounded-br-[10px] w-full">
                      <div className="flex flex-col gap-[27px] items-start justify-start w-full">
                        <div className="flex flex-row gap-3 items-center justify-start w-full">
                          <Text
                            className="flex-1 text-base text-gray-900 w-auto"
                            size="txtManropeSemiBold16Gray900"
                          >
                            Nom du salon
                          </Text>
                        </div>
                        <div className="flex flex-col gap-[21px] items-start justify-start w-full">
                          <div className="flex flex-row gap-10 items-center justify-between w-full">
                            <div className="flex flex-1 flex-row gap-3 items-center justify-between w-full">
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
                            <div className="flex flex-1 flex-row gap-3 items-center justify-between w-full">
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
                            <div className="flex flex-1 flex-row gap-3 items-center justify-between w-full">
                              <Img
                                className="h-5 w-5"
                                src="images/img_settings_26.svg"
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
                  <div className="flex flex-1 flex-col h-[512px] md:h-auto items-start justify-start w-full">
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
                            <div className="flex flex-1 flex-row gap-3 items-center justify-between w-full">
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
                            <div className="flex flex-1 flex-row gap-3 items-center justify-between w-full">
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
                  <div className="flex flex-1 flex-col h-[512px] md:h-auto items-start justify-start w-full">
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
                            <div className="flex flex-1 flex-row gap-3 items-center justify-between w-full">
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
                            <div className="flex flex-1 flex-row gap-3 items-center justify-between w-full">
                              <Img
                                className="h-5 w-5"
                                src="images/img_settings_28.svg"
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
              </div>
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
