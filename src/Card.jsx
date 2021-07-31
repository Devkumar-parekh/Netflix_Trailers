

function Card(props){
    return(
        <div className="cards">
            <div className="card">
                <img className="image" src={props.img} alt={props.alt} />
                <div className="backside">
                <div src="card__info">
                    <span className="card__category"></span>
                    <h3 className="card__title">{props.title}</h3>
                </div>
                <a href={props.link} target="_blank">
                    <button>Watch Now</button>
                </a>
            </div>
            </div>
            
        </div>
    );
}

export default Card;