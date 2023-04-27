import { useEffect, useState } from "react";
import { getActorList } from "../api/ActorAPI";
import ActorInven from "../components/ActorInven";

function ActorList() {

    const [actorList, setActorList] = useState();

    useEffect(
        () => {
            getActorList()
                .then(data => setActorList(data));

        },
        []
    );

    return (
        <div className="content-row">
            {actorList && actorList.map(actor => <ActorInven key={actor.peopleCd} actor={actor} />)}
        </div>

    );
}

export default ActorList;