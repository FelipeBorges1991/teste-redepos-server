# Considerações iniciais para realização do projeto

Controle de salas, professores e alunos (Não necessita controle de acesso)

- Tela inicial --> Lista com a opção de escolher uma das 3 opções: Sala, Professores ou Alunos

  - Tela de listagem/edição de salas
  - Tela de listagem/edição de professores
  - Tela de listagem/edição de alunos

- Criação dos CRUDS

## Regras

- Uma sala pode ter 1 ou mais professores
- Um professor pode ter 0 ou 1 sala
- Um aluno precisa ter 0 ou 1 professor
- Os professores sem sala devem estar destacados com a cor azul em sua listagem
- Os alunos sem professores devem estar marcados de vermelho na sua listagem

## Pontos importantes

- Os formulários deverão ter validações em todos os campos
- O código deverá ser claro e com a menor complexidade possível

## Considerações sobre o SGBD utilizado

- Devido a falta de conhecimento de banco de dados relacionais, utilizarei o MongoDB para execução do projeto, sendo essa a ferramenta
  que utilizei em meus estudos.
