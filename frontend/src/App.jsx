import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

function App() {
    return (
        <>
            <div className="text-center p-5">
                <h1 className="text-xl mb-3">Project Boilerplate</h1>
                <p>
                    Tailwind is <span className="hidden">not</span> working
                </p>
                <p>
                    Fontawesome is <FontAwesomeIcon icon={faCheck} />
                </p>
            </div>
        </>
    );
}

export default App;
