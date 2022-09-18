import './RemoveItem.css';

const RemoveItem = (props) => {

    let removeItemFunc = () => {
       
        fetch(`https://apigenerator.dronahq.com/api/EKWGq6kG/data/${props.expRemove}`,{
            method: 'DELETE'
        }).then(()=>{
            window.location.reload();
        });
    }

    return (
        <>
       
         <button onClick={removeItemFunc} className="removebtn">Remove</button>
      
        </>
    );
}

export default RemoveItem;