import { IconStyleProp } from "./types";
import React from "react";
import Svg, { Path } from "react-native-svg";

const RightArrowIcon = ({ size, color }: IconStyleProp) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 5 8" fill="none">
      <Path
        d="M4.98337 4.00001C4.98337 4.0889 4.9667 4.1749 4.93337 4.25801C4.90003 4.34156 4.85559 4.41112 4.80003 4.46667L1.73337 7.53334C1.61114 7.65556 1.45559 7.71667 1.2667 7.71667C1.07781 7.71667 0.922255 7.65556 0.800032 7.53334C0.67781 7.41112 0.616699 7.25556 0.616699 7.06667C0.616699 6.87779 0.67781 6.72223 0.800032 6.60001L3.40003 4.00001L0.800032 1.40001C0.67781 1.27779 0.616699 1.12223 0.616699 0.933341C0.616699 0.744452 0.67781 0.588897 0.800032 0.466675C0.922254 0.344453 1.07781 0.283341 1.2667 0.283341C1.45559 0.283341 1.61114 0.344453 1.73337 0.466675L4.80003 3.53334C4.8667 3.60001 4.91381 3.67223 4.94137 3.75001C4.96937 3.82779 4.98337 3.91112 4.98337 4.00001Z"
        fill={color}
      />
    </Svg>
  );
};

export default RightArrowIcon;
