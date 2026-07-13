import {Row,Col} from "react-bootstrap";
import styled from "styled-components";
import {FaChartBar,FaUserMd,FaBoxes} from "react-icons/fa";

const Section=styled.section`
padding:120px 0;
`;

const Heading=styled.h2`
font-size:46px;
font-weight:700;
`;

const Card=styled.div`
background:white;
padding:25px;
border-radius:20px;
box-shadow:0 10px 30px rgba(0,0,0,.07);
height:100%;
transition:.35s;

:hover{

transform:translateY(-10px);

}
`;

const Icon=styled.div`
font-size:45px;
color:#1B9C83;
margin-bottom:20px;
`;

export default function Features(){

const features=[

{
icon:<FaUserMd/>,
title:"Centralized Patient Records",
text:"Store all patient records securely and access them instantly."
},

{
icon:<FaChartBar/>,
title:"Perfect Data Visualization",
text:"Beautiful charts and dashboards to analyze your clinic."
},

{
icon:<FaBoxes/>,
title:"Medication Tracking",
text:"Monitor supplies and medications in real time."
}

];

return(

<Section>

<div className="container">

<Row className="mb-5">

<Col lg={7}>

<p style={{color:"#1B9C83",fontWeight:700}}>

OUR KEY FEATURES

</p>

<Heading>

Our Features that Streamline Healthcare Management

</Heading>

</Col>

</Row>

<Row>

{

features.map((feature,index)=>

<Col lg={4} key={index} className="mb-4">

<Card>

<Icon>

{feature.icon}

</Icon>

<h4>

{feature.title}

</h4>

<p>

{feature.text}

</p>

</Card>

</Col>

)

}

</Row>

</div>

</Section>

)

}