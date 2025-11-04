# Étape 1 : utiliser une image Node officielle
FROM node:18-alpine

# Étape 2 : créer le répertoire de travail dans le conteneur
WORKDIR /usr/src/app

# Étape 3 : copier les fichiers du projet dans le conteneur
COPY package*.json* ./
COPY . .

# Étape 4 : installer les dépendances (si package.json existe)
RUN if [ -f package.json ]; then npm install; fi

# Étape 5 : définir la commande par défaut
CMD ["node", "app.js"]