FROM node:22-alpine

WORKDIR /app

COPY . .

RUN npm install
RUN npm install -g @angular/cli

EXPOSE 4200

CMD ["ng", "serve", "--host", "0.0.0.0"]
