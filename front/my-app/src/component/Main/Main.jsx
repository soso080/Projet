import { Route, Routes } from "react-router-dom";
import Connect from "../Connexion/Connexion";
import Inscrit from "../Inscription/Inscription";


export default function Main() {
    return (
        <div>
            <h1>Site Web Project</h1>
            <p>Voici Mon Projet java script fullstack </p>
            <img src="https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg" alt="" width="50%" />
            <Routes>
                <Route exact path="/Connect" element={<Connect />} />
                <Route path="/Inscrit" element={<Inscrit />} />
            </Routes>
        </div>

    )
}