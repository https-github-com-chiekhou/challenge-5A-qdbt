/* eslint-disable react/no-unescaped-entities */
import { Button, Img, Input, List, Text } from "../components";

const Homepage = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-markoone sm:gap-10 md:gap-10 gap-[100px] items-center justify-start mx-auto w-auto sm:w-full md:w-full">
        <div className="flex flex-col font-manrope items-center justify-center md:px-10 sm:px-5 px-[120px] w-full">
          <div className="flex flex-col gap-10 items-center justify-start max-w-[1200px] mx-auto w-full">
            <div className="flex flex-col gap-4 items-center justify-start w-full">
              <Text
                className="leading-[75.00px] sm:text-[40px] md:text-[46px] text-[54px] text-center text-gray-900 tracking-[-1.08px]"
                size="txtManropeExtraBold54"
              >
                Réserver facilement votre séance de massage <br />
                avec Que du bon temps.
              </Text>
              <Text
                className="leading-[32.00px] max-w-[1200px] md:max-w-full text-center text-gray-700 text-lg"
                size="txtManropeRegular18Gray700"
              >
                Vous pouvez venir vous faire chouchouter dans le salon de
                massage que vous voulez <br />
                dans la ville de votre choix <br />
                et à l'heure que vous souhaitez en un clic.
              </Text>
            </div>
            <div className="flex flex-col gap-6 items-start justify-start w-full">
              <div className="flex flex-row gap-6 items-start justify-start w-full">
                <Img
                  className="flex-1 md:flex-none h-[400px] sm:h-auto max-h-[400px] object-cover rounded-[10px] sm:w-[] md:w-[]"
                  src="./src/assets/images/salons/salon3.jpg"
                  id="imageaccueil"
                  alt="image accueil"
                />
                <Img
                  className="md:h-[400px] sm:h-auto h-full max-h-[400px] object-cover rounded-[10px] sm:w-[] md:w-[]"
                  id="imageaccueil"
                  src="./src/assets/images/salons/salon1.jpg"
                  alt="image accueil"
                />
              </div>
              <div className="flex flex-row gap-6 items-start justify-start w-full">
                <Img
                  className="md:h-[400px] sm:h-auto h-full max-h-[400px] object-cover rounded-[10px] sm:w-[] md:w-[]"
                  id="imageaccueil"
                  src="./src/assets/images/salons/massage1.jpg"
                  alt="image accueil"
                />
                <Img
                  className="flex-1 md:flex-none h-[400px] sm:h-auto max-h-[400px] object-cover rounded-[10px] sm:w-[] md:w-[]"
                  id="imageaccueil"
                  src="./src/assets/images/salons/salon4.jpg"
                  alt="image accueil"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gray-50_01 flex flex-col font-manrope items-center justify-center md:px-10 sm:px-5 px-[120px] py-[50px] w-full">
          <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between max-w-[1200px] mx-auto w-full">
            {/* <List
                    className="md:flex-1 sm:flex-col flex-row md:gap-10 gap-[100px] grid sm:grid-cols-1 grid-cols-2 w-[46%] md:w-full"
                    orientation="horizontal"
                  >
                    <div className="flex flex-col gap-[18px] items-start justify-start w-[225px]">
                      <Button
                        className="flex h-[60px] items-center justify-center shadow-bs w-[60px]"
                        shape="circle"
                        color="white_A700"
                        size="sm"
                        variant="fill"
                      >
                        <Img className="h-8" src="images/img_frame.svg" alt="frame" />
                      </Button>
                      <div className="flex flex-col gap-3.5 items-start justify-start w-full">
                        <Text
                          className="sm:text-4xl md:text-[42px] text-[46px] text-gray-900 tracking-[-0.92px] w-full"
                          size="txtManropeExtraBold46"
                        >
                          $15.4M
                        </Text>
                        <Text
                          className="leading-[28.00px] text-blue_gray-600 text-xl tracking-[-0.40px]"
                          size="txtManropeSemiBold20Bluegray600"
                        >
                          <>
                            Owned from
                            <br />
                            Properties transactions
                          </>
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-col gap-[18px] items-start justify-start w-[225px]">
                      <Button
                        className="flex h-[60px] items-center justify-center shadow-bs w-[60px]"
                        shape="circle"
                        color="white_A700"
                        size="sm"
                        variant="fill"
                      >
                        <Img
                          className="h-8"
                          src="images/img_frame_orange_a700.svg"
                          alt="frame"
                        />
                      </Button>
                      <div className="flex flex-col gap-3.5 items-start justify-start w-full">
                        <Text
                          className="sm:text-4xl md:text-[42px] text-[46px] text-gray-900 tracking-[-0.92px] w-full"
                          size="txtManropeExtraBold46"
                        >
                          25K+
                        </Text>
                        <Text
                          className="leading-[28.00px] max-w-[225px] md:max-w-full text-blue_gray-600 text-xl tracking-[-0.40px]"
                          size="txtManropeSemiBold20Bluegray600"
                        >
                          Properties for Buy & sell Successfully
                        </Text>
                      </div>
                    </div>
                  </List> */}
            <div className="flex flex-col gap-[18px] items-start justify-start w-[225px]">
              {/* <Img
                  className="h-[60px] w-[60px]"
                  src="images/img_file.svg"
                  alt="file"
                />
                <div className="flex flex-col gap-3.5 items-start justify-start w-full">
                  <Text
                    className="sm:text-4xl md:text-[42px] text-[46px] text-gray-900 tracking-[-0.92px] w-full"
                    size="txtManropeExtraBold46"
                  >
                    500
                  </Text>
                  <Text
                    className="leading-[28.00px] max-w-[225px] md:max-w-full text-blue_gray-600 text-xl tracking-[-0.40px]"
                    size="txtManropeSemiBold20Bluegray600"
                  >
                    <>
                      Daily completed <br />
                      transactions
                    </>
                  </Text>
                </div> */}
            </div>
            <div className="flex flex-col gap-[18px] items-start justify-start w-[225px]">
              {/* <Img
                className="h-[60px] w-[60px]"
                src="images/img_file_white_a700.svg"
                alt="file_One"
              />
              <div className="flex flex-col gap-3.5 items-start justify-start w-full">
                <Text
                  className="sm:text-4xl md:text-[42px] text-[46px] text-gray-900 tracking-[-0.92px] w-full"
                  size="txtManropeExtraBold46"
                >
                  600+
                </Text>
                <Text
                  className="text-blue_gray-600 text-xl tracking-[-0.40px] w-full"
                  size="txtManropeSemiBold20Bluegray600"
                >
                  Reagular Clients
                </Text>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Homepage;
