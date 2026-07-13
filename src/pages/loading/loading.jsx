import styled from "styled-components"

import React from 'react'
import { BallTriangle } from "react-loader-spinner"


const Container=styled.div`
display:flex;
align-items: center;
justify-content: center;
height:100vh;
width:100vw
`
const Loading = () => {
  useEffect()
  return (
    <Container>
    <BallTriangle
height={100}
width={100}
radius={5}
color="#4fa94d"
ariaLabel="ball-triangle-loading"
wrapperStyle={{}}
wrapperClass=""
visible={true}
/>
    </Container>
  )
}

export default Loading