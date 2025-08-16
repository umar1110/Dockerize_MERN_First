FROM node:24

WORKDIR /app/backend
COPY package*.json ./
RUN npm install
COPY . .
# is it compulsory to expose the port ? as it can be changed 
# or it can be set from docker-compose
EXPOSE 3000
CMD [ "npm","start"]


