# Lambda Router Manager

Esta aplicação permite utilizar a mesma aplicação em diversas rotas do API Gateway, onde o desenvolvedor pode gerenciar cada rota individualmente por meio de controllers.

## Funcionalidades

- Gerenciamento de rotas individualmente
- Suporte para múltiplos controllers
- Fácil integração com outras aplicações

## Instalação

1. Clone o repositório:
   ```sh
   git clone <URL_DO_REPOSITORIO>
   ```
2. Navegue até o diretório do projeto:
   ```sh
   cd lambda-router-manager
   ```
3. Instale as dependências:
   ```sh
   npm install
   ```

## Uso

1. Importe o pacote em sua aplicação:

   ```ts
   import lambda from "lambda-router-manager";
   ```

   2. Configure suas rotas e controllers conforme necessário.

   ```ts
   const routes = [
     {
       path: "/rota1",
       method: "GET",
       controller: controller1,
     },
     {
       path: "/rota2",
       method: "POST",
       controller: controller2,
     },
   ];

   export const handler = async (event) => {
     return await lambda.app(event, routes);
   };
   ```

   ```ts
   // Exemplos de controllers
   const controller1 = (request: IRequest, response: IResponse) => {
     response.send("Resposta da rota1");
   };

   const controller2 = (request: IRequest, response: IResponse) => {
     response.send("Resposta da rota2");
   };
   ```

2. Configure suas rotas e controllers conforme necessário.

## Contribuição

1. Faça um fork do projeto
2. Crie uma nova branch:
   ```sh
   git checkout -b minha-nova-funcionalidade
   ```
3. Faça suas alterações e commit:
   ```sh
   git commit -m 'Adiciona nova funcionalidade'
   ```
4. Envie para o repositório remoto:
   ```sh
   git push origin minha-nova-funcionalidade
   ```
5. Abra um Pull Request

## Licença

Este projeto está licenciado sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## Contato

Para mais informações, entre em contato pelo email: [dhominidasilvapereira@gmail.com](mailto:dhominidasilvapereira@gmail.com)
