# Cifra de César

## Sumário

* [1. Introdução](#1-introdução)
* [2. Desenvolvimento do projeto](#2-desenvolvimento-do-projeto)
* [3. Concluindo](#3-concluindo)

***

## 1. Introdução

A proposta inicial deste projeto foi criar uma aplicação web que realizasse a cifra de césar, tanto para cifrar como para
decifrar uma mensagem que fosse enviada pelo usuário. Para a realização desse projeto, foram estabelecidos alguns
requisitos e material de apoio para que a ideia fosse executada com sucesso.
Diante da proposta, a escolha foi fazer uma aplicação que cifre e decifre uma mensagem secreta, sem um tema específico. A ideia inicial era fazer uma aplicação web que cifrasse e decifrasse um ingrediente secreto, para uma receita _“X”_, numa vibe de _“dia das bruxas”_, por isso as cores clássicas preto, laranja e roxo. 
O projeto não está finalizado/completo, mas apresento aqui o que foi construído até aqui, diante da proposta inicial.

## 2. Desenvolvimento do projeto

Os itens a seguir, abordam as partes essências para a construção desse projeto:

### Esboço do projeto

A seguir, estão imagens do esboço feito e seguindo para construir o visual do projeto e desenvolver a lógica básica no JavaScript, para agir conforme a interação do usuário:

![Esboço 1, que foi seguido para a execução desse projeto](src/img/esbocoa.jpg)

![Esboço 2, uma alternativa para exibir a msg ao usuário](src/img/esbocob.jpg)

![Esboço 3, uma opção alternativa](src/img/esbococ.jpg)


### Planejamento

A seguir tem parte do planejamento breve feito através da ferramenta Trello para ir estruturando a aplicação e acompanhar o progresso do desenvolvimento:

![Geral da organização no Trello](src/img/trelloa.png)

![Card com checklist feito](src/img/trellob.png)

![Card com checklist em andamento](src/img/trelloc.png)

### Na prática

Para desenvolver esse projeto foram utilizadas as linguagens: HTML5 (marcação), CSS(estilo) e JavaScript (lógica).
Inicialmente, foi construida toda a estrutura no HTML, onde cada parte ficaria e foi atribuído nome a cada uma das tags que fossem ser chamadas/conectadas, tanto no CSS como no JS. 
Depois de atriuir os nomes, foram feitas as configurações no arquivo CSS e depois foi iniciada a construção da parte lógica no JS, onde o projeto parou até o presente momento. 


## 3. Concluindo

Agora, o que falta para finalizar é: 
  * Construir as funções de cifrar (`cipher.encode´) e decifrar (`cipher.decode´) a palavra ou mensagem;
  * Definir uma função throw TypeError, para o caso de o usuário inserir um valor diferente do que é requerido para que seja executada a função;
 * Definir uma função de alerta para o caso do usuário não inserir nenhum tipo de valor e assim, não continuar com a execução da função;
 * Estruturar melhor o CSS para ficar mais próximo melhorado, diante do esboço feito;
 * Fazer os testes para ver se as funções todas estão funcionando conforme o esperado.

  Obrigada pela atenção! :sunflower: :yellow_heart:

