# vue-google-maps-example

Exemplo de integração entre Vue.js 2 + VueGoogleMaps em projetos que usam [vue-cli / webpack](https://github.com/vuejs-templates/webpack):

Note que você deve usar a versão **Fork** do projeto **vue-google-maps** pois a versão original não é compatível com Vue.js 2 (e segundo o próprio desenvolvedor não há previsão de quando isso irá ocorrer). O repositório do Fork está disponível neste link: https://github.com/Kofre/vue-google-maps

Ao analisar o código você irá perceber que terá que usar as versões Standalone / CDN do Vue e VueGoogleMaps (eu simplesmente não consegui usar este último através de loader / import).

Os arquivos do exemplo derivam de um projeto padrão criado através do **vue init webpack _projeto_** - as únicas alterações ocorrem no **index.html** (inserção das bibliotecas via CDN), **main.js** (remoção da referência ao Vue / import) e **.eslintrc.js** (definição dos objetos Globais).

Não é a melhor forma mas funciona!

Sugestões são bem vindas!

# Para Testar

```
$ git clone https://github.com/uebbi/vue-google-maps-example.git
$ cd vue-google-maps-example
$ npm install
$ npm run dev
```
