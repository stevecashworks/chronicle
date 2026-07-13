import styled from "styled-components";
import Sidebar from "../dashboard/components/sideBar";
import Topbar from "../dashboard/components/topBar";
import { Button, Form } from "react-bootstrap";
import SimpleTable from "../../../assets/components/table";
import PopupModal from "../../../assets/components/popupmodal";
import { useState } from "react";
import countriesData from "../../../helpers/contriesData";
import { GiConsoleController } from "react-icons/gi";

const Container = styled.div`
  display: flex;
  width: 100vw;
  overflow-x: hidden;
`;
const Content = styled.div``;
const ContentBottom = styled.div`
  background-color: var(--bg-gray);
  height: calc(100vh - 60px);
`;
const ContentTitle = styled.h2`
  font-weight: 500;
  font-size: 25px;
  color: rgb(0, 0, 0, 0.5);
`;
const ParameterUtilities = styled.div`
  position: relative;
  padding: 50px 30px;
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
`;
const UtilitiesLeft = styled.div`
  display: flex;
  flex-direction: column;
`;
const UtilitiesRight = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const tableHeadings = [
  { name: "School Name", selector: "school_name" },
  // { name: "School type", selector: "school_type" },
  // { name: "State", selector: "state" },
  // { name: "Local Government", selector: "local_government" },
  // { name: "Address", selector: "address" },
  { name: "Actions", selector: "Actions" },
];

const CollegeParameterPage = () => {
  const [modalShow, setModalShow] = useState(false);
  
  // Track selected fields locally to compute cascading arrays
  const [selectedState, setSelectedState] = useState("");
  const [selectedLga, setSelectedLga] = useState("");

  const nigeria = countriesData.find(x => x.name.toLocaleLowerCase() === "nigeria");
  const states = nigeria ? nigeria.states : [];
  console.log(states)

  // 1. Parse out your State list options
  const stateOptions = states.map(state => ({
    value: state.name,
    name: `${state.name} (${state.code})`
  }));
  // 2. Find the selected state object and extract its unique LGAs
 
  
  const matchedStateObj = states.find(s => s.name.trim() === selectedState.trim());

  console.log({matchedStateObj})
  const lgaOptions = matchedStateObj && matchedStateObj.subdivision
    ? matchedStateObj.subdivision.map(lga => ({
        value: typeof lga === "string" ? lga : lga,
        name: typeof lga === "string" ? lga : lga
      }))
    : [];

  // 3. Keep your configuration arrays moving dynamically inside the render method
  const parameterFields = [
     {
      name: "school_name",
      label: "School Name",
      placeholder: "School Name",
      required: true
    },
     
    // {
    //   name: "state_name",
    //   label: "State name",
    //   type: "select",
    //   options: stateOptions,
    //   placeholder: "Select state...",
    //   required: true,
    //   value: selectedState,
    //   onChange: (val) => {
    //     setSelectedState(val);
    //     setSelectedLga(""); // Reset LGA selection if state modifications happen
    //   }
    // }
    ,
    // {
    //   name: "lga_name",
    //   label: "Local Government",
    //   type: "select",
    //   options: lgaOptions,
    //   placeholder: selectedState ? "Select LGA..." : "Please choose a state first",
    //   required: true,
    //   value: selectedLga,
    //   onChange: (val) => setSelectedLga(val)
    // },
    // {
    //   name: "address",
    //   label: "Address",
    //   type: "textarea",
    //   placeholder: "Input address",
    //   required: false
    // },
    // {
    //   name: "status",
    //   label: "Status",
    //   placeholder: "Status",
    //   required: true,
    //   type: "select",
    //   options: [
    //     { name: "Active", value: "active" },
    //     { name: "Inactive", value: "Inactive" },
    //   ]
    // },
  ];

  const handleFormSubmit = (data) => {
    console.log("Submitting collected form data:", data);
    // Execute API calls / logic hooks here
  };

  return (
    <>
      <PopupModal 
        fields={parameterFields} 
        show={modalShow} 
        onHide={() => setModalShow(false)} 
        fn={handleFormSubmit}
      />
      <Container>
        <Sidebar />
        <Content className="main-content">
          <Topbar />
          <ContentBottom>
            <ParameterUtilities>
              <UtilitiesLeft>
                <ContentTitle>Schools & Colleges </ContentTitle>
                <p>Manage Schools & Colleges</p>
                <Form.Control style={{ backgroundColor: "transparent", width: "300px" }} placeholder=" Search" />
              </UtilitiesLeft>

              <UtilitiesRight>
                <Button onClick={() => setModalShow(!modalShow)} variant="primary">Add new</Button>
                <p>0 records found</p>
              </UtilitiesRight>
            </ParameterUtilities>

            <SimpleTable headings={tableHeadings} />
          </ContentBottom>
        </Content>
      </Container>
    </>
  );
};

export default CollegeParameterPage;