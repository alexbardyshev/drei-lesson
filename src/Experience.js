import { OrbitControls, TransformControls, PivotControls, Html } from "@react-three/drei";
import { useRef } from "react";

export default function Experience() {
    const cubeRef = useRef();

    return <>
        <OrbitControls makeDefault />

        <directionalLight position={ [ 1, 2, 3 ] } intensity={ 1.5 } />
        <ambientLight intensity={ 0.5 } />

        <mesh ref={cubeRef} position-x={ - 2 }>
            <sphereGeometry />
            <meshStandardMaterial color="orange" />
        </mesh>
        <TransformControls object={cubeRef} />

        <PivotControls
            anchor={[0, 0, 0]}
            depthTest={false}
            lineWidth={10}
            axisColors={["pink", "greenyellow", "purple"]}
            fixed={true}
            scale={100}
        >
        <mesh position-x={ 2 } scale={ 1.5 }>
            <boxGeometry />
            <meshStandardMaterial color="mediumpurple" />
        </mesh>
        </PivotControls>

        <mesh position-y={ - 1 } rotation-x={ - Math.PI * 0.5 } scale={ 10 }>
            <planeGeometry />
            <meshStandardMaterial color="greenyellow" />
        </mesh>

        <Html>
            <h1>Text</h1>
        </Html>
    </>
}
