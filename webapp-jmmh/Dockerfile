# Usa una imagen oficial de Node
FROM node:18

# Establece el directorio de trabajo
WORKDIR /app

# Copia los archivos necesarios
COPY package*.json ./

# Instala las dependencias
RUN npm install

# Copia el resto del código
COPY . .

# Expón el puerto 5000
EXPOSE 3000

# Inicia React en el puerto 5000
CMD ["npm", "start"]
