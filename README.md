# Website

Este projeto foi gerado usando [Angular CLI](https://github.com/angular/angular-cli) versão 19.1.7.

## Servidor de Desenvolvimento

Para iniciar um servidor de desenvolvimento local, execute:

```bash
ng serve
```

Uma vez que o servidor esteja em execução, abra seu navegador e navegue até `http://localhost:4200/`. A aplicação será recarregada automaticamente sempre que você modificar qualquer um dos arquivos de origem.

## Criação de Código

O Angular CLI inclui ferramentas poderosas de scaffolding de código. Para gerar um novo componente, execute:

```bash
ng generate component component-name
```

Para uma lista completa de esquemas disponíveis (como `components`, `directives` ou `pipes`), execute:

```bash
ng generate --help
```

## Construção

Para construir o projeto, execute:

```bash
ng build
```

Isso irá compilar seu projeto e armazenar os artefatos de construção no diretório `docs/`. Por padrão, a construção de produção otimiza sua aplicação para desempenho e velocidade.

## Executando Testes Unitários

Para executar testes unitários com o [Karma](https://karma-runner.github.io), use o seguinte comando:

```bash
ng test
```

## Executando Testes de Ponta a Ponta

Para testes de ponta a ponta (e2e), execute:

```bash
ng e2e
```

O Angular CLI não vem com um framework de testes de ponta a ponta por padrão. Você pode escolher um que atenda às suas necessidades.

## Servidor SSR

Para servir a aplicação com renderização do lado do servidor (SSR), execute:

```bash
npm run serve:ssr:website
```

## Estrutura do Projeto

A estrutura do projeto é a seguinte:

```
.angular/
.cache/
.editorconfig
.gitignore
.vscode/
extensions.json
launch.json
tasks.json
angular.json
docs/
3rdpartylicenses.txt
browser/
.nojekyll
404.html
data/
favicon.ico
index.html
main-5BIGRF4Z.js
me.jpg
...
prerendered-routes.json
server/
package.json
public/
data/
...
favicon.ico
me.jpg
me.jpg:Zone.Identifier
README.md
src/
app/
...
index.html
main.server.ts
main.ts
server.ts
styles.scss
tsconfig.app.json
tsconfig.json
tsconfig.spec.json
```

## Deploy para GitHub Pages

```bash
ng deploy --base-href=https://alosaulo.github.io/ --name=alosaulo --email=saulocalimangomes@gmail.com
```

## Recursos Adicionais

Para mais informações sobre o uso do Angular CLI, incluindo referências detalhadas de comandos, visite a página [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli).
