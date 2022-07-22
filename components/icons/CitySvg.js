import * as React from "react"
import {Svg, Path} from 'react-native-svg';

const СitySvg = ({color="#00ffff"}) => (
    <Svg
        width={22}
        height={19}
        fill="none"
    >
        <Path
            d="M11.513.001a9.004 9.004 0 0 0 9.97 5.877A4.501 4.501 0 0 1 18 9.888V17l2 .001v2H2v-2h2V9.888a4.503 4.503 0 0 1-3.484-4.01A9.004 9.004 0 0 0 10.488.002h1.025V.001ZM16 10H6v7h10v-7Zm-5-6.673-.11.155A11.012 11.012 0 0 1 4.4 7.736l-.358.073.673.19h12.573l.668-.19-.011-.002a11.01 11.01 0 0 1-6.836-4.326L11 3.326v.001Z"
            fill={color}
        />
    </Svg>
)

const DailySvg = (props) => (
    <svg
        width={20}
        height={20}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <path
            d="M15 2h4a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h4V0h2v2h6V0h2v2Zm3 8H2v8h16v-8Zm-5-6H7v2H5V4H2v4h16V4h-3v2h-2V4Zm-9 8h2v2H4v-2Zm5 0h2v2H9v-2Zm5 0h2v2h-2v-2Z"
            fill="#000"
        />
    </svg>
)

export default SvgComponent



export default СitySvg
