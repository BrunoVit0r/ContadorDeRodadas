

# Exercício - ControladorDeRodadas.com

Para este exercício deverá ser criado um servidor com nodejs para controlar rodadas de um jogo. Dado um array de nomes de jogadores que estará no script do servidor, deveremos a cada requisição ao servidor, responder com uma mensagem dizendo de quem é a vez de jogar.

Portanto, supondo que exista no script do servidor, o array **jogadores** abaixo:

```javascript=
const jogadores = ["José", "Maria", "João", "Marcos", "Fernanda"];
```

A cada requisição, deveremos retornar uma mensagem ao navegador no seguinte formato:

```
É a vez de {nomeDoJogador} jogar!
```

Portanto, considerando o array de exemplo acima, na primeira requisição deverá ser retornado:

```
É a vez de José jogar!
```

Na segunda requisição:

```
É a vez de Maria jogar!
```

E assim por diante.

Após apresentar o nome do último jogador, a rodada finaliza e portanto, o próximo nome a ser retornado na próxima requisição deverá ser o do primeiro jogador, iniciando uma nova rodada.

O servidor deverá utilizar a porta 3000 e ser acessado através do endereço http://localhost:3000, para onde enviaremos as requisições e de onde receberemos as respostas com as mensagens mencionadas acima.

###### tags: `backend` `lógica` `exercício` `nodeJS` `JavaScript`
