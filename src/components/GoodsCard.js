function GoodsCard(props) {
    return(
        <div className="card">
            <img className="fruitImg" src={props.src} alt="Fruit" height="260" width="260"/>
            <p className="fruitTitle">{props.title}</p>
            <p className="fruitCost">Cost: {props.cost}</p>
        </div>
        
    );
}

export default GoodsCard;