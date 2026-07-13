import styled from "styled-components"
import Sidebar from "../dashboard/components/sideBar"
import Topbar from "../dashboard/components/topBar"
import { Button, Form } from "react-bootstrap"
import SimpleTable from "../../../assets/components/table"
import PopupModal from "../../../assets/components/popupmodal"
import { useState } from "react"
import { Label } from "recharts"


const  Container=styled.div`
display:flex;
width:100vw;
overflow-x:hidden;

`
const Content=styled.div`


`
const ContentBottom=styled.div`
background-color:var(--bg-gray);
height:calc(100vh - 60px);
`
const ContentTitle=styled.h2`
font-weight:500;
font-size:25px;
color:rgb(0,0,0,0.5);

`
const  ParameterUtilities=styled.div`
position:relative;

padding: 50px 30px;
display:flex;
width:100%;
align-items:center;
justify-content:space-between;
`
const UtilitiesLeft=styled.div`
display:flex;
flex-direction:column;

`
const UtilitiesRight=styled.div`
display:flex;
flex-direction:column;
gap:10px;
`
const tableHeadings=[
    {name:"Item Name", selector:"item_name"},
    {name:"Item Code", selector:"item_code"},
    
    {name:"Amount", selector:"amount"},
    {name:"Category", selector:"category"},
    {name:"Status", selector:"status"},
    {name:"Action", selector:"action"},
]
const parameterFields=[
    {name:"item_name", label:"Item Name", placeholder:"Input item name", required:true},
    {name:"item_code", label:"Item Code", placeholder:"Input item code", required:true},
    {
    name:"facility_type",
    label:"Facilty Type",
    required:true,
    type:"select",
    options:[
        {name:"A", value:"a"},
        {name:"B", value:"b"},
        {name:"c", value:"c"},
        {name:"c", value:"c"},
        {name:"E", value:"e"},
        {name:"F", value:"f"},
    ]
    },
    {name:"amount", label:"Amount", placeholder:"Input amount", type:"number", required:true},
    {name:"status", label:"status", placeholder:"Status", required:true ,type:"select", options:[
        {name:"Active", value :"active"},
        {name:"inactive", value :"Inactive"},
    ]},
]
const BillItemsPage=()=>{
    const  [modalShow, setModalShow]= useState(false);
    return(
<>
<PopupModal fields={parameterFields} show={modalShow} onHide={()=>{setModalShow(false)}}/>
        <Container>
            <Sidebar/>
            <Content className="main-content">
                <Topbar/>
                <ContentBottom>
                    <ParameterUtilities>
                    <UtilitiesLeft>
                        <ContentTitle>Bill items</ContentTitle>
                    <p>Manage bill items records </p>
                    <Form.Control style={{backgroundColor:"transparent", width:"300px"}} placeholder=" Search"/>
                    </UtilitiesLeft>

                    <UtilitiesRight>
                        <Button onClick={()=>{setModalShow(!modalShow)}} variant="primary">Add new</Button>
                        <p>0 records found</p>
                    </UtilitiesRight>
                    
                    
                
                    </ParameterUtilities>
                    
                    <SimpleTable headings={tableHeadings}/>
                </ContentBottom>
            </Content>
        
        
        </Container>
        </>
    )
}
export default BillItemsPage