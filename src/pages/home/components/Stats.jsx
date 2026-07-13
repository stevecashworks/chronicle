import {Row,Col} from "react-bootstrap";
import styled from "styled-components";
import {FaHospital,FaFlag,FaSmile,FaClock} from "react-icons/fa";

const Wrap=styled.section`
margin-top:-50px;
position:relative;
z-index:2;
`;

const Card=styled.div`
background:white;
border-radius:15px;
padding:25px;
box-shadow:0 10px 40px rgba(0,0,0,.08);
display:flex;
align-items:center;
gap:20px;
height:100%;
`;

const Icon=styled.div`
width:60px;
height:60px;
border-radius:50%;
background:#E5F7F3;
display:flex;
justify-content:center;
align-items:center;
font-size:24px;
color:#1B9C83;
`;

export default function Stats(){

const data=[

{
icon:<FaHospital/>,
title:"500k+",
text:"Hospitals"
},

{
icon:<FaFlag/>,
title:"32+",
text:"Countries"
},

{
icon:<FaSmile/>,
title:"98%",
text:"Satisfied Users"
},

{
icon:<FaClock/>,
title:"Time Saving",
text:"Automation"
}

];

return(

<Wrap>

<div className="container">

<Row>

{
data.map((item,index)=>

<Col md={6} lg={3} key={index} className="mb-4">

<Card>

<Icon>

{item.icon}

</Icon>

<div>

<h4>{item.title}</h4>

<p>{item.text}</p>

</div>

</Card>

</Col>

)

}

</Row>

</div>

</Wrap>

)

}