import React from "react";
import PropTypes from "prop-types";

const shapes = { circle: "rounded-[50%]", round: "rounded-[10px]" };
const variants = {
  fill: {
    white_A700: "bg-white-A700 text-gray-900",
    gray_300: "bg-gray-300 text-gray-900",
    gray_900: "bg-gray-900 text-white-A700",
  },
  outline: {
    gray_700: "border border-gray-700 border-solid text-gray-900",
    gray_600: "border border-gray-600 border-solid text-gray-900",
    blue_gray_100_02:
      "border border-blue_gray-100_02 border-solid text-gray-700",
    blue_gray_100_01:
      "border border-blue_gray-100_01 border-solid text-gray-900",
    blue_gray_100: "border border-blue_gray-100 border-solid text-gray-900",
  },
};
const sizes = { xs: "p-2.5", sm: "p-[13px]", md: "p-[17px]" };

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape = "",
  size = "",
  variant = "",
  color = "",
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${(shape && shapes[shape]) || ""} ${
        (size && sizes[size]) || ""
      } ${(variant && variants[variant]?.[color]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  shape: PropTypes.oneOf(["circle", "round"]),
  size: PropTypes.oneOf(["xs", "sm", "md"]),
  variant: PropTypes.oneOf(["fill", "outline"]),
  color: PropTypes.oneOf([
    "white_A700",
    "gray_300",
    "gray_900",
    "gray_700",
    "gray_600",
    "blue_gray_100_02",
    "blue_gray_100_01",
    "blue_gray_100",
  ]),
};

export { Button };
