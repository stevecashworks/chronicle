import { Navbar, Container, Button } from "react-bootstrap";
import { BsBell } from "react-icons/bs";
import { GoPerson } from "react-icons/go";
import { IoPerson } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components"
import { dashboardMenuOpenSelector, toggleDashboardMenuOpen } from "../../../../state/slices/UISlice";
const StyledCircle= styled.div`
height:30px;
width:30px;
color:white;
display:flex;
align-items:center;
justify-content:center;
border-radius:50%;
position:relative;
left:20px;
`
const Vertical= styled.div`
height:40px;
width:2px;
background-color:rgb(0,0,0,0.2)
`
const HamburgerCon= styled.div`
display:flex;
flex-direction:column;
gap:5px;
position:relative;
width:30px;
height:50px;

justify-content:center;
`

const HamLine=styled.div`
background-color:rgb(0,0,0,0.4);
height:2px;
width:25px



`
const StyledBrand=styled(Navbar.Brand)`
display:flex;
align-items:center;
height:50px;
gap:10px;
cursor:pointer;
`
function Topbar() {
  const  sideBarOpen=useSelector(dashboardMenuOpenSelector)
  const dispatch= useDispatch()

  

  return (
    <Navbar bg="white" className="shadow-sm px-4">
      
      <Container fluid>
      <>
      
        <StyledBrand className="d-flex">
          <HamburgerCon onClick={()=>{dispatch(toggleDashboardMenuOpen())}}>
          <HamLine style={{ transition:"all 0.6s ease",position:sideBarOpen?"absolute":"relative", transform:`rotate(${sideBarOpen?"45deg":"0"})`}}></HamLine>
          <HamLine style={{display:sideBarOpen?"none":"initial"}}></HamLine>
          <HamLine   style={{transition:"all 0.6s ease", position:sideBarOpen?"absolute":"relative", transform:`rotate(${sideBarOpen?"-45deg":"0"})`}}  ></HamLine>
        </HamburgerCon>
          Dashboard</StyledBrand>
      </>

        <div className="d-flex align-items-center gap-4">
          <BsBell size={20} />
          <Vertical/>
          <StyledCircle className="bg-success">
            <GoPerson/>
          </StyledCircle>
          <div>Admin</div>

        </div>
      </Container>
    </Navbar>
  );
}

export default Topbar;