import React from 'react';
import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import RemoveItem from './RemoveItem';

let ExpenseItem = (props) => {

    // const [title, setTitle] = useState(props.title);
    // const [newTitle, newSetTitle] = useState("");

    // function clickHandler() {
    //     setTitle(newTitle);
    // }
    // function changeHandler(event) {
    //     newSetTitle(event.target.value);
    // }

   
    return (
        <>
            <div className="expitm">
                <ExpenseDate expdate={new Date(props.date)} />
                <h2 className="title">{props.title}</h2>
                <h2 className="amount">{"$" + props.amount}</h2>
                
                <RemoveItem expRemove={props.id} />

                {/* <input type="text" value={newTitle} onChange={changeHandler} />
                <button onClick={clickHandler}>Update</button> */}
                
            </div>

        </>
    );
}

export default ExpenseItem;