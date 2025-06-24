FROM node:20.19-bookworm AS builder

WORKDIR /app

# Copiar package.json y package-lock.json
COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

FROM nginx:alpine

# Copiar archivos construidos
COPY --from=builder /app/dist/prueba-angular18/browser /usr/share/nginx/html

COPY dist/nginx.conf /etc/nginx/nginx.conf


# Exponer puerto 80
EXPOSE 80

# Comando de inicio
CMD ["nginx", "-g", "daemon off;"]

