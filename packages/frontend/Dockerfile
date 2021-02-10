FROM node:14.15.4-alpine3.11

RUN mkdir frontend

WORKDIR /frontend

COPY . .

RUN npm install

EXPOSE 3000

CMD npm run dev