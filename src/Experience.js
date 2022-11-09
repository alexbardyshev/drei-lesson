import { OrbitControls, TransformControls, PivotControls, Html, Text, Float } from "@react-three/drei";
import { useRef } from "react";

export default function Experience() {
    const sphereRef = useRef();
    const cubeRef = useRef();

    return <>
        <OrbitControls makeDefault />

        <directionalLight position={ [ 1, 2, 3 ] } intensity={ 1.5 } />
        <ambientLight intensity={ 0.5 } />

        <mesh ref={sphereRef} position-x={ - 2 }>
            <sphereGeometry />
            <meshStandardMaterial color="orange" />
            <Html
                position={[1, 1, 0]}
                wrapperClass="label"
                center
                distanceFactor={15}
                occlude={[sphereRef, cubeRef]}
            >
                This is a sphere
            </Html>
        </mesh>
        <TransformControls object={sphereRef} />

        <PivotControls
            anchor={[0, 0, 0]}
            depthTest={false}
            lineWidth={10}
            axisColors={["pink", "greenyellow", "purple"]}
            fixed={true}
            scale={100}
        >
        <mesh ref={cubeRef} position-x={ 2 } scale={ 1.5 }>
            <boxGeometry />
            <meshStandardMaterial color="mediumpurple" />
            <Html
                position={[1, 1, 0]}
                wrapperClass="label"
            >
                This is a cube
            </Html>
        </mesh>
        </PivotControls>

        <mesh position-y={ - 1 } rotation-x={ - Math.PI * 0.5 } scale={ 10 }>
            <planeGeometry />
            <meshStandardMaterial color="greenyellow" />
        </mesh>

        <Float
            speed={5}
            floatIntensity={2}
        >
            <Text
                font="./bangers-v20-latin-regular.woff"
                fontSize={0.5}
                color="salmon"
                position-y={2}
                maxWidth={1}
                textAlign="center"
            >
                I love fiber
                <meshNormalMaterial />
            </Text>
        </Float>
    </>
}
