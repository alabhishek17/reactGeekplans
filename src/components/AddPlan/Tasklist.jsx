function Tasklist( {subject,hours}){
    return(
        <div>
            <span>{subject}</span>
            <span>-</span>
            <span>{hours}</span>
            <button>-</button>
            <button>+</button>
        </div>
    )
}
export default Tasklist;