import "./ActorCard.css"

function ActorCard({actor, key}) {
    return(  
        <div className="actor-card" style={{backgroundImage: `url(https://picsum.photos/200/400)`}}>
            {actor}
        </div>
    )

}

export default ActorCard;