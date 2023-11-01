const express = require('express')
// Passa uma informação do express para constante express

const userService = require('./services/users')


const app = express();

// O express passa se tornar uma função e direciona para uma constante
const port = 3000

//  Utiliza para obter recursos, permitindo o uso de Json

// Simulação de um banco de dados
//get users
app.get('/users', (request, response) => {
  response.json(userService.getUsers()); // Retorna os usuarios do bd
})

app.get('/users/:id', (request, response) => { // Adiciona informações

  // pegar o ID da requisição
  const idUser = request.params.id;

  // // encontrar o usuario correspondente no bd
  // const user = bd.filter((usuario) => usuario.id === idUser);
  response.json(userService.getUsersById(idUser));

  // responder a requisição com as info do user
  response.json(user);

})

app.post("/users", (request, response) => { 
  const body = request.body;
  response.json(userService.creatUser(body));

})

  app.delete("/users/:id", (request, response) => {
     const idUser = request.params.id;
  userRepository.deleteUser(idUser);
  response.json("Apagado com sucesso");

  // status(201) usa quando voce ciou algo 


  // responder com o meu banco atualizado
  response.json(bd);
})

  app.patch("/users/:id", (request, response) => {
const idUser = request.params.id;
const body = request.body;
userRepository.updateUser(idUser, body);
response.status(200).json();
})

// atualizar as informações

// exibir a requisição com o banco

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


