import classes from './Footer.module.css'

export default function Footer() {
    return(
        <div style={{display: 'flex',backgroundColor: 'gray', justifyContent:'space-around'}} >
            <ul>
                <li><a href="#">Bonjour</a></li>
                <li><a href="#">Aurevoir</a></li>
                <li><a href="#">Merci</a></li>
            </ul>
            <ul>
                <li><a href="#">Gauche</a></li>
                <li><a href="#">Droite</a></li>
                <li><a href="#">Milliei</a></li>
            </ul>
            <ul>
                <li><a href="#">Acceuil</a></li>
                <li><a href="#">Connexion</a></li>
                <li><a href="#">Inscription</a></li>
            </ul>
        </div>
    )
}