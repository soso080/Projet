import classes from './Footer.module.css'
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

export default function Footer() {
    return(
        <div style={{display: 'flex',backgroundColor: 'gray', justifyContent:'space-around'}} >
            <ul>
                <li><Link to="/" >Bonjour</Link></li>
                <li><Link to="/" >Aurevoir</Link></li>
                <li><Link to="/" >Merci</Link></li>
            </ul>
            <ul>
                <li><Link to="/" >Gauche</Link></li>
                <li><Link to="/" >Droite</Link></li>
                <li><Link to="/" >Milliei</Link></li>
            </ul>
            <ul>
                <li><Link to="/" >Acceuil</Link></li>
                <li><Link to="/" >Connexion</Link></li>
                <li><Link to="/" >Inscription</Link></li>
            </ul>
        </div>
    )
}