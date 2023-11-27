FROM node:18.16-slim
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY src/ src/
CMD npm start
