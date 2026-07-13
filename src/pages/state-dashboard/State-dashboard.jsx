import styled from "styled-components";
import React, { useState } from 'react'
import StateSidebar from "./components/StateSidebar";
import StateTopbar from "./components/StateTopbar";
import DateComp from "./components/DateComp";
import StatsCards from "./components/StatdCards";
import ChartAndNotifications from "./components/ChartsAndNotifications";
import ChatModal from "./components/ChatModal";
import DashboardInsights from "./components/DashboardInsights";
import DashboardFooter from "./components/StateDashboardFooter";


const Container=styled.div`
min-height:100vh;
width:100vw;
display: flex;
`
const Content=styled.div`
flex:4.5;
background-color: var(--bg-gray);
`


const StateDashboard = () => {
  const [show, setShow]= useState(false);
  const [prompt, setPrompt]= useState("")
  const [chats, setChats]= useState([])
  const onHide= ()=>{
    setShow(false)
  }
  
  const promptAI= async()=>{
    try {
      const response=await fetch(`${apiEntry}`)
      
    } catch (error) {
      
    }
  }
  return (
    <Container>
      <ChatModal show={show} chats={chats} onHide={onHide} />
        <StateSidebar/>
        <Content>
            <StateTopbar prompt={prompt} setPrompt={setPrompt}/>
            <DateComp/>
            <StatsCards/>
            <ChartAndNotifications/>
            <DashboardInsights/>
            <DashboardFooter/>
            
        </Content>
    </Container>
  )
}

export default StateDashboard