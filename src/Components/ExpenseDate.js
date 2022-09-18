
import './ExpenseDate.css';

let ExpenseDate = (props) => {
    // let mon = ["January","February","March","April","May","June","July","August","September","October","November","December"];
   
    let year = props.expdate.getFullYear();
    let month = props.expdate.toLocaleString("en-US", {month: "long"});
    let day = props.expdate.toLocaleString("en-US", {day: "2-digit"});

    return(
   
   <>
    
        <div className="date">
            <h2>{day} {month} {year}</h2>
            
            {/* <h2>{year}</h2>  */}
            {/* <h2>{month}</h2>  */}
             {/* Or we can also write like this: 
                  <h2>{mon[props.expdate.getMonth()]}</h2> 
            */}
            {/* <h2>{day}</h2>  */}
        </div>
    </>
   );
}

export default ExpenseDate;