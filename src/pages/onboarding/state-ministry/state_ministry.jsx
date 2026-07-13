import styled from "styled-components";
import { useEffect, useState } from "react";
import { Button, Spinner } from "react-bootstrap";
import ReactSelect from "react-select";
import { FaAsterisk } from "react-icons/fa";
import { getStates, getLgasByState } from "nigerian-states-lgas-cities-towns";
import toast from "react-hot-toast";
import { apiEntry } from "../medical-officer/medicalOfficer"
import { duration } from "@mui/material";
import OnboardingSidebar from "../medical-officer/components/sideBar";
import uploadImageToCloud from "../../../helpers/uploadImgToCloud";
export const headers={
    "Content-Type":"application/json"
}

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
`;

const LeftCon = styled.div`
  background-color: rgb(7, 44, 30);
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  height: 100vh;
  flex-direction: column;
`;

const FormCon = styled.div`
  display: flex;
  flex-direction: column;
  flex: 3;
  justify-content: center;
  align-items: center;
`;

const Form = styled.div`
  width: 750px;
  margin-top: 40px;
`;

const InputFlex = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
`;

const InputGroup = styled.div`
  flex: 1;
`;

const Input = styled.input`
  margin-bottom: 5px;
`;

const Label = styled.label`
  margin-bottom: 10px;
  text-transform: capitalize;
  cursor: pointer;
`;
const Title = styled.h4`
    text-align:center;
    margin:20px auto;
    font-size:20px;
    color:rgb(0,0,0,0.5)
`

const Select = styled(ReactSelect)`
  margin-bottom: 10px;
`;

const BtnCon = styled.div`
  margin-top: 30px;
`;
const StyledFaAsterisk= styled(FaAsterisk)`
font-size:8px;
position:relative;
 bottom:5px;
    
`

const StateMinistryOnboardingPage = () => {
    const [fetchingLicense, setFecthingLicense] = useState(false)
    const [imgUrl, setImgUrl] = useState({})
    const [licenseError, setLicenseError] = useState()
     const [ImgUploading, setImguploading] = useState("") 
   

    const [clicked, setClicked] = useState(false)
        ;


    const [formData, setFormData] = useState({
        state_name: "",
        contact_person: {
            name: "",
            phone: "",
            email: "",
            

        },
        password:"",
            re_password:"",
        mou: {
            public_id:"",
            secure_url:""
        }
    });

     useEffect(()=>{
        if(imgUrl.public_id){
            setFormData({...formData,mou:imgUrl})
        }
    },[imgUrl])

    const submitForm=()=>{
        setClicked(true)
        const correctForm=Object.values(formData).every(Boolean)
        if(!formData.mou.public_id){
            toast.error("Upload Memorandum Of Understanding To Continue")
            return
        }
        else{
        const correctForm=Object.values(formData).every(Boolean)
        if(correctForm){
            fetch(`${apiEntry}/state/register`, {
                method:"Post",
                headers,
                body:JSON.stringify(formData)
               
            }).then(res=>res.json())
            .then(data=>{
                console.log(data)
            })
            .catch(err=>{
                console.log(err)
            })
        }

        }
    }

    const handleFileChange=(file)=>{
        try{
            console.log({file})
            uploadImageToCloud(file,setImguploading, setImgUrl,"raw")
        }
        catch(e){
            toast.error(e.message)
        }
        

    }
    console.log(imgUrl)
    const handleFieldChange=(field, value)=>{
        setFormData({...formData, [field]:value})
    }

    return (
        <Container>
            <OnboardingSidebar />

            <FormCon>
                <h3 className="mb-4">State Registration</h3>

                <Form>
                
                     <InputGroup>
                        <Label htmlFor="mou">Upload Memorandum of Understanding <StyledFaAsterisk className="text-danger"  /></Label>
                        <Input
                            className="form-control"
                            id="mou"
                            type="file"
                            onChange={(e)=>{handleFileChange(e.target.files[0])}}
                        />

                        {ImgUploading&&<Spinner variant="success" size="sm"/>}
                            {(clicked && !formData.mou.public_id) && (
              <p className="text-danger" style={{ fontSize: 13 }}>
                Please Upload Memorandum Of Understanding
              </p>
            )}
                        </InputGroup>
                    <InputGroup>
                        <Label htmlFor="state_name">State Name <StyledFaAsterisk className="text-danger"  /></Label>
                        <Input
                            className="form-control"
                            id="state_name"
                            onChange={(e)=>{handleFieldChange("state_name",e.target.value)}}

                        />
                         {(clicked && !formData.state_name) && (
              <p className="text-danger" style={{ fontSize: 13 }}>
                This field is required
              </p>
            )}

                    </InputGroup>
                     <InputGroup>
                        <Label htmlFor="contact_name">Name Of Contact Person <StyledFaAsterisk className="text-danger"  /></Label>
                        <Input
                            className="form-control"
                            id="contact_name"
                            onChange={(e)=>{handleFieldChange("contact_person",{...formData.contact_person,name:e.target.value})}}

                        />
                         {(clicked && !formData.contact_person.name) && (
              <p className="text-danger" style={{ fontSize: 13 }}>
                This field is required
              </p>
            )}

                    </InputGroup>
                    <InputFlex>
                     <InputGroup>
                        <Label htmlFor="email">email Of Contact Person <StyledFaAsterisk className="text-danger"  /></Label>
                        <Input
                            className="form-control"
                            id="email"
                            onChange={(e)=>{handleFieldChange("contact_person",{...formData.contact_person,email:e.target.value})}}

                        />
                         {(clicked && !formData.contact_person.email) && (
              <p className="text-danger" style={{ fontSize: 13 }}>
                This field is required
              </p>
            )}

                    </InputGroup>
                     <InputGroup>
                        <Label htmlFor="phone">Phone  number Of Contact Person <StyledFaAsterisk className="text-danger"  /></Label>
                        <Input
                            className="form-control"
                            id="phone"
                            onChange={(e)=>{handleFieldChange("contact_person",{...formData.contact_person,phone:e.target.value})}}
                            
                        />
                         {(clicked && !formData.contact_person.phone) && (
              <p className="text-danger" style={{ fontSize: 13 }}>
                This field is required
              </p>
            )}

                    </InputGroup>
                    
                    </InputFlex>
                    <InputFlex>
                    <InputGroup>
                        <Label htmlFor="password">Password <StyledFaAsterisk className="text-danger"  /></Label>
                        <Input
                            className="form-control"
                            id="password"
                            type="password"
                            onChange={(e)=>{handleFieldChange("password",e.target.value)}}

                            
                        />
                         {(clicked && !formData.password) && (
              <p className="text-danger" style={{ fontSize: 13 }}>
                This field is required
              </p>
            )}
                        </InputGroup>

                        <InputGroup>
                        <Label htmlFor="re-password">Retype Password <StyledFaAsterisk className="text-danger"  /></Label>
                        <Input
                            className="form-control"
                            id="re-password"
                            type="password"
                            onChange={(e)=>{handleFieldChange("re_password",e.target.value)}}
                            
                            
                        />
                         {(clicked && ((formData.password)&&(formData.password!==formData.re_password))) && (
              <p className="text-danger" style={{ fontSize: 13 }}>
                Passwords don't match
              </p>
            )}
                        
                        </InputGroup>
                    </InputFlex>


                        <Button onClick={submitForm} className="w-100 mt-4" variant="success">Register</Button>

                    
                

                    

                </Form>
            </FormCon>
        </Container>
    );
};

export default StateMinistryOnboardingPage;