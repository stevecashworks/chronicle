import React, { useState } from 'react'
import { FormSection, Schools, School, InputGroup,renderTooltip, InputFlex, Label, Input, Select, BtnsCon, apiEntry } from "../medicalOfficer"
import { Button, FormGroup, OverlayTrigger, Tooltip } from "react-bootstrap"
import { FaAsterisk } from 'react-icons/fa'
import toast from 'react-hot-toast'

const ExperienceDetails = ({formik}) => {
    const [experience, setExperience]=useState([])
    const [clicked,setClicked]= useState(false)
    const [currentExperience, setCurrentExperience]= useState({
        organization_name:"",
        resumption_date:"",
        is_current_job:false,
        resignation_date:"",
        position:""
    })
    const handleFieldChange= (field, value)=>{
        setCurrentExperience({...currentExperience, [field]:value})
    }
    const addExperience= ()=>{
        setClicked(true)
        const {resignation_date, is_current_job, ...others}=currentExperience
        
        const requiredFieldsWereGiven= Object.values(others).every(Boolean)
        if((!is_current_job)&&!resignation_date){
             toast.error("You need to provide a resignation date if you no longer work in this organization")
            return;
        }else if(requiredFieldsWereGiven){
            formik.setFieldValue("experience", [...formik.values.experience,currentExperience])
            setExperience([...experience,currentExperience])
            toast.success("experience added successfully")

        }

    }
    console.log({currentExperience})

    const register=async()=>{
        console.log(formik.values)
        const errors=await formik.validateForm()
        console.log({errors})
        fetch(`${apiEntry}/medical-officer/register`,{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(formik.values)
        }).then(res=>res.json())
        .then(data=>{
            console.log(data)
            if(data.success){
                toast.success("Medical officer added successfully")
            }
            else{
                toast.error("We couldn't sign you up")
            }
         }).catch(err=>{
            toast.error(err.message)
         })
        // formik.handleSubmit()
        console.log("hi")

    }

    const remove_experience= (Experience)=>{
        setExperience(experience.filter(exp=>JSON.stringify(exp)!==JSON.stringify(Experience)))
    }
  return (
    <FormSection active={true}>

                          <Schools>
                            {experience.map(experience=>{
                                const {organization_name,position }= experience
                                return(
                                     <OverlayTrigger
                                placement="bottom"
                            delay={{ show: 250, hide: 400 }}
                            overlay={renderTooltip}
                                    >
    
      <School onClick={()=>{remove_experience(experience)}} className="bg-success text-light gray">{position} at {organization_name} </School>
    </OverlayTrigger>
                                )
                            })}
                        </Schools>

                        
                            
                        <FormGroup>
                             <Label  htmlFor="organization_name"> Organization Name  <FaAsterisk size={6} className="text-danger "/> </Label>
                        <Input  id="organization_name" className="form-control"
                        onChange={(e)=>{handleFieldChange("organization_name",e.target.value)}}
                        />
                        {(!currentExperience.organization_name&&(clicked))&&<p className="size-sm text-danger" style={{fontSize:"13px"}}>This field is required</p>}
            
                            
                        </FormGroup>
                        
                    <InputGroup>
                             <Label htmlFor="resumption_date"> Resumption Date <FaAsterisk size={6} className="text-danger "/> </Label>
                        <Input  type="date" id="resumption_date" className="form-control"
                        onChange={(e)=>{handleFieldChange("resumption_date",e.target.value)}}
                        />
            
                        {(!currentExperience.resumption_date&&(clicked))&&<p className="size-sm text-danger" style={{fontSize:"13px"}}>This field is required</p>}

                    
                    </InputGroup>
                    <InputGroup style={{display:"flex", alignItems:"center"}} className="mt-4">
                             <Label  htmlFor="current_job"> I still work here </Label>
                                <Input onChange={(e)=>{handleFieldChange("is_current_job",e.target.checked)}}  style={{width:"15px", height:"15px", marginLeft:"10px",}} id="current_job" type="checkbox"/>
                    
                    
                    </InputGroup>

                    {(!currentExperience.is_current_job)&&  <InputGroup>
                             <Label htmlFor="resignation_date"> Resignation Date <FaAsterisk size={6} className="text-danger "/> </Label>
                        <Input  type="date" id="resignation_date" className="form-control"
                        onChange={(e)=>{handleFieldChange("resignation_date",e.target.value)}}
                        />
            
                        {(!currentExperience.resignation_date&&(clicked))&&<p className="size-sm text-danger" style={{fontSize:"13px"}}>This field is required</p>}

                    
                    </InputGroup>
                    }

                    <FormGroup>
                             <Label htmlFor="position"> Position Held  <FaAsterisk size={6} className="text-danger "/> </Label>
                        <Input  id="position" className="form-control" 
                        onChange={(e)=>{handleFieldChange("position",e.target.value)}}
                        />
            
                        {(!currentExperience.position&&(clicked))&&<p className="size-sm text-danger" style={{fontSize:"13px"}}>This field is required</p>}
                            
                        </FormGroup>
                        <BtnsCon className="mt-4">
                         <Button onClick={addExperience}>Add Exprerience</Button>
                        <Button onClick={register}   variant="success">Register</Button>

                   
                        </BtnsCon>
                        
                         </FormSection>
  )
}

export default ExperienceDetails