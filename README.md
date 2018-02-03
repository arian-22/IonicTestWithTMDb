# Ionic App with "The Movie DB"

**App con Ionic Framework 3, utilizando API de "The Movie DB" para cátedra de TTADS (UTN-FFRO)**

Para descargar el repositorio:

```bash
git clone https://github.com/arian-22/IonicTestWithTMDb.git
```

## Lanzar la APP en el navegador

Para lanzar la aplicación, visualizando en el navegador:

*Nota: Recomiendo utilizar la Herramienta de Desarrollo del navegador (F12), en la vista de dispositivo móvil.

```bash
npm start
```

Para probar con las diferentes vistas que proporciona Ionic según la plataforma donde corra la aplicación, ejecutar:

```bash
ionic serve --lab
```

## Lanzar la APP de manera nativa   

Para lanzar la aplicación en modo de desarrollo para correr de manera nativa en Android o iOS, debería de tenerse instalado las SDK y algunos extras. Puede consultar la documentación correspondiente [aquí](https://ionicframework.com/docs/intro/deploying/).

Luego de tener los requerimientos instalados, debería ejecutar los siguentes comandos:

```bash
#For Android Devices
ionic cordova run android --prod --release
```

```bash
#For iOS Devices
ionic cordova run ios --device
```