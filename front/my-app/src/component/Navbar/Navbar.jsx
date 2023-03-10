import classes from "./Navbar.module.css"
import Connect from "../Connexion/Connexion"
import Inscrit from "../Inscription/Inscription";
import Footer from "../Footer/Footer"
import App from "../../App";
import React from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

export default function NavBar() {
    return(
        <BrowserRouter>
        <nav class="menu" style={{backgroundColor: 'yellow'}}>
            <ul style={{display: 'flex' , justifyContent: 'space-around'}} >
                <li><Link to="/App" >Acceuil</Link></li> 
                <li><Link to="/Contact">Contact</Link></li> 
                <li><Link to="/Inscrit">Inscriptiion</Link></li> 
                <li><Link to="/Connect">Connexion</Link></li> 
            </ul>
        </nav>
        <Routes>
        <Route exact path="/Connect" element={<Connect />} />
        <Route path="/Inscrit" element={<Inscrit />} />
      </Routes>
        </BrowserRouter>
    )
}