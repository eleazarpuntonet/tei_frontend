# Establecer la imagen base
FROM nginx:latest

# Eliminar el archivo de configuración de Nginx existente
RUN rm /etc/nginx/conf.d/default.conf

# Copiar el archivo de configuración personalizado de Nginx
COPY nginx.conf /etc/nginx/conf.d

# Copiar los archivos estáticos de la compilación de React
COPY build/ /usr/share/nginx/html

# Exponer el puerto 80 para el servidor web
EXPOSE 80

# Comando para iniciar el servidor Nginx
CMD ["nginx", "-g", "daemon off;"]
