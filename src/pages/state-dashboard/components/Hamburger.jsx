import styled from "styled-components"
import React from 'react'
const Container=styled.div`
    width:40px;
    border-radius:8px;
    height:40px;
    display:flex;
    flex-direction:column;
    gap:5px;
    cursor:pointer;
    justify-content: center;
`
const Line=styled.div`
    height:3px;
    width:30px;
    background-color:black;
    transition:all 0.5s ease;
`

const Hamburger = ({open,setOpen}) => {
  return (
    <Container onClick={()=>{setOpen(!open)}}>
        <Line  style={{position:open?"absolute":"relative",  transform:`rotate(${open?"45deg":0})`}}></Line>
        <Line style={{display:open?"none":"block"}}></Line>
        <Line style={{position:open?"absolute":"relative",  transform:`rotate(${open?"-45deg":0})`}}></Line>

    </Container>
  )
}

export default Hamburger