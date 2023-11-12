import React from "react";

import { Img, Text } from "../../components";

const Footer = (props) => {
  return (
    <>
      <footer className={props.className}>
        <div className="flex flex-col md:gap-10 gap-[120px] items-start justify-start w-full">
          <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start w-full">
            <div className="flex flex-col gap-[43px] items-start justify-start w-[341px]">
              <div className="flex flex-row gap-[11px] h-10 md:h-auto items-center justify-start w-[341px]">
                <Img
                  className="h-10 w-10"
                  src="images/img_home.svg"
                  alt="home_One"
                />
                <Text
                  className="text-orange-A700 text-xl w-auto"
                  size="txtMarkoOneRegular20"
                >
                  Relasto
                </Text>
              </div>
              <div className="flex flex-col gap-7 h-[194px] md:h-auto items-start justify-start w-full">
                <Text
                  className="leading-[25.00px] text-base text-gray-900"
                  size="txtManropeSemiBold16Gray900"
                >
                  <>
                    59 Bervely Hill Ave, Brooklyn Town,
                    <br />
                    New York, NY 5630, CA, US
                  </>
                </Text>
                <div className="flex flex-col gap-1 items-start justify-start w-auto">
                  <Text
                    className="text-base text-gray-900 w-auto"
                    size="txtManropeSemiBold16Gray900"
                  >
                    +(123) 456-7890
                  </Text>
                  <Text
                    className="text-base text-gray-900 w-auto"
                    size="txtManropeSemiBold16Gray900"
                  >
                    info@mail.com
                  </Text>
                </div>
                <div className="flex flex-row gap-3 items-start justify-start w-full">
                  <div className="flex flex-col h-[30px] items-center justify-start w-[30px]">
                    <Img
                      className="h-[30px] w-[30px]"
                      src="images/img_plus.svg"
                      alt="plus"
                    />
                  </div>
                  <div className="flex flex-col h-[30px] items-center justify-start w-[30px]">
                    <Img
                      className="h-[30px] w-[30px]"
                      src="images/img_twitter.svg"
                      alt="twitter"
                    />
                  </div>
                  <Img
                    className="h-[30px] w-[30px]"
                    src="images/img_instagram.svg"
                    alt="instagram"
                  />
                  <Img
                    className="h-[30px] w-[30px]"
                    src="images/img_linkedin.svg"
                    alt="linkedin"
                  />
                  <div className="flex flex-col h-[30px] items-center justify-start w-[30px]">
                    <Img
                      className="h-[30px] w-[30px]"
                      src="images/img_youtube.svg"
                      alt="youtube"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-1 md:flex-col flex-row md:gap-10 gap-[77px] h-[216px] md:h-auto items-start justify-start w-full">
              <div className="flex flex-1 flex-col gap-5 items-start justify-start w-full">
                <Text
                  className="text-gray-900 text-lg w-full"
                  size="txtManropeBold18Gray900"
                >
                  Features
                </Text>
                <ul className="flex flex-col gap-3.5 items-start justify-start w-full common-column-list">
                  <li>
                    <Text
                      className="text-base text-gray-900"
                      size="txtManropeSemiBold16Gray900"
                    >
                      Home v1
                    </Text>
                  </li>
                  <li>
                    <Text
                      className="text-base text-gray-900"
                      size="txtManropeSemiBold16Gray900"
                    >
                      Home v2
                    </Text>
                  </li>
                  <li>
                    <Text
                      className="text-base text-gray-900"
                      size="txtManropeSemiBold16Gray900"
                    >
                      About
                    </Text>
                  </li>
                  <li>
                    <Text
                      className="text-base text-gray-900"
                      size="txtManropeSemiBold16Gray900"
                    >
                      Contact
                    </Text>
                  </li>
                  <li>
                    <Text
                      className="text-base text-gray-900"
                      size="txtManropeSemiBold16Gray900"
                    >
                      Search
                    </Text>
                  </li>
                </ul>
              </div>
              <div className="flex flex-1 flex-col gap-5 items-start justify-start w-full">
                <Text
                  className="text-gray-900 text-lg w-full"
                  size="txtManropeBold18Gray900"
                >
                  Information
                </Text>
                <ul className="flex flex-col gap-3.5 items-start justify-start w-full common-column-list">
                  <li>
                    <Text
                      className="text-base text-gray-900"
                      size="txtManropeSemiBold16Gray900"
                    >
                      Listing v1
                    </Text>
                  </li>
                  <li>
                    <Text
                      className="text-base text-gray-900"
                      size="txtManropeSemiBold16Gray900"
                    >
                      Listing v2
                    </Text>
                  </li>
                  <li>
                    <Text
                      className="text-base text-gray-900"
                      size="txtManropeSemiBold16Gray900"
                    >
                      Property Details
                    </Text>
                  </li>
                  <li>
                    <Text
                      className="text-base text-gray-900"
                      size="txtManropeSemiBold16Gray900"
                    >
                      <>Agent List</>
                    </Text>
                  </li>
                  <li>
                    <Text
                      className="text-base text-gray-900"
                      size="txtManropeSemiBold16Gray900"
                    >
                      Agent Profile
                    </Text>
                  </li>
                </ul>
              </div>
              <div className="flex flex-1 flex-col gap-5 items-start justify-start w-full">
                <Text
                  className="text-gray-900 text-lg w-full"
                  size="txtManropeBold18Gray900"
                >
                  Documentation{" "}
                </Text>
                <ul className="flex flex-col gap-3.5 items-start justify-start w-full common-column-list">
                  <li>
                    <Text
                      className="text-base text-gray-900"
                      size="txtManropeSemiBold16Gray900"
                    >
                      Blog
                    </Text>
                  </li>
                  <li>
                    <Text
                      className="text-base text-gray-900"
                      size="txtManropeSemiBold16Gray900"
                    >
                      FAQ
                    </Text>
                  </li>
                  <li>
                    <Text
                      className="text-base text-gray-900"
                      size="txtManropeSemiBold16Gray900"
                    >
                      <>Privacy Policy</>
                    </Text>
                  </li>
                  <li>
                    <Text
                      className="text-base text-gray-900"
                      size="txtManropeSemiBold16Gray900"
                    >
                      License
                    </Text>
                  </li>
                </ul>
              </div>
              <div className="flex flex-1 flex-col gap-5 items-start justify-start w-full">
                <Text
                  className="text-gray-900 text-lg w-full"
                  size="txtManropeBold18Gray900"
                >
                  Others
                </Text>
                <ul className="flex flex-col gap-3.5 items-start justify-start w-full common-column-list">
                  <li>
                    <Text
                      className="text-base text-gray-900"
                      size="txtManropeSemiBold16Gray900"
                    >
                      Log in
                    </Text>
                  </li>
                  <li>
                    <Text
                      className="text-base text-gray-900"
                      size="txtManropeSemiBold16Gray900"
                    >
                      Enter OTP
                    </Text>
                  </li>
                  <li>
                    <Text
                      className="text-base text-gray-900"
                      size="txtManropeSemiBold16Gray900"
                    >
                      New Password
                    </Text>
                  </li>
                  <li>
                    <Text
                      className="text-base text-gray-900"
                      size="txtManropeSemiBold16Gray900"
                    >
                      Reset Password
                    </Text>
                  </li>
                  <li>
                    <Text
                      className="text-base text-gray-900"
                      size="txtManropeSemiBold16Gray900"
                    >
                      Create Account
                    </Text>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <Text
            className="text-base text-gray-900 w-full"
            size="txtManropeSemiBold16Gray900"
          >
            © 2022. All rights reserved.
          </Text>
        </div>
      </footer>
    </>
  );
};

Footer.defaultProps = {};

export default Footer;
