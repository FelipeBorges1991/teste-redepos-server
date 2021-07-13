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

## Links para acompanhamento da execução de etapas

- Início do lado servidor (W3 > D3 > 7:05) -- https://ironhack.zoom.us/rec/play/VCSZhWaFiqkEDnUSkvq8TGY7QNQ497a5bzKN2a9ugksPKIzNuOE9LiTkZEJheBssftkOj2NEngVpjpr5.mGlnNEs6b_Bn-ZHL?startTime=1620215968000&_x_zm_rtaid=WOfApQ_uSj2TKKLKVfOxjg.1626179570205.83cb22282ec0fb2afa5cab548ded3785&_x_zm_rhtaid=960

- Início do lado cliente (W8 > D1 > 1:22) -- https://ironhack.zoom.us/rec/play/Y5SoE0jKbJNIM8bjSrKr-ZdVXmx45x0dy8UUQ9tpg1BJvtKuupJXZbtybT_YvbSL9stBEV8b9Sk31HaQ.cfHE2fHU8wy1yEka?startTime=1620660365000&_x_zm_rtaid=0OWoqJvyThq9rh-dKTswgw.1626197880636.12d572d050c218d70bbac61d3de909d6&_x_zm_rhtaid=855
