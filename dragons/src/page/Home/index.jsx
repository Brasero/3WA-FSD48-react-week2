import DragonForm from "../../component/DragonForm/index.jsx";
import Dragons from "../../component/Dragons/index.jsx";
import KnightForm from "../../component/KnightForm/index.jsx";
import "./home.css";
import Knights from "../../component/Knights/index.jsx";


function Home() {

    return (
        <main>
            <h1>Bienvenue</h1>
            <div>
                <div>
                    <DragonForm />
                    <Dragons />
                </div>
                <div>
                    <KnightForm />
                    <Knights />
                </div>
            </div>
        </main>
    )
}

export default Home