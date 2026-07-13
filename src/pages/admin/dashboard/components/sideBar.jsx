import { Nav } from "react-bootstrap";
import logo from "../../../../assets/ogun-state-logo.png"
import {
  BsGrid,
  BsGear,
  BsFolder,
  BsCash,
  BsInbox,
  BsBarChart,
  BsBoxArrowRight,
  BsSpeedometer,
  BsStar
} from "react-icons/bs";
import styled from "styled-components";
import ReusableAccordion from "../../../../assets/components/accordion";
import { CiBank, CiLocationOff, CiMedicalCross, CiMedicalMask, CiSettings} from "react-icons/ci";
import { MdApproval, MdOutlineSchool } from "react-icons/md";
import { GrAnalytics, GrCertificate, GrObjectGroup } from "react-icons/gr";
import { LuTypeOutline } from "react-icons/lu";
import { FaAsterisk, FaHourglass, FaRegCalendarCheck } from "react-icons/fa";
import { GiTrade } from "react-icons/gi";
import { FcApprove } from "react-icons/fc";
import { AiOutlineThunderbolt } from "react-icons/ai";
import { IoMdCheckboxOutline } from "react-icons/io";
import { TbCurrencyNaira } from "react-icons/tb";
import { RiBillLine, RiSecurePaymentFill } from "react-icons/ri";
import { VscServerProcess } from "react-icons/vsc";
import { IoBookOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { dashboardMenuOpenSelector } from "../../../../state/slices/UISlice";
import { BookOpen } from "lucide-react";
const StyledLogo= styled.img`
width:200px;
margin-bottom:40px;
`
const  parameterLinks= [
  {path:"/state-parameter" , text:"state", Icon:CiLocationOff},
  {path:"/local-government-parameter" , text:"local Government", Icon:CiBank},
  {path:"/colleges-parameter" , text:"Schools and  colleges", Icon:MdOutlineSchool},
  {path:"/qualification-parameter" , text:"qualifications", Icon:GrCertificate},
  {path:"/medical-group-parameter" , text:"medical group", Icon:GrObjectGroup},
  {path:"/Facility-type-parameter" , text:"Faclility  type", Icon:LuTypeOutline},
  {path:"/Facility-requirements-parameter" , text:"Faclility  requirements", Icon:FaAsterisk},
  {path:"/medical-assets-parameter" , text:"Medical Assets", Icon:CiMedicalMask},
]

const financialModuleLinks=[
  {path:"/bill-items", text:"bill items", Icon:RiBillLine},
  {path:"/bill-settings", text:"Bill Settings", Icon:CiSettings},
  {path:"/bill-processing", text:"Bill Processing", Icon:FaHourglass},
  {path:"/bill-approval", text:"Bill Approval", Icon:MdApproval},
  {path:"/cashbook-entry", text:"Cashbook Entry", Icon:BookOpen},
]

const facilityLinks=[
  {path:"/assessment-grading", text:"Assessment  grading", Icon:BsStar},
  {path:"/facility-approval", text:"Facility Approval", Icon:IoMdCheckboxOutline},
]
const reportLinks=[
  {text:"bill items"  ,path:"/bill-items", Icon:TbCurrencyNaira},
  {text:"bill settings"  ,path:"/bill-settings", Icon:RiSecurePaymentFill},
  {text:"bill processing"  ,path:"/bill-processing", Icon:VscServerProcess},
  {text:"bill approval"  ,path:"/bill-approval", Icon:FaRegCalendarCheck},
  {text:"cashbook entry"  ,path:"/cashbook-entry", Icon:IoBookOutline},
  

]
function Sidebar() {
  const menuOpen= useSelector(dashboardMenuOpenSelector)
  return (
    <div className={`sidebar ${menuOpen&&"active"}`}>
      <div className="logo-section">
        <StyledLogo src={logo} alt="logo"/>
        <h5>Ogun State</h5>
        <small>Hospitals Management Board</small>
      </div>

      <Nav className="flex-column mt-4" style={{fontSize:"14px"}}>
        <Nav.Link as={Link} to={"/dashboard"} className="menu-item active-menu">
          <BsGrid /> Dashboard
        </Nav.Link>

        <div className="d-flex accordion-con">
          
          <ReusableAccordion TitleIcon={BsGear} linkColor={"white"} title={"Main Parameter"} links={parameterLinks}/>
        </div>

        <div className="d-flex accordion-con">
          <ReusableAccordion TitleIcon={AiOutlineThunderbolt} title={"facility onboarding"} links={facilityLinks}/>
        </div>

        < div className="d-flex accordion-con">
          <ReusableAccordion TitleIcon={BsCash} title="financial module" links={financialModuleLinks} />
        </div>

        <Nav.Link as={Link} to={"/inbox"} className="menu-item">
          <BsInbox /> Inbox
        </Nav.Link>

        {/* <div className="d-flex accordion-con">
          <ReusableAccordion TitleIcon={GrAnalytics} title={"Reports"}  links={reportLinks}/>
        </div> */}

        <Nav.Link className="menu-item">
          <BsBoxArrowRight /> Logout
        </Nav.Link>
      </Nav>
    </div>
  );
}

export default Sidebar;