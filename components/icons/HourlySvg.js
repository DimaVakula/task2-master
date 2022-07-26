import {Path, Svg} from "react-native-svg";
import * as React from "react";

export const HourlySvg = ({color="#00ffff", size=22}) => (
    <Svg
        width={20}
        height={20}
        fill="none"
        size={size}
    >
        <Path
            d="M10 20C4.477 20 0 15.523 0 10S4.477 0 10 0s10 4.477 10 10-4.477 10-10 10Zm0-2a8 8 0 1 0 0-16.001A8 8 0 0 0 10 18Zm1-8h4v2H9V5h2v5Z"
            fill={color}
        />
    </Svg>
)