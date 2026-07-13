import React, { useState } from 'react';
import { FaAsterisk } from 'react-icons/fa';
import qualificationsData from '../../../../helpers/qualificationsData';
import { Button, FormGroup, OverlayTrigger, Tooltip } from "react-bootstrap"


import { FormSection, Schools, School, InputGroup,renderTooltip, InputFlex, Label, Input, Select, BtnsCon } from "../medicalOfficer"
import toast from 'react-hot-toast';
const EducationalDetails = ({ formik , setTab}) => {
    const [educationDetails, setEducationDetails] = useState([]);
    const [clicked, setClicked] = useState(false)
    const defaultForm={
        institution_name: "",
        start_date: "",
        end_date: "",
        degree: "",
        other_degree: "",
    }
    const [institution, setInstitution] = useState(defaultForm)
    const removeInstitution=(thisInstitution)=>{
        
        
            setEducationDetails(educationDetails.filter(ins=>{
                console.log(thisInstitution,ins)
                return JSON.stringify(ins)!=JSON.stringify(thisInstitution)

            }))
    }
    

    const handleInputChange = (field, value) => {
        setInstitution({ ...institution, [field]: value });
    }
    const others = "Other (Specify)";
    const addInstitution = () => {
        setClicked(true)
        const errorList= [] 
        
    let institutionToSave = { ...institution };

    if (
        institutionToSave.degree === others &&
        institutionToSave.other_degree
    ) {
        institutionToSave.degree = institutionToSave.other_degree;
    }

    if (
        !institutionToSave.other_degree &&
        institutionToSave.degree
    ) {
        institutionToSave.other_degree = institutionToSave.degree;
    }

    const formIsCorrect = Object.values(institutionToSave).every(Boolean);

        if(formIsCorrect){
            // console.log(institution)
            setInstitution(institutionToSave)
            setEducationDetails([...educationDetails,institution])
            toast.success("Institution added succesfully")
            // setInstitution(defaultForm)
            // setClicked(false)
        }
        

    }
    const moveToWorkExperience = () => {
        if(educationDetails.length<1){
            toast.error("You must add at leat one institution")
        }
        else{
            formik.setFieldValue("education", educationDetails)
            setTab(2)
        }

    }


    return (
        <FormSection active={true}>

            <Schools>
                                {educationDetails.map(school=>{
                                    const {institution_name }= school
                                    return(
                                         <OverlayTrigger
                                    placement="bottom"
                                delay={{ show: 250, hide: 400 }}
                                overlay={renderTooltip}
                                        >
        
          <School onClick={()=>{removeInstitution(school)}} className="bg-success text-light gray">{institution_name} </School>
        </OverlayTrigger>
                                    )
                                })}
                            </Schools>
            <InputGroup>
                <Label htmlFor="institution">Institution  name <FaAsterisk size={6} className="text-danger " /> </Label>

                <Input id="degree" className="form-control"
                    onChange={(e) => { handleInputChange("institution_name", e.target.value) }}
                />
                    {((!institution.institution_name) && clicked) && <p className="size-sm text-danger" style={{ fontSize: "13px" }}>This field is required</p>}


            </InputGroup>

            <InputFlex>
                <InputGroup>
                    <Label htmlFor="start-date">Start Date <FaAsterisk size={6} className="text-danger " /> </Label>
                    <Input id="start-date" type="date" className="form-control"
                        onChange={(e) => { handleInputChange("start_date", e.target.value) }}

                    />
                    {((!institution.start_date) && clicked) && <p className="size-sm text-danger" style={{ fontSize: "13px" }}>This field is required</p>}

                </InputGroup>

                <InputGroup>
                    <Label htmlFor="end-date">End Date <FaAsterisk size={6} className="text-danger " /> </Label>
                    <Input id="end-date" type="date" className="form-control"
                        onChange={(e) => { handleInputChange("end_date", e.target.value) }}

                    />
                    {((!institution.end_date) && clicked) && <p className="size-sm text-danger" style={{ fontSize: "13px" }}>This field is required</p>}

                </InputGroup>

            </InputFlex>
            <InputGroup>
                <Label htmlFor="degree">Degree earned: <FaAsterisk size={6} className="text-danger " /> </Label>




                <Select
                    options={qualificationsData.map(x => { return { value: x, label: x } })}
                    classNames={() => {
                        control: () => "form-control"
                    }}
                    onChange={
                        (option) => {
                            handleInputChange("degree", option.value)
                        }

                    }


                />
                    {((!institution.degree) && clicked) && <p className="size-sm text-danger" style={{ fontSize: "13px" }}>This field is required</p>}
                
            </InputGroup>
            {(institution.degree === others) && (
                <InputGroup>
                    <Label htmlFor="other-degree">Specify degree <FaAsterisk size={6} className="text-danger " /> </Label>
                    <Input id="other-degree" className="form-control" placeholder="Specify degree here"
                        onChange={(e) => {
                            handleInputChange("other_degree", e.target.value)
                        }}
                    />
                    {((!institution.other_degree) && clicked) && <p className="size-sm text-danger" style={{ fontSize: "13px" }}>This field is required</p>}
                    
                </InputGroup>
            )}
            <BtnsCon>
                <Button onClick={addInstitution}>Add Institution</Button>
                <Button onClick={moveToWorkExperience} variant="success">Save & Next</Button>
            </BtnsCon>

        </FormSection>
    )
}

export default EducationalDetails