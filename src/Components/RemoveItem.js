
import './RemoveItem.css';

const RemoveItem = (props) => {


    let removeItemFunc = () => {

        fetch(`https://apigenerator.dronahq.com/api/EKWGq6kG/data/${props.expRemove}`, {
            method: 'DELETE'
        }).then(() => {
            // window.location.reload();
            
            fetch("https://apigenerator.dronahq.com/api/EKWGq6kG/data").then(
                (response) => {
                    return response.json();
                }).then(
                    (data) => {
                        props.getafterRemData(data);
                        
                    })
        });
    }

    return (
        <>

            <button onClick={removeItemFunc} className="removebtn">Remove</button>

        </>
    );
}



export default RemoveItem;

