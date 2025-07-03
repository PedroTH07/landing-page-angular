# Landing Page com Angular

Esse é um projeto de uma landing page feita com angular usando SSR (Server-Side Rendering) e SCSS, o projeto além de dividido em componentes, também se comunica com um backend de testes via POST a partir de um service da aplicação.

O projeto é simples, mas me ensinou muitas coisas do angular, assim como o vídeo que eu usei de base para a contrução desse projeto, o vídeo é da [Fernanda Kipper](https://github.com/Fernanda-Kipper), caso tenha vontade de aprender sobre angular recomendo muito a playlist dela sobre o framework.

## 🚀 Como rodar o projeto (com node)

### 📦 Pré-requisitos

- Node.js versão ^18.13.0 (versão mínima)
- Angular CLI instalado globalmente ^19.2.0
```bash
npm install -g @angular/cli
```
### 🛠️ Instalação

1. Clone o repositório na sua máquina
```bash
git clone https://github.com/PedroTH07/landing-page-angular.git
cd landing-page-angular
```
2. Instale as dependências do projeto
```bash
npm install
```

### ▶️ Rodando o projeto

```bash
npm run start
```

ou

```bash
ng serve
```

## 🚀 Como rodar o projeto (com docker)

### 📦 pré-requisitos

- Docker

### 🛠️ Build do projeto

1. Clone o repositório na sua máquina
```bash
git clone https://github.com/PedroTH07/landing-page-angular.git
cd landing-page-angular
```
2. Build o container
```bash
docker build -t landing-page .
```

### ▶️ Rodando o projeto

```bash
docker run -p 4200:4200 landing-page
```

e acesse [http://localhos:4200/](http://localhost:4200) no seu navegador

## Readme gerado pelo angular 🅰️

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.2.14.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
