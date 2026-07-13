import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { Link } from "react-router-dom";
import styled from "styled-components"
const StyledAccordion = styled.div`
margin-bottom:3px;
`;

const AccordionBody = styled.div`
  padding-left: 20px;
  border-left:1px solid rgb(255,255,255,0.2);
`;

const AccordionTitle= styled.div`
display:flex;

gap:10px;
align-items:center;
text-transform:capitalize;
 padding: 15px 5px !important;
 
 &:hover{
  background: rgba(255, 255, 255, 0.1);
 }
`
const StyledLinks = styled(Link)`
  display: flex;
  padding: 8px 0;
  color: white;
  text-decoration: none;
  font-size:14px;
  text-transform:capitalize;
  align-items:center;
  
`;

function ReusableAccordion({ title, links,TitleIcon }) {
  const [isOpen, setIsOpen] = useState(false);
const  Chevron=isOpen? FaChevronUp:FaChevronDown
  return (
  <StyledAccordion  >
      <AccordionTitle className={isOpen?"active-menu":""} onClick={() => setIsOpen(!isOpen)}>
        <TitleIcon size={18}/>
        {title}
        <Chevron  />
      </AccordionTitle>

      {isOpen && (
        <AccordionBody>
          {links.map(link=>{
            const {Icon, path, text}= link
            return(
              <StyledLinks to={path}>
                <Icon  style={{marginRight:"10px"}} />
                {text}
              </StyledLinks>
            )
          })}
          
                  </AccordionBody>
      )}
    </StyledAccordion>
  );
}
export default ReusableAccordion