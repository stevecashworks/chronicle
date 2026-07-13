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
    {name:"Group Name", selector:"group_name"},
    {name:"Description", selector:"description"},
    {name:"Status", selector:"status"},
    {name:"Action", selector:"status"},
]
const parameterFields=[
    {name:"name", label:"Medical Group Name", placeholder:"Input medical group name", required:true},
    {name:"description", label:"Description", type:"textarea", placeholder:"Input description", required:false},
    {name:"status", label:"status", placeholder:"Status", required:true ,type:"select", options:[
        {name:"Active", value :"active"},
        {name:"inactive", value :"Inactive"},
    ]},
]
const MedicalGroupParameterPage=()=>{
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
                        <ContentTitle>Medical Facility Category</ContentTitle>
                    <p>Manage medical Category records </p>
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
export default MedicalGroupParameterPage