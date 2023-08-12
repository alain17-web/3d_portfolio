import { styled } from "styled-components";

const Section = styled.div`
    display: flex;
    justify-content: center;
`;

const Container = styled.div`
    width: 1400px;
    background-color: rebeccapurple;
`;

const Links = styled.div`

`;

const Logo = styled.img`

`;

const List = styled.ul`

`;

const ListItem = styled.li`

`;

const Icons = styled.div`

`;
const Icon = styled.img`

`;

const Button = styled.button`

`;



const Navbar = () => {
    return ( 
        <Section>
            <Container>
                <Links>
                    <Logo src="./img/logo.png" alt="logo"/>
                    <List>
                        <ListItem>Home</ListItem>
                        <ListItem>Studio</ListItem>
                        <ListItem>Works</ListItem>
                        <ListItem>Contact</ListItem>
                    </List>
                </Links>
                <Icons>
                    <Icon src="./img/search.png"/>
                    <Button>Hire now</Button>
                </Icons>
            </Container>
        </Section>
     );
}
 
export default Navbar;