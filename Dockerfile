FROM node:18-alpine as BUILD_IMAGE

# Cria o diretório da aplicação
WORKDIR /app/products-page

# Copia o arquivo de package.json
COPY package.json .

#Instala todas as depedências necessárias para a aplicação
RUN npm install

COPY . . 

RUN npm run build

FROM node:18-alpine as PRODUCTION_IMAGE
WORKDIR /app/products-page

COPY --from=BUILD_IMAGE /app/products-page/dist/ /app/products-page/dist/

EXPOSE 8080

COPY package.json .
COPY vite.config.ts .

RUN npm install typescript

EXPOSE 8080
CMD ["npm", "run", "preview"]