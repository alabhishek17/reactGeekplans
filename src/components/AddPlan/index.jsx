import { useState } from "react";
// import Tasklist from "./Tasklist";
function Addplaner(){
    const[mytask,setMytask]=useState([]);
    const[subject,setSubject]=useState("");
    const[hours,setHours]=useState("");

const saveMytask=JSON.parse(localStorage.getItem("mytask"));
if(saveMytask){
if(saveMytask.length>0&& mytask.length===0){
    setMytask(saveMytask)
}
}


    function funHandler(){
       if(!subject || !hours) return; //no input
          
       const resultObj=[ ...mytask,{
               subject,
               hours:parseInt(hours),
    }];
       
        //   setmytask([...mytask,resultObj])  //store all mytask vale and resultobje stores subject,hours
        setMytask(resultObj);
        setSubject("");
        setHours("");
          localStorage.setItem('mytask', JSON.stringify(resultObj));
    }

    const increment=(index)=>{
          const resultObj=[...mytask];
          resultObj[index].hours=resultObj[index].hours+1;
        setMytask(resultObj);
        localStorage.setItem('mytask', JSON.stringify(resultObj));
    }
    const decrement=(index)=>{
        if(mytask[index].hours === 0) return;
        const resultObj=[...mytask];
        resultObj[index].hours=resultObj[index].hours-1;
      setMytask(resultObj);
      localStorage.setItem('mytask', JSON.stringify(resultObj));
  }

    return (
        <div style={{margin:"20px",alignItems:"center",justifyContent:"center",gap:"20px",boxShadow:"10px 5px 5px 5px",padding:"30px 20px",width:"500px",marginLeft:"450px"}}>
        <input style={{padding:"10px"}} type="text"  placeholder="subject" value={subject} onChange={(e)=>setSubject(e.target.value)}></input>
        <input style={{padding:"10px"}} type="number" placeholder="hour" value={hours} onChange={(e)=>setHours(e.target.value)}></input>
        <button style={{padding:"10px 20px",backgroundColor:"black",color:"white"}} onClick={funHandler}>add</button>
        
        
        <section style={{margin:"20px",display:"flex"}}>
            {
                mytask.map((iteam,index)=>(
                    <>
                    {/* <Tasklist key={index} subject={iteam.subject} hours={iteam.hours}/> */}
                    <span style={{padding:"5px",fontSize:"30px"}}>{iteam.subject}</span>
                     <span style={{padding:"5px",fontSize:"30px"}}>-</span>
                     <span style={{padding:"5px",fontSize:"30px"}}>{iteam.hours}</span>
                     <button style={{padding:"5px",marginLeft:"10px",backgroundColor:"green",color:"white"}} onClick={()=>increment(index)}>+</button>
                     <button style={{padding:"5px",marginLeft:"10px",backgroundColor:"red",color:"white"}} onClick={()=>decrement(index)}>-</button>
                    </>
                ))
            }
            
        </section>
        </div>
    )
}

export default Addplaner;