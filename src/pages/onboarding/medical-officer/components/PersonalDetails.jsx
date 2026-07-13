import { Button } from "react-bootstrap";
import {
  FormSection,
  InputGroup,
  InputFlex,
  Input,
  Label,
  Select,
  UploadImg,
  BtnCon,
} from "../medicalOfficer";
import { FaAsterisk } from "react-icons/fa";
import { getStates, getLgasByState } from "nigerian-states-lgas-cities-towns";
import { useState } from "react";
import uploadImg from "../../../../assets/uploadImg.png";
import { GiNextButton } from "react-icons/gi";
import uploadImageToCloud from "../../../../helpers/uploadImgToCloud";
import { Spinner } from "react-bootstrap";
import { apiEntry } from "../medicalOfficer";
import toast from "react-hot-toast";
const PersonalInfo = ({ formik, setImgUrl, setTab }) => {
  const states = getStates();
  const state = formik.values.state;
  
  
  const [errors, setErrors] = useState({});
  const [passwordMismatch, setPasswordMismatch]= useState(false)
  const [imgUploading, setImgUploading] = useState(false);
  const formatError = (err) => err.replaceAll("_", " ");
  //   licenses can either be dormant fetching, okay, or  rejected
  const [licenseStatus, setLicenseStatus] = useState("dormant");

  const stateOptionMap = states.map((state) => {
    return { label: state, value: state };
  });

  const lgas =
    getLgasByState(formik.values.state).map((lga) => {
      return { label: lga, value: lga };
    }) || [];
  const setImgData = (url) => {
    formik.setFieldValue("image", url);
    setImgUrl(url);
  };
  const validateLicense = async (e) => {
    try {
      if(e.target.value){

        setLicenseStatus("fetching");
        formik.setFieldValue("license_number","")
        const response = await fetch(
        `${apiEntry}/medical-officer/validate-license/${e.target.value}`,
      );
      const data = await response.json();
      const { success } = data;
      const toast_type = success ? "success" : "error";
      toast[toast_type](data.result);
      if(success) formik.setFieldValue("license_number",e.target.value)
      setLicenseStatus(success ? "okay" : "rejected");
  }
  else{
    throw new Error("Error: no license provided")
  }
    
  } catch (err) {
      toast.error(err.message);
    }
  };
  const handlePasswordChange=(e)=>{
    const formPassword= formik.values.password
    console.log(formPassword)
    if(formPassword){

      setPasswordMismatch(formPassword!==e.target.value)
    }
  }
  return (
    <FormSection active={true}>
      <InputFlex>
        <InputGroup>
          <Label htmlFor="license_number">
            {licenseStatus === "fetching" ? (
              <Spinner
                variant="success"
                size="sm"
                style={{ marginRight: "5px" }}
              />
            ) : licenseStatus === "okay" ? (
              <span style={{fontSize:"10px", marginRight:"5px"}}>✔</span>
            ) : (
              licenseStatus === "rejected" && <span style={{fontSize:"10px", marginRight:"5px"}}>❌</span>
            )}
            License Number <FaAsterisk size={6} className="text-danger " />{" "}
          </Label>
          <Input
            // {...formik.getFieldProps("license_number")}
            id="license_number"
            className="form-control"
            placeholder="License Number"
            name="license_number"
            onBlur={validateLicense}
          />

          {errors.license_number && (
            <p
              className="text-danger capitalize"
              style={{ fontSize: "12px", textTransform: "capitalize" }}
            >
              {formatError(errors.license_number)}
            </p>
          )}
        </InputGroup>
        <InputGroup>
          <Label htmlFor="date_of_birth">
            Date Of Birth <FaAsterisk size={6} className="text-danger " />{" "}
          </Label>
          <Input
            {...formik.getFieldProps("date_of_birth")}
            id="date_of_birth"
            className="form-control"
            type="date"
            placeholder="Date Of Birth"
            name="date_of_birth"
          />
          {errors.date_of_birth && (
            <p
              className="text-danger capitalize"
              style={{ fontSize: "12px", textTransform: "capitalize" }}
            >
              {formatError(errors.date_of_birth)}
            </p>
          )}
        </InputGroup>
      </InputFlex>

      <InputFlex>
        <InputGroup>
          <Label htmlFor="first_name">
            First Name <FaAsterisk size={6} className="text-danger " />{" "}
          </Label>
          <Input
            {...formik.getFieldProps("first_name")}
            id="first_name"
            className="form-control"
            placeholder="First Name"
            name="first_name"
          />
          {errors.first_name && (
            <p
              className="text-danger capitalize"
              style={{ fontSize: "12px", textTransform: "capitalize" }}
            >
              {formatError(errors.first_name)}
            </p>
          )}
        </InputGroup>

        <InputGroup>
          <Label htmlFor="last_name">
            Last Name <FaAsterisk size={6} className="text-danger " />{" "}
          </Label>

          <Input
            {...formik.getFieldProps("last_name")}
            id="last_name"
            className="form-control"
            placeholder="Last Name"
            name="last_name"
          />
          {errors.last_name && (
            <p
              className="text-danger capitalize"
              style={{ fontSize: "12px", textTransform: "capitalize" }}
            >
              {formatError(errors.last_name)}
            </p>
          )}
        </InputGroup>
      </InputFlex>

      <InputFlex>
        <InputGroup>
          <Label htmlFor="email">
            Email <FaAsterisk size={6} className="text-danger " />{" "}
          </Label>

          <Input
            {...formik.getFieldProps("email")}
            id="email"
            className="form-control"
            placeholder="Email Address"
            name="email"
          />
          {errors.email && (
            <p
              className="text-danger capitalize"
              style={{ fontSize: "12px", textTransform: "capitalize" }}
            >
              {formatError(errors.email)}
            </p>
          )}
        </InputGroup>
        <InputGroup>
          <Label htmlFor="phone">
            phone <FaAsterisk size={6} className="text-danger " />{" "}
          </Label>

          <Input
            {...formik.getFieldProps("phone")}
            id="phone"
            type="number"
            className="form-control"
            placeholder="Phone number"
            name="phone"
          />
          {errors.phone && (
            <p
              className="text-danger capitalize"
              style={{ fontSize: "12px", textTransform: "capitalize" }}
            >
              {formatError(errors.phone)}
            </p>
          )}
        </InputGroup>
      </InputFlex>
      <InputFlex>
      <InputGroup>
          <Label htmlFor="password">
            password <FaAsterisk size={6} className="text-danger " />{" "}
          </Label>

          <Input
            {...formik.getFieldProps("password")}
            id="password"
            type="password"
            className="form-control"
            placeholder="Password"
            name="password"
          />
          {errors.password && (
            <p
              className="text-danger capitalize"
              style={{ fontSize: "12px", textTransform: "capitalize" }}
            >
              {formatError(errors.password)}
            </p>
          )}
        </InputGroup>

        <InputGroup>
          <Label htmlFor="repassword">
            retype password <FaAsterisk size={6} className="text-danger " />{" "}
          </Label>

          <Input
          
            id="repassword"
            type="password"
            className="form-control"
            placeholder="Password"
            name="password"
            onChange={handlePasswordChange}
          />
          {passwordMismatch && (
            <p
              className="text-danger capitalize"
              style={{ fontSize: "12px", textTransform: "capitalize" }}
            >
              Passwords don't match
            </p>
          )}
        </InputGroup>
      </InputFlex>
      <Label htmlFor="address">
        input Address <FaAsterisk size={6} className="text-danger " />{" "}
      </Label>

      <Input
        {...formik.getFieldProps("address")}
        id="address"
        className="form-control"
        placeholder="Street Address"
        name="address"
      />
      {errors.address && (
        <p
          className="text-danger capitalize"
          style={{ fontSize: "12px", textTransform: "capitalize" }}
        >
          {formatError(errors.address)}
        </p>
      )}

      <InputFlex>
        <InputGroup>
          <Label htmlFor="state">
            State <FaAsterisk size={6} className="text-danger " />{" "}
          </Label>
          <Select
            options={stateOptionMap}
            value={
              stateOptionMap.find(
                (option) => option.value === formik.values.state,
              ) || null
            }
            onChange={(option) => {
              formik.setFieldValue("state", option.value);

              // clear LGA whenever state changes
              formik.setFieldValue("lga", "");
            }}
            onBlur={() => formik.setFieldTouched("state", true)}
            classNames={{
              control: () => "form-control",
            }}
          ></Select>
          {errors.state && (
            <p
              className="text-danger capitalize"
              style={{ fontSize: "12px", textTransform: "capitalize" }}
            >
              {formatError(errors.state)}
            </p>
          )}
        </InputGroup>

        <InputGroup>
          <Label htmlFor="lga">
            Local Government{" "}
            <FaAsterisk size={6} className="text-danger " />{" "}
          </Label>

          <Select
            id="lga"
            options={lgas}
            onChange={(option) => {
              formik.setFieldValue("lga", option.value);
            }}
            classNames={{
              control: () => "form-control",
            }}
          ></Select>
          {errors.lga && (
            <p
              className="text-danger capitalize"
              style={{ fontSize: "12px", textTransform: "capitalize" }}
            >
              {formatError(errors.lga)}
            </p>
          )}
        </InputGroup>
      </InputFlex>

      <InputFlex>
        <InputGroup>
          <Label className="h5" style={{ display: "block" }}>
            Gender
          </Label>
          <Label htmlFor="male">Male </Label>

          <Input
            id="male"
            value="male"
            type="radio"
            name="gender"
            style={{ marginLeft: "10px", marginRight: "50px" }}
            checked={formik.values.gender === "male"}
            onChange={formik.handleChange}
          />
          <Label htmlFor="female">Female</Label>
          <Input
            value="female"
            id="female"
            type="radio"
            name="gender"
            style={{ marginLeft: "10px", marginRight: "50px" }}
            checked={formik.values.gender === "female"}
            onChange={formik.handleChange}
          />
          {errors.gender && (
            <p
              className="text-danger capitalize"
              style={{ fontSize: "12px", textTransform: "capitalize" }}
            >
              {formatError(errors.gender)}
            </p>
          )}
        </InputGroup>

        <InputGroup>
          {imgUploading ? (
            <Spinner className="text-success" />
          ) : (
            <Label htmlFor="user-img">
              <UploadImg alt="upload label" src={uploadImg} /> Click to upload
              image
            </Label>
          )}
          <Input
            className="form-control"
            onChange={(e) => {
              uploadImageToCloud(
                e.target.files[0],
                setImgUploading,
                setImgData,
              );
            }}
            style={{ display: "none" }}
            type="file"
            id="user-img"
          ></Input>
          {errors.image && (
            <p
              className="text-danger capitalize"
              style={{ fontSize: "12px", textTransform: "capitalize" }}
            >
              {formatError(errors.image)}
            </p>
          )}
        </InputGroup>
      </InputFlex>
      <BtnCon>
        <Button
          onClick={async () => {
            if(passwordMismatch){
              toast.error("Passwords don't match")
              return;
            }
            const errors = await formik.validateForm();
            
            
            setErrors(errors);
            if(Object.keys(errors).length===0){
              setTab(1)
            }
          }}
          className="w-full"
          variant="success"
        >
          {" "}
          Next <GiNextButton />
        </Button>
      </BtnCon>
    </FormSection>
  );
};
export default PersonalInfo;
