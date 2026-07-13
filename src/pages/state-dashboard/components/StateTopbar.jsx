import styled from "styled-components";
import React, { useState } from 'react'
import Hamburger from "./Hamburger";
import {IoIosNotificationsOutline} from "react-icons/io"
import {TfiSearch} from "react-icons/tfi"
const Container=styled.div`
display:flex;
padding: 40px 50px;
justify-content: space-between;
height:80px;
align-items: center;
margin-top: 20px;
`
const SearchInputCon=styled.div`
height:40px;
width:300px;
background-color: white;
border-radius: 5px;
padding: 0 10px;
box-sizing: border-box;
display:flex;
align-items: center;
`
const NotificationCon=styled.div`
position: relative;
`
const TopbarLeft=styled.div`
  display: flex;
`
const TopbarRight=styled.div`
  display: flex;
  gap:15px;
  height:100%;
  align-items: center;
`
const  Title=styled.div`
font-size:20px;
font-weight: 600;
`
const Input=styled.input`
height:100%;
width:100%;
border:none;
outline:none;
margin-left:15px;
`
const NameCon=styled.div`
display:flex;
flex-direction:column;
margin-left:20px;
`
const Name=styled.p`

`
const Badge=styled.div`
  height:17px;
  width:17px;
  border-radius: 50%;
  background-color: var(--header-bg);
  color:white;
  display:flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  font-weight:bold;
  position:absolute;
  top:-10px;
  left:15px;
`
const SearchAndAskAICon=styled.div`
width:300px;

`
const SearchOptionCon= styled.div`
background-color: var(--primary);
width:100%;
text-transform:capitalize;
width:300px;
word-break: break-all;
border-top:1px solid var(--border-light);
min-height:40px;
cursor:pointer;
color:white;
display:flex;
align-items: center;

  
`
const Label=styled.label`
  cursor:pointer;
`
const StateTopbar = ({prompt, setPrompt}) => {
  const [open, setOpen]= useState(false)
  return (
    <Container>
      <TopbarLeft>

      <Hamburger open={open} setOpen={setOpen}/>
      <NameCon>

      <Title>Dashboard</Title>
      <Name>Welcome Back Engr Stephen Chigbu</Name>
      </NameCon>
      </TopbarLeft>
      <TopbarRight>
        <SearchAndAskAICon>
            <SearchInputCon>
              <Label htmlFor="search">

              <TfiSearch/>
              </Label>
              <Input id="search" placeholder="Search Or Ask Chronicle AI" 
              onChange={(e)=>{setPrompt(e.target.value)}}
              />
            </SearchInputCon>
            {prompt&&<SearchOptionCon>
              Ask chronicle AI {prompt}
              
              </SearchOptionCon>}


        </SearchAndAskAICon>

          
            <NotificationCon>
              <IoIosNotificationsOutline size={25}/>
              <Badge>3</Badge>
            </NotificationCon>
      </TopbarRight>
            </Container>
  )
}

export default StateTopbar