export default function responsive(device, styles){
    let finalStyles= ""
    const breakpoint=  device==="mobile"?"480px" :(device==="tablet"?"800px":"900px");
    const 
    const  attributes= Object.keys(styles)
    attributes.foreach(attribute=>{
        const  formatted_attribute= attribute.replace("_" ,"-")
        const newLine= `${formatted_attribute}: ${styles[attribute]}; \n`
        finalStyles+=newLine
    })
    

    console.log({finalStyles})
    return (finalStyles)

    

}