FROM node:14-alpine
ENV NODE_ENV=production

WORKDIR /src

COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 8080
CMD ["node" , "index.js"]
