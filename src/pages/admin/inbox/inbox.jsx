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
const MessagesCon=styled.div`
width:90%;
margin:20px auto;
height:300px;
background-color:white;
// temp styles
display:flex;
align-items:center;
justify-content:center;
`
const tableHeadings=[
    {name:"State Code", selector:"state_code"},
    {name:"State Name", selector:"state_name"},
    {name:"Description", selector:"description"},
    {name:"Status", selector:"status"},
    {name:"Action", selector:"status"},
]
const parameterFields=[
    {name:"state_code", label:"State code", placeholder:"Input state code", required:true},
    {name:"state_name", label:"State Name", placeholder:"Input state name", required:true},
    {name:"description", label:"Description", type:"textarea", placeholder:"Input description", required:false},
    {name:"status", label:"status", placeholder:"Status", required:true ,type:"select", options:[
        {name:"Active", value :"active"},
        {name:"inactive", value :"Inactive"},
    ]},
]
const InboxPage=()=>{
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
                        <ContentTitle>Inbox</ContentTitle>
                    </UtilitiesLeft>

                    
                    
                
                    </ParameterUtilities>
                    
                    <MessagesCon> messages will be populated here</MessagesCon>
                </ContentBottom>
            </Content>
        
        
        </Container>
        </>
    )
}
export default InboxPage