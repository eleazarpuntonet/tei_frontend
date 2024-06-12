# Imagen base (Node Version 19)
FROM node:19

# Copia todo lo que hay en la carpeta actual
# a la carpeta /usr/src del contenedor
COPY ["./package.json","/usr/src/"]

# Establecer el directorio de trabajo
# Ubicarse en la ruta
WORKDIR /usr/src

# Descarga las despendencias del proyecto

COPY ["./","/usr/src"]

# Exponer el puerto a la escucha
EXPOSE 3000

# Correr comando
CMD ["npm","run","start:dev"]