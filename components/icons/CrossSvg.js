import * as React from "react"
import {Path, Svg} from "react-native-svg";

export const CrossSvg = ({color="#00ffff", size=22}) => (
    <Svg
        width={18}
        height={18}
        fill="none"
        size={size}
    >
        <Path
            d="M9 17.333A8.333 8.333 0 1 1 9 .667a8.333 8.333 0 1 1 0 16.666Zm0-9.511L6.643 5.464l-1.179 1.18L7.822 9l-2.358 2.357 1.18 1.179L9 10.178l2.357 2.358 1.179-1.18L10.178 9l2.358-2.357-1.18-1.179L9 7.822Z"
            fill={color}
        />
    </Svg>
)
