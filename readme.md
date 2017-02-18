![alt tag](https://github.com/luizotcarvalho/tripstr/blob/master/static/images/demo.png?raw=true)

Desafio de front-end Atech.

Aplicação de cadastro de viagens utilizando AngularJs, Bootstrap, Bootstrap UI, Gulp, SASS e LocalStorage. 
Projeto feito apartir do https://github.com/jhades/angularjs-gulp-example para agilizar a estruturação da build gulp.

# Arquitetura

## JS
O código JS da aplicação é organizado utilizando 3 camadas:
* **Api's**: É onde contem todos os end-points da aplicação do back-end, é quem expõe os métodos para a aplicação.
* **Serviços**: É onde estão os modelos de dados e a lógica de negócio da aplicação. É quem conversa diretamente com api.
* **Diretivas**: São os componentes de tela da aplicação, consomem os dados já "mastigados" pelos serviços.

## SASS
O código SASS é escrito usando uma mistura das metodologias BEM e SMACSS. Resultando em componentes com escopo de estilo isolado e organizados de entendimento e manutenção fácil e baixo risco de gerar bugs na aplicação.

# Instalação

Necessário node 6.x.x para funcionar corretamente.

Primeiro, verifique se você já tem o gulp e bower, se não tiver, instale:

    npm install -g gulp bower

Depois de clonar o projeto rode:

    npm install
    gulp
    gulp dev

Será iniciado um servidor na porta 9005 apontando para o index.html do projeto.



