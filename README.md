This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

Para instalar las dependencias del packages.json
npm install or yarn install

Para iniciar el proyecto
### `npm start`
o
### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

Por defecto el proyecto ya esta apuntando a http://localhost:3005 el cuál es la dirección del backend

Funcionamiento:
Al iniciar el proyecto por defecto entra en http://localhost:3000 disparando la acción de traer las películas y series del backend.

Al dar clic en el botón de visitas inicia un contador en memoria usando el hook useState

Al dar clic en el botón like de cada película se inicia un contador en memoria para la propiedad like de cada serie o película, este cambio se hace con redux, modificando el state global de la aplicación para cambiar las propiedades del arreglo que inicialmente llega de la base de datos.