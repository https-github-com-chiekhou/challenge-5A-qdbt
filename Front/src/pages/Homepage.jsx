/* eslint-disable react/no-unescaped-entities */
import { Button, Img, Input, List, Text } from "../components";
import Footer from "../components/Footer";
import Header1 from "../components/Header1";

const Homepage = () => {
  return (
    <>
      <Header1 />
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

        <div className="bg-gray-900 flex flex-col font-manrope items-center justify-center p-[120px] md:px-10 sm:px-5 w-full">
          <div className="flex flex-col md:gap-10 gap-[120px] items-center justify-start max-w-[1200px] mx-auto w-full">
            <div className="flex flex-col md:gap-10 gap-[60px] items-start justify-start w-full">
              <div className="flex sm:flex-col flex-row gap-5 items-center justify-start w-full">
                <Text
                  className="text-gray-900 text-xl tracking-[-0.40px] w-full"
                  size="txtManropeSemiBold20"
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
                  {/* <Input
                    name="input"
                    placeholder="Enter your Email"
                    className="font-semibold md:h-auto p-0 placeholder:text-gray-700 sm:h-auto text-left text-sm w-full"
                    wrapClassName="sm:flex-1 w-[78%] sm:w-full"
                    type="email"
                    shape="round"
                    color="gray_50_02"
                    size="sm"
                    variant="fill"
                  ></Input> */}
                  <Button
                    className="cursor-pointer font-semibold min-w-[150px] text-base text-center"
                    shape="round"
                    color="gray_900"
                    size="sm"
                    variant="fill"
                  >
                    Inscrivez-vous
                  </Button>
                </div>
              </div>
            </div>
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
                News & Consult
              </Text>
              <Button
                className="bg-transparent cursor-pointer flex h-[27px] items-center justify-center min-w-[124px]"
                rightIcon={
                  <Img
                    className="h-6 mb-[3px] ml-2"
                    src="images/img_arrowright_orange_a700.svg"
                    alt="arrow_right"
                  />
                }
              >
                <div className="font-bold text-left text-lg text-orange-A700">
                  Explore All
                </div>
              </Button>
            </div>
            <List
              className="sm:flex-col flex-row gap-6 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-start w-full"
              orientation="horizontal"
            >
              <div className="flex flex-1 flex-col gap-6 h-[487px] md:h-auto items-start justify-start w-full">
                <Img
                  className="md:h-auto h-full object-cover rounded-bl-[10px] rounded-br-[10px] w-full"
                  src="images/img_image_349x384.png"
                  alt="image"
                />
                <div className="flex flex-col gap-6 items-start justify-start w-full">
                  <Text
                    className="leading-[32.00px] md:max-w-full max-w-sm text-2xl md:text-[22px] text-white-A700 sm:text-xl tracking-[-0.48px]"
                    size="txtManropeBold24WhiteA700"
                  >
                    9 Easy-to-Ambitious DIY Projects to Improve Your Home
                  </Text>
                  <div className="flex flex-row gap-2 items-center justify-start w-full sm:w-full">
                    <Text
                      className="text-deep_orange-400 text-lg w-auto"
                      size="txtManropeBold18Deeporange400"
                    >
                      Read the Article
                    </Text>
                    <Img
                      className="h-6 w-6"
                      src="images/img_arrowright_deep_orange_400.svg"
                      alt="arrowright"
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-1 flex-col gap-6 h-[487px] md:h-auto items-start justify-start w-full">
                <Img
                  className="md:h-auto h-full object-cover rounded-bl-[10px] rounded-br-[10px] w-full"
                  src="images/img_image_4.png"
                  alt="image"
                />
                <div className="flex flex-col gap-6 items-start justify-start w-full">
                  <Text
                    className="leading-[32.00px] md:max-w-full max-w-sm text-2xl md:text-[22px] text-white-A700 sm:text-xl tracking-[-0.48px]"
                    size="txtManropeBold24WhiteA700"
                  >
                    Serie Shophouse Launch In July, Opportunity For Investors
                  </Text>
                  <div className="flex flex-row gap-2 items-center justify-start w-full sm:w-full">
                    <Text
                      className="text-deep_orange-400 text-lg w-auto"
                      size="txtManropeBold18Deeporange400"
                    >
                      Read the Article
                    </Text>
                    <Img
                      className="h-6 w-6"
                      src="images/img_arrowright_deep_orange_400.svg"
                      alt="arrowright"
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-1 flex-col gap-6 h-[487px] md:h-auto items-start justify-start w-full">
                <Img
                  className="md:h-auto h-full object-cover rounded-bl-[10px] rounded-br-[10px] w-full"
                  src="images/img_image_5.png"
                  alt="image"
                />
                <div className="flex flex-col gap-6 items-start justify-start w-full">
                  <Text
                    className="leading-[32.00px] md:max-w-full max-w-sm text-2xl md:text-[22px] text-white-A700 sm:text-xl tracking-[-0.48px]"
                    size="txtManropeBold24WhiteA700"
                  >
                    Looking for a New Place? Use This Time to Create Your
                    Wishlist
                  </Text>
                  <div className="flex flex-row gap-2 items-center justify-start w-full sm:w-full">
                    <Text
                      className="text-deep_orange-400 text-lg w-auto"
                      size="txtManropeBold18Deeporange400"
                    >
                      Read the Article
                    </Text>
                    <Img
                      className="h-6 w-6"
                      src="images/img_arrowright_deep_orange_400.svg"
                      alt="arrowright"
                    />
                  </div>
                </div>
              </div>
            </List>
          </div>
          <div className="bg-gray-400_01 flex flex-col items-center justify-center md:px-10 sm:px-5 px-[100px] py-10 rounded-[10px] w-full">
            <div className="flex flex-col gap-[30px] items-center justify-start md:px-10 sm:px-5 px-[200px] w-full">
              <div className="flex flex-col gap-2.5 items-center justify-start w-full">
                <Text
                  className="sm:text-2xl md:text-[26px] text-[28px] text-gray-900 tracking-[-0.56px] w-auto"
                  size="txtManropeExtraBold28"
                >
                  For Recent Update, News.
                </Text>
                <Text
                  className="leading-[32.00px] max-w-[600px] md:max-w-full text-center text-gray-900 text-lg"
                  size="txtManropeRegular18Gray900"
                >
                  We helps businesses customize, automate and scale up their ad
                  production and delivery.
                </Text>
              </div>
              <div className="flex sm:flex-col flex-row gap-2 items-start justify-start w-full">
                <Input
                  name="input"
                  placeholder="Enter your Email"
                  className="font-semibold md:h-auto p-0 placeholder:text-gray-700 sm:h-auto text-left text-sm w-full"
                  wrapClassName="sm:flex-1 w-[78%] sm:w-full"
                  type="email"
                  shape="round"
                  color="gray_50_02"
                  size="sm"
                  variant="fill"
                ></Input>
                <Button
                  className="cursor-pointer font-semibold min-w-[126px] text-base text-center"
                  shape="round"
                  color="gray_900"
                  size="sm"
                  variant="fill"
                >
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default Homepage;
