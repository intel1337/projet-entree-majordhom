# Benchmark Project for an Internship

> All of the assets and wireframe doesn't belong to me

### Informations à propos de moi :
- Nom : Baluc
- Prénom : Taiyang
- Age : 18ans
- Niveau d'étude : Bac+2 Titre DWWM(RNCP 5) et (Bac+5 annulé en septembre pour raisons personelles)
- Durée du Stage : 4-5 mois ?

# Visuel Du Projet :
### Ma Version
<img width="1470" height="832" alt="image" src="https://github.com/user-attachments/assets/2f79c774-fe91-49f0-a022-1871a0b0af4a" />

### L'Originale
<img width="1005" height="492" alt="image" src="https://github.com/user-attachments/assets/b0c8dd9c-a330-4a9a-ac78-2083a93b68a7" />

# Quickstart et Bootstrap du Projet :

Dépendances : 
- NodeJS & son écosystème (nvm, npx, npm)
- MongoDB / MongoDB Atlas (Cloud)
- un Package Manager (pnpm, npm, yarn)
- Git
- Un OS système UNIX (Validé ou non), Widows Linux Subsystem (WSL)

```bash
git clone https://github.com/intel1337/projet-entree-majordhom.git
cd projet-entree-majordhom
cd fullstack-app
pnpm i / npm i / yarn i
echo 'DATABASE_URL="VOTRE_URL_MONGODB"' > fichier.env 
pnpx / npx prisma generate
pnpx / npx prisma db push
pnpm run dev / npm run dev / yarn dev
```
Docker for MongoDB :
```
cd database
./bootstrap_db.sh
# If that didnt work, please do "chmod +x bootstrap_db.sh" in the /database folder
# or execute "docker compose up"
```
## Production 

### Actions on a regular VPS / Local Machine
```
git clone https://github.com/intel1337/projet-entree-majordhom.git
cd projet-entree-majordhom
cd fullstack-app
npm ci / pnpm ci # VERY IMPORTANT, PLEASE USE CI AND NOT "i" for production
npm run build
npm start # With Caddy port forwarding or Nginx Reverse Proxy
```
### Cloud Deployment 

```
# In Root Folder of fullstack-app
vercel login
vercel --prod
```


# Environnement de Travail

- OS : MacOS 26 // Arch Linux
- Shell : zsh & kitty terminal
- IDE : NeoVim & Lazy Vim
- Other : Whiteboard, Figma

# Questions :
## Avez-vous trouvé l'exercice facile ou vous a-t-il posé des difficultés ? Si oui, lesquelles ?
Pour moi l'exercice était facile, la seule difficulté rencontrée c'était le css des boutons radios.


## Avez-vous appris de nouveaux outils pour répondre à l'exercice ? Si oui, lesquels ?
Oui, Framer Motion pour des animations React comme angular Materials ou Storybook avec Svelte.

## Pourquoi avoir choisi d'utiliser ces outils ?
J'ai choisi NextJS pour le SSR natif et ses bénéfices en réferencement, étant une page contact le management du SEO doit être minucieusement géré, j'ai utilisé MongoDB étant plus adapté à des demandes de contact, comme Aucune relation n'était nécessaire, sur le plan Scalablité MongoDB reste supérieur dans ce cas précis, les inconvénients seront géré par le backend qui formatteras la donnée afin d'assurer une structure stable et organisé dans la base de donnée. j'ai aussi utilisé Prisma car c'est un ORM presque natif de NextJS tellement l'alchimie entre ces 2 "frameworks" est positive. Enfin pour conclure j'ai choisi une architecture Full stack avec un écosystème accordé au framework full stack utilisé, en loccurence NextJS. 

## Avez-vous utilisé la stack proposée ? Utilisez-vous régulièrement docker ?
Non je n'ai pas choisi l'architecture proposée, car même si elle est majoritairement répandue les nouvelles technologies permettent plus de liberté (Sauf en cas de Php frameworkless).
Aussi personellement j'Utilise Nginx ou Caddy au lieu de Apache, la configuration étant plus adaptée et facile à prendre en main. Concernant le SQL j'ai fais part de mes raisons ci dessus. 

Est ce que j'utilise Docker ? Oui tout les jours tout le temps, Docker me permet de tester des projets web ou d'en commencer sans me soucier du problême de cross-compatibilité ou de performances. J'utilise parfois kubernetes (k8s & minikube) qui ont besoin d'un driver et d'un gestionnaire de container (Docker, Container de Apple) pour pouvoir les ordonnancer.
En Revanche je n'utilise pas Docker Compose sauf en environnement de developpement, Docker Compose étant souvent utilisé en production alors qu'il n'est pas voué à cette usage principalement. De même pour Docker Swarm, étant un utilisateur et fervant supporter de kubernetes et son environnement (Docker, minikube / k3s, prometheus, jenkins) je prêfere utiliser k8s sauf que les cas d'utilisation demande Docker Swarm.





