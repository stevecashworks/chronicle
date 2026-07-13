import {Row,Col,Form} from "react-bootstrap";
import styled from "styled-components";
import {FaArrowRight} from "react-icons/fa";

const HeroSection=styled.section`
padding:80px 0;
background:#13243D;
color:white;
`;

const Small=styled.p`
letter-spacing:4px;
color:#78d3c1;
text-transform:uppercase;
`;

const Title=styled.h1`
font-size:64px;
font-weight:700;
line-height:1.1;

@media(max-width:768px){

font-size:40px;

}
`;

const Description=styled.p`
margin:25px 0;
opacity:.8;
`;

const Input=styled(Form.Control)`
height:60px;
border-radius:10px;
`;

const Button=styled.button`
height:60px;
padding:0 35px;
border:none;
background:#1B9C83;
color:white;
border-radius:10px;
margin-left:15px;
`;

const Dashboard=styled.div`
height:480px;
background:white;
border-radius:20px;
box-shadow:0 40px 60px rgba(0,0,0,.2);
display:flex;
justify-content:center;
align-items:center;
color:#999;
font-size:30px;
`;

export default function Hero(){

return(

<HeroSection>

<div className="container">

<Row className="align-items-center">

<Col lg={5}>

<Small>
ENHANCING PATIENT CARE
</Small>

<Title>

Smart Solutions

for Healthcare

Management

</Title>

<Description>

Access patient data, monitor appointments,
improve collaboration and manage healthcare
operations effortlessly.

</Description>

<div className="d-flex">

<Input placeholder="Your Email Address"/>

<Button>

Get Started

<FaArrowRight className="ms-2"/>

</Button>

</div>

</Col>

<Col lg={7} className="mt-5 mt-lg-0">

<Dashboard>

Dashboard Image

</Dashboard>

</Col>

</Row>

</div>

</HeroSection>

)

}