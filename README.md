# Mini serveur Web : exploration du protocole HTTP

L'objectif de ce projet est de comprendre le fonctionnement de la communication entre un client (navigateur) et un serveur Web à travers le protocole HTTP.  
Le serveur est capable de répondre à plusieurs requêtes et de retourner différentes pages HTML.



Mini serveur Web : exploration du protocole HTTP
Objectif

L'objectif de ce projet est de comprendre le fonctionnement de la communication entre un client (navigateur) et un serveur Web à travers le protocole HTTP. Le serveur est capable de répondre à plusieurs requêtes et de retourner différentes pages HTML.

1. Architecture client / serveur

Lorsqu'un utilisateur ouvre une page Web, son navigateur envoie une requête HTTP à un serveur.

Le serveur traite la demande puis renvoie une réponse contenant généralement du HTML.

Schéma Mermaid


3. Requête HTTP envoyée par le navigateur

Lorsqu'un utilisateur ouvre la page d'accueil :

GET / HTTP/1.1
Host: localhost:3000

Explication
GET : méthode HTTP utilisée pour demander une ressource.
/ : page demandée.
HTTP/1.1 : version du protocole.
Host : adresse du serveur.
4. Réponse du serveur

Le serveur retourne :

HTTP/1.1 200 OK
Content-Type: text/html


Puis le contenu HTML :

<h1>Hello World</h1>
<p>Bienvenue sur la page d'accueil.</p>

Signification du code 200
200 OK


Le serveur a traité correctement la requête.

5. Deuxième page : /about

Le serveur peut également répondre à une autre URL.

Requête
GET /about HTTP/1.1

Réponse
<h1>A propos</h1>
<p>Mini projet HTTP realise en JavaScript.</p>


Cette fonctionnalité montre que le serveur peut gérer plusieurs routes.

6. Gestion d'erreur : page inexistante

Si l'utilisateur demande une page inconnue :

GET /test HTTP/1.1


Le serveur répond :

404 Not Found


Avec :

<h1>404</h1>
<p>Page non trouvee.</p>

7. Comparaison HTTP et FTP
HTTP

HTTP (HyperText Transfer Protocol) est utilisé pour afficher des pages Web.

Exemple :

Navigateur -> Site Web


Cas d'usage :

consultation de sites Web ;
APIs ;
applications Web.

Port standard :

80


Port sécurisé :

443

FTP

FTP (File Transfer Protocol) est utilisé pour transférer des fichiers entre deux machines.

Exemple :

Client FTP -> Serveur FTP


Cas d'usage :

dépôt de fichiers ;
téléchargement ;
sauvegarde de données.

Port standard :

21

8. Schéma HTTP vs FTP
flowchart TD

A[Navigateur] -->|HTTP Port 80| B[Serveur Web]

C[Client FTP] -->|FTP Port 21| D[Serveur FTP]

B -->|Pages HTML| A
D -->|Fichiers| C

9. Les ports TCP importants
Port	Protocole	Utilisation21	FTP	Transfert de fichiers
80	HTTP	Sites Web
443	HTTPS	Sites Web sécurisés
Pourquoi utiliser des ports ?

Une même machine peut héberger plusieurs services :

PC Serveur
Port 21   FTP
Port 80   HTTP
Port 443  HTTPS
Port 3306 → Base de données


Les ports permettent d'indiquer à quel service doit être envoyée la requête.

Conclusion

Ce projet présente le fonctionnement d'un serveur Web simple. Le navigateur agit comme un client et communique avec le serveur grâce au protocole HTTP. Le serveur analyse les requêtes reçues, renvoie différentes pages (/ et /about) et gère les erreurs avec une page 404. Ce projet permet également de comprendre la différence entre HTTP et FTP ainsi que le rôle des ports TCP 21, 80 et 443 dans les communications réseau.
