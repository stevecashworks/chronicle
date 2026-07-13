import styled from "styled-components"
import {Card, Button, Spinner} from "react-bootstrap"
import { Oval } from "react-loader-spinner";
import ogunStateLogo from "../../assets/ogun-state-logo.png" 
import { MdOutlineSignLanguage } from "react-icons/md";
const Container=  styled.div`
width:100vw;
height:100vh;
display:flex;
align-items:center;
justify-content:center;
`
const SpinnerCon= styled.div`
width:100%;
align-items:center;
justify-content:center;
marginTop:10px;
display:flex;
`
const CardCon= styled.div`
height:20px;
padding:50px;

`
const StyledCard= styled(Card)`
padding:50px;

`


const  LoadingPage=()=>{
    return(
        <Container>
        
        


    <StyledCard>
      <Card.Img variant="top" src={ogunStateLogo} />

      <Card.Body>
        <Card.Title>Ogun State Government</Card.Title>
        <Card.Text>
          Hospital Management Board
        </Card.Text>
        
      </Card.Body>
      <SpinnerCon>

    <Oval
visible={true}
height="40"
width="40"
color="#4fa94d"
ariaLabel="oval-loading"
wrapperStyle={{}}
wrapperClass=""
/>
</SpinnerCon>
    </StyledCard>
        

        </Container>
        
    )
}
export default  LoadingPage