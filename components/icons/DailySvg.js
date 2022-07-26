import {Path, Svg} from "react-native-svg";
import * as React from "react";

export const DailySvg = ({color="#00ffff", size=22}) => (
    <Svg
        width={20}
        height={20}
        fill="none"
        size={size}
    >
        <Path
            d="M15 2h4a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h4V0h2v2h6V0h2v2Zm3 8H2v8h16v-8Zm-5-6H7v2H5V4H2v4h16V4h-3v2h-2V4Zm-9 8h2v2H4v-2Zm5 0h2v2H9v-2Zm5 0h2v2h-2v-2Z"
            fill={color}
        />
    </Svg>
)