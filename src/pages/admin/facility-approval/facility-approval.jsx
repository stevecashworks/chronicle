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
    {name:"Facility Name", selector:"facility_name"},
    {name:"Approval Status", selector:"approval_status"},
    {name:"Approved By", selector:"approved_by"},
    {name:"Date", selector:"date"},
    {name:"Remarks", selector:"remarks"},
    {name:"Action", selector:"status"},
]
const parameterFields=[
    {name:"facility_name", label:"Facility Name", placeholder:"Input facility name", required:true},
    {name:"approval_status", label:"Approval Status",  required:true,
        type:"select",
        options:[
            {name:"Pending",value:"pending"},
            {name:"Approved",value:"approved"},
            {name:"Rejected",value:"rejected"},
        ]
    },
    {name:"approved_by", label:"Approved By",  placeholder:"Enter approved by", required:true},
    {name:"approved_date", label:"Date Approved",  placeholder:"Enter approved date",type:"date", required:true},
    {name:"remarks", label:"Remarks", required:true, type:"textarea" }
]
const FacilityApprovalParameterPage=()=>{
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
                        <ContentTitle>Facility Approval</ContentTitle>
                    <p>Manage facility approval records </p>
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
export default FacilityApprovalParameterPage