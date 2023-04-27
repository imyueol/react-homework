import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getActorDetail } from "../api/ActorAPI";


function ActorDetail() {

    const { peopleCd } = useParams();

    const [actor, setActor] = useState();

    useEffect(
        () => {
            getActorDetail(peopleCd)
                .then(data => setActor(data));
        },
        [peopleCd]
    );

    
  return (
    <div className="content-col">
    { actor && 
        <>
            <h1>{actor.peopleNm}({actor.peopleNmEn})</h1>
            <div>성별 : { actor.sex } </div>
            <div>필모그래피 : { actor.filmos}</div>
            <Link to="/actors">목록으로</Link>
        </>
    }
</div>

  );
}

export default ActorDetail;