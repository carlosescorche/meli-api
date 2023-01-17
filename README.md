# Meli HTTP API

Es una aplicación desarrollada con Node.js y Typescript para realizar consultas a Mercado Libre sobre información de productos. 

## Endpoints disponibles 

### `/api/items?q=example`
Realiza una búsqueda de productos con los parámetros de consulta dados.

### `/api/items/{:productId}`
Realiza una consulta del producto con el id dado.

## Scripts disponibles

### `npm run tsc`

Compila la aplicación y la deja en el directorio `build`.

### `npm run dev`

Permite ejecutar la aplicación en entorno de desarrollo. 

### `npm run start`

Permite ejecutar la aplicación compilada en tu localhost.

### `docker compose up --build`

Permite levantar y ejecutar la aplicación en un contenedor Docker.





