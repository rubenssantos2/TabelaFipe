## Este projeto foi desenvolvido com:

- Javascript, React, CSS 
- API externa  da Tabela Fipe: [http://fipeapi.appspot.com/](http://fipeapi.appspot.com/)

## Requisitos 

Para que o projeto funcione, é necessário:

### Node JS

Para o desenvolvimento, é necessário ter o Node.js instalado na máquina.

#### Instalação no Windows
[Página oficial do Node.JS](http://nodejs.org/)


#### Instalação no OS X
Instale o Homebrew, se ainda não o tiver feito com o seguinte comando:

```$ ruby -e "$(curl -fsSL https://raw.github.com/Homebrew/homebrew/go/install)"```

E então, se tudo estiver instalado, você pode instalar o Node.JS com o comando: 
```brew install node```


#### Instalação no Linux

```
sudo apt-get install python-software-properties
sudo add-apt-repository ppa:chris-lea/node.js
sudo apt-get update
sudo apt-get install nodejs
```


## Instalação do Projeto

```
$ git clone https://github.com/rubenssb/TabelaFipe.git
$ cd TabelaFipe
$ npm install

```


## Inicialização e Watch

Roda a aplicação em modo de desenvolvimento<br />
Abrirá automaticamente no navegador [http://localhost:3000](http://localhost:3000)

```
$ npm start
```

## Build para produção
```
$ npm run build
```


## API interna de consultas de veículos

Desevolvida em PHP
Está contida no repositório: [https://github.com/rubenssb/tabelafipe-backend2](https://github.com/rubenssb/tabelafipe-backend2)

Para rodar localmente, é recomendado o uso de algum serviço como o [WAMP](http://www.wampserver.com/en/) ou o [XAMPP](https://www.apachefriends.org/pt_br/index.html)
