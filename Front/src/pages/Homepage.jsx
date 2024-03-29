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
            
                <div className="flex flex-col gap-[18px] items-start justify-start w-[225px]">
                  
                   
                </div>
                <div className="flex flex-col gap-[18px] items-start justify-start w-[225px]">
                  
                </div>
              </div>
            </div>
            
            
            
            <div className="bg-gray-900 flex flex-col font-manrope items-center justify-center p-[120px] md:px-10 sm:px-5 w-full">
              <div className="flex flex-col md:gap-10 gap-[120px] items-center justify-start max-w-[1200px] mx-auto w-full">
                <div className="flex flex-col md:gap-10 gap-[60px] items-start justify-start w-full">
                  <div className="flex sm:flex-col flex-row gap-5 items-center justify-start w-full">
                    <Text
                      className="flex-1 text-4xl sm:text-[32px] md:text-[34px] text-white-A700 tracking-[-0.72px] w-auto"
                      size="txtManropeExtraBold36WhiteA700"
                    >
                      Vous possédez un salon de massage ?
                    </Text>
                    <Button
                      className="bg-transparent cursor-pointer flex h-[27px] items-center justify-center min-w-[124px]"
                      rightIcon={
                        <Img
                          className="h-5 mb-[1px] ml-2"
                          src="./src/assets/images/img_arrowright_cyan_600.svg"
                          alt="arrow_right"
                        />
                      }
                    >
                      <div className="font-bold text-left text-lg text-cyan-600">
                        Explorer
                      </div>
                    </Button>
                  </div>
                  
                </div>
                <div className="bg-gray-400_01 flex flex-col items-center justify-center md:px-10 sm:px-5 px-[100px] py-10 rounded-[10px] w-full">
                  <div className="flex flex-col gap-[30px] items-center justify-start md:px-10 sm:px-5 px-[200px] w-full">
                    <div className="flex flex-col gap-2.5 items-center justify-start w-full">
                      <Text
                        className="sm:text-2xl md:text-[26px] text-[28px] text-gray-900 tracking-[-0.56px] w-auto"
                        size="txtManropeExtraBold28"
                      >
                        Pour vous inscrire
                      </Text>
                      <Text
                        className="leading-[32.00px] max-w-[600px] md:max-w-full text-center text-gray-900 text-lg"
                        size="txtManropeRegular18Gray900"
                      >
                        Cliquez sur le bouton ci-dessous pour vous inscrire
                      </Text>
                    </div>
                    {/* items-start justify-start */}
                    <div className="flex sm:flex-col flex-row gap-2 itemps-center justify-center w-full">
                      
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
                  
            <div className="flex flex-col gap-[18px] items-start justify-start w-[225px]">
              
            </div>
            <div className="flex flex-col gap-[18px] items-start justify-start w-[225px]">
              
            </div>
          </div>
        </div>
        </div>
        </div>
      </div>
    </>
  );
};
export default Homepage;
