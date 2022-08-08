import * as React from "react"
import {Path, Svg} from "react-native-svg";

export const CursorSvg = ({color="#999", size=22}) => (
    <Svg
        width={16}
        height={16}
        fill="none"
        size={size}
    >
        <Path
            d="M16 7H3.83l5.59-5.59L8 0 0 8l8 8 1.41-1.41L3.83 9H16V7Z"
            fillOpacity={0.54}
            fill={color}/>
    </Svg>
)


