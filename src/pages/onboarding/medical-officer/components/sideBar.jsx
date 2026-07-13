import styled from "styled-components"
import React from 'react'

const LeftCon=styled.div`
background-color: rgb(7, 44, 30);
display:flex;
align-items: center;
justify-content: center;
flex:1;
height:100vh;
flex-direction: column;

`


const AvatarCon=styled.div`
    height: 230px;
    width:230px;
    background-color:white;
    display:flex;
    align-items: center;
    justify-content: center;
    border-radius: 7%;
    margin-bottom: 20px;
`
const Avatar=styled.img`
    width:200px;
    height:200px;
    border-radius: 50%;
    object-fit: cover;
`
const OnboardingSidebar = ({imgUrl}) => {
  return (
     <LeftCon >
    {imgUrl&&<AvatarCon>

    <Avatar src={imgUrl} />
    </AvatarCon>
    }
        <p className="h3 text-light">Chronicle.</p>

    </LeftCon>
  )
}

export default OnboardingSidebar