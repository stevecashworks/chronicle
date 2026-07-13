import {Navbar,Nav,Container} from "react-bootstrap";
import {Link} from "react-router-dom";
import styled from "styled-components";

const StyledNav=styled(Navbar)`
background:white;
padding:20px 0;
`;

const Logo=styled(Link)`
font-size:28px;
font-weight:700;
text-decoration:none;
color:#111;
`;

const Menu=styled(Link)`
margin-left:30px;
text-decoration:none;
color:#444;
font-weight:500;

:hover{
color:#1B9C83;
}
`;

export default function Navigation(){

return(

<StyledNav expand="lg">

<Container>

<Logo to="/">WeCare</Logo>

<Navbar.Toggle/>

<Navbar.Collapse>

<Nav className="ms-auto">

<Menu to="/">Features</Menu>

<Menu to="/">Case Study</Menu>

<Menu to="/">Pricing</Menu>

<Menu to="/">Community</Menu>

<Menu to="/">About</Menu>

</Nav>

</Navbar.Collapse>

</Container>

</StyledNav>

)

}