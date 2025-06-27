FROM node:20-alpine
WORKDIR /hello-app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3000
CMD ["node", "app.js"]
