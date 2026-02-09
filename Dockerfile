
FROM node:20

WORKDIR /app

COPY ikt_front/package*.json ./
RUN npm install

COPY ikt_front/ .

EXPOSE 5173

CMD ["npm", "run", "dev", "--", "--host"]
