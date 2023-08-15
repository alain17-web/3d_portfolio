import { OrbitControls, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber"
import Mac from "./Mac";
import { Suspense } from "react";
import { styled } from "styled-components";

const Desc = styled.div`
    width: 200px;
    height: 70px;
    padding: 20px;
    background-color: lightgray;
    border-radius: 10px;
    position: absolute;
    top: 100px;
    right: 100px;
`;

const ProductDesign = () => {
    return (
        <>
            <Canvas>
                <Suspense fallback={null}>
                    <Stage environment="city" intensity={0.6}>
                        <Mac />
                    </Stage>
                    <OrbitControls enableZoom={false} autoRotate />
                </Suspense>
            </Canvas>
            <Desc>
                We design products with a strong focus on both world class design and
                ensuring your product is a market success.
            </Desc>
        </>
    );
}

export default ProductDesign;