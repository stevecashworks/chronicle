import styled from "styled-components";
import { useState } from "react";
import { Button, Spinner } from "react-bootstrap";
import ReactSelect from "react-select";
import { FaAsterisk } from "react-icons/fa";
import { getStates, getLgasByState } from "nigerian-states-lgas-cities-towns";
import toast from "react-hot-toast";
import { apiEntry } from "../medical-officer/medicalOfficer"
import { duration } from "@mui/material";
import OnboardingSidebar from "../medical-officer/components/sideBar";


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

const Select = styled(ReactSelect)`
  margin-bottom: 10px;
`;

const BtnCon = styled.div`
  margin-top: 30px;
`;

const FacilityOnboardingPage = () => {
  const [fetchingLicense, setFecthingLicense] = useState(false)
  const [imgUrl, setImgUrl] = useState()
  const [licenseError, setLicenseError] = useState()
  const [Image, setImage] = useState("")


  const [clicked, setClicked] = useState(false)
    ;


  const [formData, setFormData] = useState({
    facility_name: "",
    address: "",
    state: "",
    lga: "",
    medical_lead: "",
    owner: {
      name: "",
      email: ""
    },
    landmark: "",
    password:""
  });
  const handleBlur = async (number) => {
    try {
      setFecthingLicense(true)
      setLicenseError(null)

      const response = await fetch(`${apiEntry}/medical-officer/check-availability/${formData.medical_lead}`)
      const data = await response.json()




      setFecthingLicense(false)
      // 
      if (data.success) {
        toast.success("This medical lead can be added")
        console.log(data.result, { duration: 5000 })
        setImgUrl(data.result.image)

      } else {
        toast.error(data.result, { duration: 5000 })
        setLicenseError(data.result)
      }

    } catch (err) {
      console.log(err.message)
    }

  }

  const states = getStates();

  const stateOptionMap = states.map((state) => ({
    label: state,
    value: state,
  }));

  const lgas = getLgasByState(formData.state).map((lga) => ({
    label: lga,
    value: lga,
  }))
    || [];
  const submit = () => {
    setClicked(true)
    if (licenseError) {
      toast.error(licenseError,{duration:6000})
      return
    }
    else{
      const formIsCorrect =Object.values(formData).every(Boolean)
      if(formIsCorrect){
        fetch(`${apiEntry}`)
      }
    }
  }
  const handleFieldChange = (field, value) => {
    setFormData({ ...formData, [field]: value })
  }

  return (
    <Container>
      <OnboardingSidebar imgUrl={imgUrl} />

      <FormCon>
        <h3 className="mb-4">Facility Registration</h3>

        <Form>

          <InputGroup>

            <Label htmlFor="license">
              {
                fetchingLicense && <span>
                  <Spinner size="sm" variant="success" style={{ marginRight: "10px" }} />
                </span>
              }
              Medical Lead's license Number{" "}
              <FaAsterisk size={6} className="text-danger" />
            </Label>

            <Input
              id="license"
              className="form-control"
              onChange={(e) => { handleFieldChange("medical_lead", e.target.value) }}
              onBlur={handleBlur}
            />

            {(clicked && !formData.medical_lead) && (
              <p className="text-danger" style={{ fontSize: 13 }}>
                This field is required
              </p>
            )}
          </InputGroup>

          <InputGroup>
            <Label htmlFor="facility_name">
              Facility Name <FaAsterisk size={6} className="text-danger" />
            </Label>

            <Input
              id="facility_name"
              className="form-control"
              onChange={(e) => { handleFieldChange("facility_name", e.target.value) }}

            />


            {(clicked && !formData.facility_name) && (
              <p className="text-danger" style={{ fontSize: 13 }}>
                This field is required
              </p>
            )}
          </InputGroup>
          <InputFlex>


            <InputGroup>
              <Label htmlFor="owner_name">
                Owner's Name{" "}
                <FaAsterisk size={6} className="text-danger" />
              </Label>

              <Input
                id="owner_name"
                className="form-control"
                onChange={(e) => {
                  handleFieldChange("owner", { ...formData.owner, name: e.target.value })
                }}

              />

              {(clicked && !formData.owner.name) && (
                <p className="text-danger" style={{ fontSize: 13 }}>
                  This field is required
                </p>
              )}
            </InputGroup>

            <InputGroup>
              <Label htmlFor="owner_email">
                Owner's Email{" "}
                <FaAsterisk size={6} className="text-danger" />
              </Label>

              <Input
                id="owner_email"
                className="form-control"
                onChange={(e) => {
                  handleFieldChange("owner", { ...formData.owner, email: e.target.value })
                }}

              />

              {(clicked && !formData.owner.email) && (
                <p className="text-danger" style={{ fontSize: 13 }}>
                  This field is required
                </p>
              )}
            </InputGroup>
          </InputFlex>


          <InputGroup>
            <Label htmlFor="address">
              Address <FaAsterisk size={6} className="text-danger" />
            </Label>

            <Input
              id="address"
              className="form-control"
              onChange={(e) => { handleFieldChange("address", e.target.value) }}

            />

            {(clicked && !formData.address) && (
              <p className="text-danger" style={{ fontSize: 13 }}>
                This field is required
              </p>
            )}
          </InputGroup>
          <InputFlex>
          <InputGroup>
            <Label htmlFor="nearest_bus_stop">
              Nearest Bus Stop <FaAsterisk size={6} className="text-danger" />
            </Label>
            <Input
              id="nearest_bus_stop"
              className="form-control"
              onChange={(e) => { handleFieldChange("landmark", e.target.value) }}

            />
            {(clicked && !formData.landmark) && (
              <p className="text-danger" style={{ fontSize: 13 }}>
                This field is required
              </p>
            )}


          </InputGroup>

            <InputGroup>
            <Label htmlFor="password">
              password <FaAsterisk size={6} className="text-danger" />
            </Label>
            <Input
              id="password"
              className="form-control"
              type="password"
              onChange={(e) => { handleFieldChange("password", e.target.value) }}

            />
            {(clicked && !formData.password) && (
              <p className="text-danger" style={{ fontSize: 13 }}>
                This field is required
              </p>
            )}


          </InputGroup>

          </InputFlex>

          <InputFlex>
            <InputGroup>
              <Label htmlFor="state">
                State <FaAsterisk size={6} className="text-danger" />
              </Label>

              <Select
                options={stateOptionMap}
                value={{ label: formData.state, value: formData.state }}

                onChange={(option) => {
                  handleFieldChange("state", option.value)
                }}
                classNames={{
                  control: () => "form-control",
                }}
                placeholder="Select a state"
              />

              {(clicked && !formData.state) && (
                <p className="text-danger" style={{ fontSize: 13 }}>
                  This field is required
                </p>
              )}
            </InputGroup>

            <InputGroup>
              <Label htmlFor="lga">
                Local Government{" "}
                <FaAsterisk size={6} className="text-danger" />
              </Label>

              <Select
                options={lgas}
                value={{ label: formData.lga, value: formData.lga }}
                onChange={(option) => {
                  handleFieldChange("lga", option.value)
                }}


                classNames={{
                  control: () => "form-control",
                }}
                placeholder="Select LGA"
              />

              {(clicked && !formData.lga) && (
                <p className="text-danger" style={{ fontSize: 13 }}>
                  This field is required
                </p>
              )}
            </InputGroup>
          </InputFlex>



          <BtnCon>
            <Button
              variant="success"
              
              onClick={submit}
            >
              Next
            </Button>
          </BtnCon>
        </Form>
      </FormCon>
    </Container>
  );
};

export default FacilityOnboardingPage;

// to do : add facility  categories and type fields (unfinished)