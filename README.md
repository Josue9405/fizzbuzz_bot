# FizzBuzz Bot
Una mejora al proyecto FizzBuzz, implementando un Bot en Telegram

# Componentes
- JavaScript
- Node
- Eslint
- Jest
- Telegram

# Requisitos previos
Debido a que requerimos un bot de [Telegram](https://telegram.org/), es necesario que tengamos una cuenta en esta plataforma y posteriormente generar un nuevo Bot a través de [BotFather](https://telegram.me/BotFather). Una vez que tengamos esto, BotFather nos dará un token para acceder a su API, este por motivos de seguridad no fue versionado en el proyecto y tendrémos que generar un archivo de nombre `./lib/token-bot.js`
<div align='center'>
  
![image](https://user-images.githubusercontent.com/26264385/167307105-401a7456-774c-4078-85bd-4a2225d760d2.png)

</div>
Este archivo deberá tener la siguiente estructura:
<div align='center'>
  
![image](https://user-images.githubusercontent.com/26264385/167307200-7571b4b9-7930-4854-8e74-a90a39c94d96.png)
  
</div>


# ¿Cómo funciona?
Para iniciar el proyecto es necesario contar con [Node](https://nodejs.org/es/) y [NPM](https://nodejs.org/es/), contando con estos componentes bastará unicamente con ejecutar el comando `npm run bot` para iniciar el bot en Telegram
<div align='center'>
  
  ![run_bot_js](https://user-images.githubusercontent.com/26264385/167307244-6dd3d8a8-88ce-4e00-9a58-4ffe6d7c526f.gif)

</div>
Una vez iniciado, bastará con acceder al chat de nuestro Bot y enviar datos.
<div align='center'>
  
![chat_bot](https://user-images.githubusercontent.com/26264385/167307302-8d122bd4-ae0f-4c07-a18b-0c72eac4490d.gif)

</div>

# Nuevas misiones
Los datos del proyecto son tomados desde `./data/explorers.json`, al cual podremos agregar nuevos registros y misiones. Por ejemplo en mi caso agrege la misión de "elixir" para Tulio y Carlo.
![image](https://user-images.githubusercontent.com/26264385/167307393-7aa31eb6-0704-443a-b63f-86500c7d44e1.png)

Después de reiniciar el proyecto, consultamos al bot y podrá devolver los explorers de esta misión sin necesitad de refactorizar el código.
<div align='center'>
  
  ![chat_bot_elixir](https://user-images.githubusercontent.com/26264385/167307563-174ac617-f77a-4499-9958-6c08cfc10365.gif)

</div>

# Pruebas con Jest
<p style="text-align:center">El software lleva pruebas y punto...</p>

Como una buena práctica, debemos realizar pruebas de nuestro código. Para ello contamos con múltiples herramientas, en este proyecto se utilizó [Jest](https://jestjs.io/) y para ejecutar las pruebas ejecutaremos en nuestro terminal `npm test`
<div align='center'>
  
  ![student_test_js](https://user-images.githubusercontent.com/26264385/166851290-bddcb432-771b-42d8-bb9e-9971028763c7.gif)

</div>

Si todo funciona bien, no te fies, una prueba que no falla al menos una vez, no es óptima.

# ¿Algo no funciona?
- Que no panda el cunico!

Si tienes dudas o no funciona correctamente, con toda confianza enviame un [ticket de incidencia](https://github.com/Josue9405/fizzbuzz_bot/issues/new/choose) y lo revisamos
