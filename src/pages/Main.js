import { Link } from "react-router-dom";

function Main() {

    return (
        <Link to="/actors">
            <div className="content-row">
                <h1>영화 속 배우들 만나러 GO GO GO !!!</h1>
            </div>
        </Link>
    );
}

export default Main;