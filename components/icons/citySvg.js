import * as React from "react"
import {Svg, Path} from 'react-native-svg';

const citySvg = ({focused=true, color="#00ffff",size}) => (
    <Svg
        width={19}
        height={22}
        fill="none"
    >
        <Path
            d="M11.513.001a9.004 9.004 0 0 0 9.97 5.877A4.501 4.501 0 0 1 18 9.888V17l2 .001v2H2v-2h2V9.888a4.503 4.503 0 0 1-3.484-4.01A9.004 9.004 0 0 0 10.488.002h1.025V.001ZM16 10H6v7h10v-7Zm-5-6.673-.11.155A11.012 11.012 0 0 1 4.4 7.736l-.358.073.673.19h12.573l.668-.19-.011-.002a11.01 11.01 0 0 1-6.836-4.326L11 3.326v.001Z"
            fill={color}
        />
    </Svg>
)

export default citySvg
