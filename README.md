# Projet

Créer un site avec ReactJS, ExpressJS et MongoDB pour la base de données.
Le site doit avoir une Navbar responsive pour naviguer entre les page.
Et un footer a la fin de chaques pages

Le site aura une page d'acceuil qui affichera tous les articles des utilisateurs.

Un utilisteur peut s'authentifier (Inscription puis connexion), et de manière persistante en utilisant les JWT token. Dans la base de données un utilisateur consiste:

- id, password, email, username, avatar

Le site aura une page de profil pour chaque utilisateur, ou:

- Les données de l'utilisateur seront affichées.
- L'utilisateur peut modifier ses informations.
- Afficher tous les articles de l'utilisateur.

L'utilisateur peut créer des articles, un article consiste en:

- id, title, content, image. 


### etape 1 : intialisation du depot

1. git init
2. git add . 
3. git commit -m "initialisation"
5. git branch -M main
5. git remot and add origin link 
4. git push -u origin main



### etape 2 : Creation du fichier "Projet" et front end

1. creation d'un fichier front
2. Cmd sur le fichier front
3. npx create-react-app my-app
4. cd my-app
5. ajout du proxy dans le package.json : "proxy":"http://localhost:3001",
6. npm start


### etape 3 : Initialisation du back end

### 3.1

1. creation du fichier back 
2. cmd sur le fichier back
3. npm init
4. npm install express 
5. npm install --save-dev nodemon
6. creation du fichier index.js
7. npm run dev

### 3.2 package.json 

avoir la structure suivante :

{
	"name": "back",
	"version": "1.0.0",
	"description": "",
	"main": "index.js",
	"type": "module",
	"scripts": {
		"start": "node index.js",
		"dev": "nodemon index.js"
	},
	"author": "",
	"license": "ISC",
	"dependencies": {
		"express": "^4.18.2",
		"mongoose": "^7.0.0"
	},
	"devDependencies": {
		"nodemon": "^2.0.21"
	}
}

### etape 4 stucture de la front end

1. creation de la navbar
2. creation de la page inscription 
3. creation de la page connexion 
4. creation du footer a chaque page


### etape 5 Authentification dans la back end
1. Authentification connexion /inscription 
2. connexion a : mongodb://localhost:27017
3. creation d'une base de donnée : elements --> collection name : elements
4. interaction a la base de donnée avec mongoose 

### etape 6 Authentification dans la front end 
1. inscription 
2. connection avec mise du token dans le local storage

### Etape 7 controlleur Articles

1. addArticles,PostArticles,DeleteArticles etc...
