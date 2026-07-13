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
    {name:"Bill Number", selector:"bill_number"},
    {name:"Approved By", selector:"approved_by"},
    {name:"Approval Status", selector:"approval_status"},
    {name:"Date", selector:"date"},
    {name:"Action", selector:"status"},
]
const parameterFields=[
    {name:"bill_number", label:"Bill Number", placeholder:"Input bill number", required:true},
    {name:"approved_by", label:"Approved By", placeholder:"Input approved by", required:true},
    {name:"date", label:"Approved Date", type:"date", placeholder:"approved date", required:true},
    {name:"approval_status", label:"Approval Status", placeholder:"Approval status", required:true ,type:"select", options:[
        {name:"Pending", value :"pending"},
        {name:"Approved", value :"approved"},
        {name:"Rejected", value :"rejected"},
    ]},
]
const BillApprovalPage=()=>{
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
                        <ContentTitle>Bill Approval</ContentTitle>
                    <p>Manage bill approval records </p>
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
export default BillApprovalPage