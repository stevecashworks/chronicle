import styled from "styled-components"
import React from 'react'
import {CiCalendar} from "react-icons/ci"
import {FaChevronDown} from "react-icons/fa"
const OverAllCon=styled.div`
display:flex;
width:100%;
position:relative;
`
    
const  DateCon=styled.div`
    display:flex;
    gap:10px;
    background-color: white;
    border: 1px solid var(--border);
    align-items: center;
    height:40px;
    position: absolute;
    right:55px;
    width: 180px;
    justify-content: center;
    border-radius: 8px;
    top:10px;
`
const DateComp = () => {
  return (
    <OverAllCon>
        <DateCon>
            <CiCalendar/>
            {new Date().toDateString()}
            <FaChevronDown size={12}/>
        </DateCon>
    </OverAllCon>
  )
}

export default DateComp