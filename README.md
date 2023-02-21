# Fundamentos do GraphQL na prática (Node.js + React) | Decode #019
Vídeo: https://www.youtube.com/watch?v=6SZOPKs9SUg&t=901s

# Backend
## Criar a pasta pelo VS Code:
> backend
<br />

## Iniciar projeto Node.js no backend:
> npm init -y
<br />

## Instalar as ferramentas para o backend:
> npm i type-graphql graphql apollo-server class-validator reflect-metadata 
<br />

## Instalar o TypeScript em ambiente de desenvolvimento:
> npm i typescript @types/node ts-node-dev -D 
<br />

## Para os decorators funcionarem, devemos instalar:
> npx tsc --init
<br />

Observação: <br />
1) Este comando deve criar o arquivo tsconfig.json que é ajustado depois:
> "target": "es2018",<br />
> "lib": ["es2018", "esnext.asynciterable"],<br />
> "experimentalDecorators": true,<br />
> "emitDecoratorMetadata": true,<br />
> "strictPropertyInitialization": false,<br />

2. Colocar o import no arquiv index.ts:
> import "reflect-metadata";
<br />

3. Caso de o erro abaixo, o import do item 2 deve ficar no início do arquivo.<br />
[ERROR] 17:18:13 TypeError: Reflect.getMetadata is not a function<br />
<br />

# Frontend

## Criar a pasta do frontend pelo vite:
> npm create vite@latest<br />
> ? Project name: > frontend
> ? Select a framework: ><br />
>    React<br />
> ? Select a variant: ><br />
>    react-ts<br />

<br />

## Instalar as ferramentas para o frontend
> npm i @apollo/client graphql
<br />







