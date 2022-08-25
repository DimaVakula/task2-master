import {
    BlurMask,
    Canvas,
    RoundedRect, runSpring,
    SweepGradient, useValue,
    vec,
    Group
} from '@shopify/react-native-skia';
import React from 'react';

type BackgroundGradientProps = {
    width: number;
    height: number;
};

export const canvasPadding = 32

const BackgroundGradient: React.FC<BackgroundGradientProps> = React.memo(
    ({width, height}) => {
        // const canvasPadding = 40;
        // const rValue = useSharedValue(0);
        // const skValue = useValue(0);

        // useEffect(() => {
        //   rValue.value = withRepeat(withTiming(10, {duration: 2000}), -1, true);
        // }, [rValue]);
        //
        // useSharedValueEffect(() => {
        //   skValue.current = rValue.value;
        // }, rValue);
        const position = useValue(0);
        const changePosition = () => runSpring(position, 100);


        return (
            <Canvas
                style={{
                    width: width,
                    height: height,
                }}>
                <RoundedRect
                    x={canvasPadding / 2}
                    y={canvasPadding / 2}
                    width={width - canvasPadding}
                    height={height - canvasPadding}
                    color={'white'}
                    r={20}>
                        <SweepGradient
                            transform={[{rotate: 0.001  }]}
                            c={vec((width) / 2, (height) / 2)}
                            colors={['cyan', 'magenta', 'yellow', 'cyan']}
                        />

                    <BlurMask blur={canvasPadding / 4} style={'solid'}/>
                </RoundedRect>
            </Canvas>
        );
    },
);

export {BackgroundGradient};
