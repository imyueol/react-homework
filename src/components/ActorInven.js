import { Link } from 'react-router-dom';

function ActorInven({ actor }) {

    return (
        <Link to={`/actors/${actor.peopleCd}`}>
            <div className="item">
                <h3>이름 : {actor.peopleNm}</h3>
                <h3>필모그래피 : {actor.filmoNames}</h3>
            </div>
        </Link>
    );

}

export default ActorInven;