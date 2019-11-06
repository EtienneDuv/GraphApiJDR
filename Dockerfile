FROM node

# Création du dossier de base
RUN mkdir /code

# Copie du package.json de configuration des dependances
COPY package.json /code
COPY package-lock.json /code
# Installation des dépendaces
RUN cd /code && npm install

# Copie du code de l'application
COPY /api /code/api

# Définition du dossier actuel
WORKDIR /code

# Exposition du port 4000
EXPOSE 4000

CMD ["node", "api/server.js"]

# Pour run l'API, `docker run -p 4000:4000 [image name]`