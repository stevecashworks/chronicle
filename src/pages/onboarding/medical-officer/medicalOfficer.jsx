import styled from "styled-components"
import { useRef, useState } from "react"
import { getStates, getLgasByState } from "nigerian-states-lgas-cities-towns"
import eye from "../../../assets/eye.jpg"
import { Button, FormGroup, OverlayTrigger, Tooltip } from "react-bootstrap"
import { FcNext } from "react-icons/fc"
import { GiNextButton } from "react-icons/gi"
import { FaAsterisk, FaRegWindowClose } from "react-icons/fa"
import ReactSelect from "react-select"
import  uploadImg from "../../../assets/uploadImg.png"
import {Spinner} from "react-bootstrap"
import qualificationsData from "../../../helpers/qualificationsData"
import uploadImageToCloud from "../../../helpers/uploadImgToCloud"
import toast from "react-hot-toast"
import OnboardingSidebar from "./components/sideBar"
import { useFormik } from "formik"
import {fields} from "../../../helpers/medicalOfficerFields.js"
import { educationSchema, experienceSchema, personalSchema } from "../../../helpers/validationSchemas.js"
import PersonalInfo from "./components/PersonalDetails.jsx"
import EducationalDetails from "./components/educationalDetails.jsx"
import ExperienceDetails from "./components/ExperienceDetails.jsx"


 const apis= {
    development:"http://localhost:1998",
    production:""
}
// change environment when on the server
const environment= "development"
export const apiEntry= apis[environment]
console.log({apiEntry})
const  Container= styled.div`
 width:100vw;
 height:100vh;
 display:flex;
 align-items: center;
 
`
const LeftCon=styled.div`
background-color: rgb(7, 44, 30);
display:flex;
align-items: center;
justify-content: center;
flex:1;
height:100vh;
flex-direction: column;

`

const FormCon=styled.div`
display: flex;
flex-direction:column;
flex:3;
justify-content:center;
align-items: center;
`
const Tabs=styled.div`
display:flex;
overflow: hidden;
border-radius: 10px 10px 0 0;
`
const Tab= styled.div`
height:50px;
width:250px;
background-color: ${props=>props.active?"rgb(19, 105, 19)":"#f0f0f0"};
color: ${props=>props.active?"rgb(255,255,255)":"rgb(0,0,0,0.7)"};
border:1px solid  rgb(0,0,0,0.2);
padding-left: 5px;
display:flex; align-items: center;



`
const FormSubCon=styled.div`
    
`

const Form= styled.div`
width:750px;
margin-top: 40px;
    
`
export const InputFlex= styled.div`
    display:flex;
    gap:20px;
    align-items: center;
`
export const InputGroup=styled.div`
flex:1;

    
` 
export const Input=styled.input`
margin-bottom: 5px;
`
export const FormSection=styled.div`
display:${props=>props.active?"block":"none"};

`
export const  Select= styled(ReactSelect)`
margin-bottom: 10px;
    
`
export const Label= styled.label`
margin-bottom:10px;
text-transform: capitalize;
cursor:pointer;
    
`
export const Image=styled.img`
    width:90%;
`
export const BtnCon= styled.div`
    width:500px;
    margin-top:20px;
`
export const UploadImg= styled.img`
opacity:0.5;
width:100px;
`
const AvatarCon=styled.div`
    height: 230px;
    width:230px;
    background-color:white;
    display:flex;
    align-items: center;
    justify-content: center;
    border-radius: 7%;
    margin-bottom: 20px;
`
const Avatar=styled.img`
    width:200px;
    height:200px;
    border-radius: 50%;
    object-fit: cover;
`
 export const BtnsCon= styled.div`
    display:flex;
    gap:20px;
    margin-top: 20px;
`
export const Schools=styled.div`
display:flex;
gap:20px;
flex-wrap: wrap;
margin-bottom:20px;
`
export const School=styled.div`
    height:40px;
    padding-left: 20px;
    padding-right: 20px;
    align-items: center;
    display:flex;
    text-transform:capitalize;
    opacity:0.5;
`
export const renderTooltip = (props) => (
    <Tooltip  id="button-tooltip" customClass="light-tooltip" {...props}>
      Click To Delete
    </Tooltip>
  );

const MedicalOfficerOnboardingPage=()=>{
    const [tab, setTab]=useState(0)
let validationSchema
switch(tab){
 case 0: validationSchema=personalSchema; break;
 case 1:validationSchema=educationSchema; break;
 case 2: validationSchema=experienceSchema; break;
 


 default:  validationSchema=null; break;

}

const formik = useFormik({

    initialValues:fields,

    validationSchema,
        

    onSubmit(values){

        console.log(values)

    }

});
 const [imgUrl, setImgUrl]= useState("")
    const [imgUploading, setImgUploading]= useState(false)

return(
    <Container>
        <OnboardingSidebar imgUrl={imgUrl.secure_url}/>
        <FormCon>
            
            <Tabs>
                <Tab active={tab===0} >Personal Info</Tab>
                <Tab active={tab===1}>Education</Tab>
                <Tab active={tab===2}>Work Experience</Tab>

            </Tabs>

                <Form>
            {tab===0&&<PersonalInfo formik={formik} setImgUrl={setImgUrl} setTab={setTab}/>}
            {tab===1&&<EducationalDetails formik={formik} setTab={setTab}/>}
                    {tab===2&&<ExperienceDetails formik={formik} setTab={setTab} />}
                 
                
                

                </Form>




        </FormCon>

    </Container>

)
}
export default MedicalOfficerOnboardingPage