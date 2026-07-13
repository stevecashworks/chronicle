import styled from "styled-components";

const HeaderCon=styled.div`
display:flex;
width:100vw;
justify-content:space-between;
padding-left:20px;
`
const LogoCon = styled.div`
display:flex;
align-items:center;


`
const Logo=styled.img`


`



export  default function Header(){
    return(
        <HeaderCon>
            <LogoCon> Chronicle</LogoCon>
        </HeaderCon>
    )
}