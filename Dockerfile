FROM node:21-alpine AS build

WORKDIR /app

COPY package*.json ./

RUN npm install 

COPY . .

RUN npm run build


FROM node:21-alpine

WORKDIR /app

USER node

COPY --chown=node:node --from=build /app .


EXPOSE 3000

CMD ["npm", "start"]