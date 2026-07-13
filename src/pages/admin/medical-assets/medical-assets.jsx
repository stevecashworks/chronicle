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
    {name:"Asset Name", selector:"asset_name"},
    {name:"Asset Category", selector:"asset_category"},
    {name:"Facility Type", selector:"asset_category"},
    {name:"quantity", selector:"asset_category"},
    {name:"Description", selector:"description"},
    {name:"Status", selector:"status"},
    {name:"Action", selector:"status"},
]
const parameterFields=[
    
    {name:"medical_asset_name", label:"Medical Asset Name",  placeholder:"Medical asset Name", required:true},
    {name:"medical_asset_category", label:"Medical Asset Category",  placeholder:"Medical asset Name", required:true},
    {name:"name", label:"Facility Type", placeholder:"Input facility type name", required:true, type:"select"
        ,options:[
            {name:"hospital",value:"hospital"},
            {name:"clinic",value:"clinic"},
            {name:"lab",value:"lab"},
        ]
    },
    {name:"quantity", label:"Quantity",  placeholder:"quantity", type:"number", required:true},
    {name:"description", label:"Description", type:"textarea", placeholder:"Input description", required:false},
    {name:"status", label:"status", placeholder:"Status", required:true ,type:"select", options:[
        {name:"Active", value :"active"},
        {name:"inactive", value :"Inactive"},
    ]},
]
const MedicalAssetsParameterPage=()=>{
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
                        <ContentTitle>Medical Assets</ContentTitle>
                    <p>Manage Medical Assets records </p>
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
export default MedicalAssetsParameterPage ;