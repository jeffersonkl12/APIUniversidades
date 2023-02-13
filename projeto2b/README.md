# INFO

O datasource do mongoDB usa as configurações padrões:  url é local: "127.0.0.1" usa a porta padrão: "27017" usa um banco de dados de nome: "universidade" ja a colecção é "universidades", mas toda a configuração do data source pode ser alterado no arquivo dotenv.env.

Para iniciar a API basta usar comando npm run start ou apenas npm start. Agora para acessar a API basta usar os mesmo endpoints que foi indicado pelo pdf.


# END POOINTS- ACESSO API

GET /universities - retorna todas as universidades "todos GET retornam uma paginação". GET /universities?country - {país} retorna uma coleção filtrada por país. GET /universities?page - {numero da página} retorna a página desejada.

POST /universities - Ele persiste uma universidade no banco de dados desde que ele tenha alguns campos que devem ser validos como url e 2 caracteres min/max para código alfa.

PUT /universities/:id atualiza universidade se ela existir.

DELETE /universities/:id deleta coque universidade desde que ela exista.



 