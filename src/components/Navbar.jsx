import { styled } from "styled-components";

const Section = styled.div`
    display: flex;
    justify-content: center;

    @media only screen and (max-width: 768px){
        width: 100%;
    }
`;

const Container = styled.div`
    width: 1400px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 0;

    @media only screen and (max-width: 768px){
        width: 100%;
    }
`;

const Links = styled.div`
    display: flex;
    align-items: center;
    gap: 50px;
`;

const Logo = styled.img`
    height: 50px;
    padding: 10px;
`;

const List = styled.ul`
    display: flex;
    gap: 20px;
    list-style: none;

    @media only screen and (max-width: 768px){
        display: none;
    }
`;

const ListItem = styled.li`
    cursor: pointer;
`;

const Icons = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
`;

const Icon = styled.img`
    width: 20px;
    cursor: pointer;
`;

const Button = styled.button`
    width: 100px;
    padding: 10px;
    background-color: #da4ea2;
    color: white;
    border: none;
    cursor: pointer;
    border-radius: 5px;
`;



const Navbar = () => {
    return (
        <Section>
            <Container>
                <Links>
                    <Logo src="./img/logo.png" alt="logo" />
                    <List>
                        <ListItem>Home</ListItem>
                        <ListItem>Studio</ListItem>
                        <ListItem>Works</ListItem>
                        <ListItem>Contact</ListItem>
                    </List>
                </Links>
                <Icons>
                    <Icon src="./img/search.png" />
                    <Button>Hire now</Button>
                </Icons>
            </Container>
        </Section>
    );
}

export default Navbar;