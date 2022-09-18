import './Card.css';

let Card = (props) => {
    let classes = 'container ' + " " + props.className;
    return (
        <>
          <div className={classes}>{props.children}</div>
        </>
    );
}

export default Card;