FROM node:20
WORKDIR /app/frontend
#. is it compulsory to frontend and backend in same
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 5173
CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0"]