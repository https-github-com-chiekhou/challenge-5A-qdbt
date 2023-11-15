import React from "react";

import { Button, Img, List, Text } from "../../components";

const Header1 = (props) => {
  return (
    <>
      <header className={props.className}>
        <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-full">
          <div className="header-row my-px">
            <div className="flex flex-row gap-[11px] items-center justify-start">
              <Img className="h-10 w-10" src="./src/assets/logo/logo.png" alt="qdbt logo" />
              <Text
                className="text-cyan-800 text-xl w-auto"
                size="txtMarkoOneRegular20"
              >
                QDBT
              </Text>
            </div>
            <div className="mobile-menu">
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
          <div className="flex sm:flex-1 sm:flex-col flex-row sm:hidden items-center justify-between w-[492px] sm:w-full">
            <List
              className="sm:flex-col flex-row gap-10 grid grid-cols-3"
              orientation="horizontal"
            >
              <div className="flex flex-row gap-1.5 items-start justify-start w-[77px]">
                <Text
                  className="text-base text-gray-900 w-auto"
                  size="txtManropeSemiBold16Gray900"
                >
                  Accueil
                </Text>
                <Img
                  className="h-4 w-4"
                  src="images/img_arrowdown.svg"
                  alt="arrowdown"
                />
              </div>
              <div className="flex flex-row gap-1.5 items-start justify-start w-[77px]">
                <Text
                  className="text-base text-gray-900 w-auto"
                  size="txtManropeSemiBold16Gray900"
                >
                  Listing
                </Text>
                <Img
                  className="h-4 w-4"
                  src="images/img_arrowdown.svg"
                  alt="arrowdown"
                />
              </div>
              <div className="flex flex-row gap-1.5 items-start justify-start w-[77px]">
                <Text
                  className="text-base text-gray-900 w-auto"
                  size="txtManropeSemiBold16Gray900"
                >
                  Agents
                </Text>
                <Img
                  className="h-4 w-4"
                  src="images/img_arrowdown.svg"
                  alt="arrowdown"
                />
              </div>
            </List>
            <Text
              className="text-base text-center text-gray-900 w-auto"
              size="txtManropeSemiBold16Gray900"
            >
              Property{" "}
            </Text>
            <Text
              className="text-base text-gray-900 w-auto"
              size="txtManropeSemiBold16Gray900"
            >
              Blog
            </Text>
          </div>
          <div className="flex flex-row h-[42px] md:h-auto sm:hidden items-center justify-start w-[228px]">
            {/* <Button
              className="bg-transparent cursor-pointer flex items-center justify-center min-w-[94px]"
              leftIcon={
                <Img
                  className="h-6 mb-px mr-2"
                  src="images/img_search.svg"
                  alt="search"
                />
              }
            >
              <div className="font-bold font-manrope text-gray-900 text-left text-lg">
                Search
              </div>
            </Button> */}
            <a href="https://seinfeldquotes.com" class="text-cyan-800 visited:text-cyan-800 hover:text-cyan-800">
              Pour votre entreprise
            </a>
            <p>
              ||
            </p>
            <a href="https://seinfeldquotes.com" class="text-purple-400 visited:text-purple-400 hover:text-purple-400">
              S'identifier
            </a>
          </div>
        </div>
      </header>
    </>
  );
};

Header1.defaultProps = {};

export default Header1;
