import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import styled from "styled-components";
import Cube from "./Cube";


const Section = styled.div`
    height: 100vh;
    scroll-snap-align: center;
    display: flex;
    justify-content: center;
  `;

const Container = styled.div`
    height: 100vh;
    scroll-snap-align: center;
    width: 1400px;
    display: flex;
    justify-content: space-between;
`;

const Left = styled.div`
   flex: 1; 
   
`;




const Right = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 20px;
`;

const Title = styled.h1`
    font-size: 74px;
`;

const WhoWeAre = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
`;

const Line = styled.img`
    height: 5px;
`;

const Subtitle = styled.h2`
    color: #da4ea2;
`;

const Desc = styled.p`
    font-size: 24px;
    color: lightgray;
`;

const Button = styled.button`
    background-color: #da4ea2;
    color: white;
    font-weight: 500;
    width: 120px;
    padding: 10px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
`;






const Who = () => {
    return (
        <Section>
            <Container>
                <Left>
                    <Canvas camera={{position: [5,5,5],fov:25}}>
                        <OrbitControls enableZoom={false} autoRotate={true}/>
                        <ambientLight intensity={1} />
                        <directionalLight position={[3, 2, 1]} />
                        <Cube />
                    </Canvas>
                </Left>
                <Right>
                    <Title>Think outside the square space</Title>
                    <WhoWeAre>
                        <Line src="./img/line.png" />
                        <Subtitle>Who we are</Subtitle>
                    </WhoWeAre>
                    <Desc>A creative group of designers and developers with a passion for the arts.</Desc>
                    <Button>See our works</Button>

                </Right>
            </Container>
        </Section>
    );
}

export default Who;