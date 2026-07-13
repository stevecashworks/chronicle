import styled from "styled-components"

const TableResponsiveCon=styled.div`
overflow-x:auto;
margin:20px  auto;
width:700px;
`
const TableCon=styled.table`
margin:20px auto;
box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
padding:50px;
border-radius:5px;
padding:20px;
width:95%;
`
const Thead=styled.thead`
padding :20px;
border-bottom:1px solid rgb(0,0,0,0.2);
height:50px;
`
const Tbody=styled.tbody`
height:100px;
width:100%;
background-color:white;
`
const Tr=styled.tr`
`
const Td=styled.td`

`
const Th=styled.th`
color:rgb(0,0,0,0.5);
padding-left:20px;
text-transform:capitalize;
`


const ReusableTable=({headings, data})=>{
    return(
        <TableResponsiveCon>

        <TableCon>
            <Thead>
                <Tr>

                {headings.map(heading=>{
                    return(
                        <Th>{heading.name}</Th>
                    )
                })}

                </Tr>
            </Thead>
            <Tbody>

            </Tbody>
        </TableCon>
                    </TableResponsiveCon>
    
    )
} 
export default ReusableTable