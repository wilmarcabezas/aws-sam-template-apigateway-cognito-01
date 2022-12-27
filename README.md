# API sin servidor con AWS Cognito y DynamoDB

Este repositorio contiene una plantilla de AWS SAM (Modelo de Aplicación sin Servidor) que demuestra cómo crear una API sin servidor usando AWS Cognito para la autenticación de usuarios y DynamoDB para el almacenamiento de datos. La plantilla está escrita en YAML y utiliza AWS Lambda, Amazon API Gateway y el AWS SDK para JavaScript.

## :rocket: Comenzando

Para comenzar con esta plantilla, necesitarás tener instalados los siguientes prerrequisitos:

- La CLI de AWS SAM
- Node.js
- npm (que se incluye con Node.js)

Una vez que tengas estos prerrequisitos instalados, puedes clonar este repositorio y instalar las dependencias ejecutando los siguientes comandos:

```bash
git clone https://github.com/wilmarcabezas/aws-sam-template-apigateway-cognito-01.git
cd aws-sam-template-apigateway-cognito-01
npm install
 
 continuación, necesitarás configurar una cuenta de AWS y tu entorno local con las credenciales necesarias. Puedes seguir la documentación de AWS 
 para obtener instrucciones sobre cómo hacerlo.

Una vez que hayas configurado tu entorno, puedes desplegar la plantilla en tu cuenta de AWS ejecutando el siguiente comando:sam deploy --guided


:books: Recursos
La plantilla define los siguientes recursos:

Un grupo de usuarios de Amazon Cognito para administrar cuentas de usuario y autenticación.
Una piscina de identidades de Amazon Cognito para conceder acceso a recursos de AWS.
Una tabla de DynamoDB de Amazon para almacenar datos de usuario.
Una función de AWS Lambda para manejar solicitudes de API.
Una API de Amazon API Gateway para exponer la función de Lambda como una API RESTful.
