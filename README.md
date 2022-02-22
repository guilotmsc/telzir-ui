# Telzir UI

UI do projeto Telzir

## Rodando aplicação local

### Instalação:

Este projeto utiliza docker, para roda-lo localmente.

1. Renomeie o arquivo .env.example para .env
2. Execute: `docker-compose up`

A aplicação estará rodando em [http://localhost:3000](http://localhost:3000) no ambiente local.

## Testes:

Para rodar os testes automatizados:

1. Acesse o container: `docker exec -it id_do_container bash`
2. Execute `yarn test`
