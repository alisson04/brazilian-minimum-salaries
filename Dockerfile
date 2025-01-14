FROM cypress/base:latest

# instala um servidor http simples para servir conteúdo estático
RUN npm install -g http-server

# faz da pasta 'app' o diretório atual de trabalho
WORKDIR /app

# copia os arquivos 'package.json' e 'package-lock.json' (se disponível)
COPY package*.json ./

# copia arquivos e pastas para o diretório atual de trabalho (pasta 'app')
COPY . .

# instala dependências do projeto
RUN npm install

# Instale o binário do Cypress
RUN npx cypress install

# compila a aplicação de produção com minificação
RUN npm run build

EXPOSE 8081
CMD [ "http-server", "-p", "8081", "dist" ]