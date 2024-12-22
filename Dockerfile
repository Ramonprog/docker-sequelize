FROM node:20-alpine

# Define o diretório de trabalho dentro do container
WORKDIR /app

# Copia os arquivos de configuração e código para o container
COPY package*.json ./

# Instala as dependências
RUN npm install

# Copia o restante dos arquivos para o container
COPY . .

# Expõe a porta do aplicativo
EXPOSE 3000

# Comando para rodar o projeto
CMD ["npm", "run", "dev"]
