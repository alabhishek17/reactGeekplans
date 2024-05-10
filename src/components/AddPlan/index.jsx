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
        <div>
        <input type="text"  placeholder="subject" value={subject} onChange={(e)=>setSubject(e.target.value)}></input>
        <input type="number" placeholder="hour" value={hours} onChange={(e)=>setHours(e.target.value)}></input>
        <button onClick={funHandler}>add</button>
        
        
        <section style={{margin:"20px",display:"flex"}}>
            {
                mytask.map((iteam,index)=>(
                    <>
                    {/* <Tasklist key={index} subject={iteam.subject} hours={iteam.hours}/> */}
                    <span>{iteam.subject}</span>
                     <span>-</span>
                     <span>{iteam.hours}</span>
                     <button onClick={()=>increment(index)}>+</button>
                     <button onClick={()=>decrement(index)}>-</button>
                    </>
                ))
            }
            
        </section>
        </div>
    )
}

export default Addplaner;