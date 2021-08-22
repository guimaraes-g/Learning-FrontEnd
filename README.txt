🏄‍♂️

Primeira parte de anotações se centra em descrever comandos específicos de tags em HTML5 e CSS3.

Convém-se em dividir os arquivos de HTML e CSS, o nome, "index.html" para a página principal do site, e "style.css" para o estilo. 

## Tags em HTML5

**<!DOCTYPE html>** : tag inicial de todo arquivo html. Indica que está usando a versão 5 do HTML.

**<html lang="pt-br">** : todo o corpo do código estará dentro dessa tag. ela informa como metadado para o navegador que a página está em português do Brasil.

/* : indicação de comentário em várias linhas.

**<head>** : tag que inicia a "cabeça" do código onde serão incluídas as informações necessárias de metadado para o navegador. Nada dentro desta tag será exibida no corpo da página em si (apenas o **<title>** que indicará o título da página para ficar no Frame), serve apenas para dar informações.

<meta charset="UTF-8"> : tag de metadado para o navegador informando o típo dos caracteres a serem exibidos na página.

**<title>** : tag do título no Frame da página.

**<link rel="stylessheet" type="text/css" href="\**arquivo.css\**">** : tag que vai linkar o arquivo html com um arquivo do tipo CSS. O atributo rel vem de relationship e serve para você dizer qual o relacionamento do arquivo que você quer utilizar com o arquivo atual. Quando você coloca *rel="stylesheet"*, você está dizendo que o arquivo importado é o arquivo responsável pelo estilo da sua página. O segundo argumento "type="text/css" não é obrigatório no HTML5 e pode ser dispensável. Usa-se apenas por convenção. Em "href="arquivo.css"" se está dando uma referencia ao navegador sobre qual é o arquivo que se quer linkar.

<meta name="viewport" content="width=device-width"> : metadado que solicita ao navegador a resolução do dispositivo que está acessando a página e indica uma folha de estilo que seja adequada a resolução posta. No CSS, deve ter a declaração: "@media screen and (max-width: Xpx) and (min-width: Xpx)" para indicar a adaptação da nova resolução e quais serão os pontos a serem modificados.

**<body>** : corpo do código do seu site. Nele ficarão armazenadas as informações em *hypertext* que você deseja exibir no seu navegador.

**<header>** : dentro desta tag ficará as informações necessárias para o cabeçalho da sua página. Ou seja, aquilo que estará em evidência no canto superior.

<div> : demarcação de um bloco dentro da sua página. Dentro dele, haverá outras tags. Significa divisão. É apenas uma divisão visual.


**<section>** : divisão específica para um conteúdo.

**<**"tag" **class="\**nome da classe\**"** : significa a criação de uma classe dentro do seu código. Você poderá definir parâmetros de estilo que permearão todas as classes de mesmo nome. Ela demarca que tal tag pertênce a tal classe.

**<**"tag" **id="\**nome da identificação\**">** : utilizado para aplicar um estilo a um elemento único.

**<h1>** : hypertext principal do seu código. Pode ser uma imagem, um título, quaquer coisa. Ficará em destaque.

**<nav>** : significa navegação. Tag definida para quando você for criar um menu de navegação em seu site.

**<ul>** e **<ol>** : tags que indica a criação de uma lista. A principal diferença entre a lista não-ordenada(**<ul>**) e a lista ordenada(**<ol>**) está na maneira com que os itens de cada lista são apresentados - a lista ordenada enumera os elementos; a lista não-ordenada coloca marcadores antes de cada elemento.

**<li>** : itens da sua lista.

<img src="imagem.tipo"> : indica para o código a implementação de uma imagem no seu site. "src="..."" significa source e entre as áspas será definido o arquivo de imagem que você deseja inserir. É necessário também incluir "alt="descrição da imagem"" para ajudar no sentido de acessibilidade da página.

<a href="destino"> : o elemento <a> em HTML (ou elemento âncora), com o atributo href cria-se um hiperligação nas páginas web, arquivos, endereços de emails, ligações na mesma página ou endereços na URL. O conteúdo dentro de cada <a> precisará indicar o destino do link.

**<main>** : indica o conteúdo principal dentro do seu **<body>**, devendo ser único e contido pelo mais importante na sua aplicação.

**<form>** : Indica a criação de um formulário.

**<label** for="objeto do formulário a ser preenchido"**>** : indica a criação de um painel que identificará um input.

**<input** type="tipo de input" id="objeto do formulário a ser preenchido" class="input_padrão" **required placeholder="\**mensagem exibida no input previamente\**">** : entrada de dados da interface com o banco de dados da página. O "type" orienta o tipo de entrada, podendo ser "text, email, telefone", é importante para que usuários mobile ao clicar no campo tenham uma disposição do teclado facilitada para tal grupo de input. O "id" conecta o elemento de input ao elemento de label. **Required** informa ao navegador que para mandar aqueles dados é preciso preencher o campo de input sinalizado. **Placeholder** coloca uma mensagem prévia no campo, apenas como uma sombra, para orientar o usuário ao quê e como deve colocar seus dados.

**<textarea** cols="X" rows="X"**> :** indica a criação de um campo de mensagem dentro do formulário. Colunas e linhas podem ser dispostas para realizar o tamanho do campo.

**<fieldset>** : utilizado para agrupar elementos de um campo fechado de informações dentro de um formulário. Serve para organizar melhor o código.

**<legend>** :

**<h2>** ... **<hn>** : determina crescentemente o nível de importância do conteúdo em sua página.

<p> : define um parágrafo na sua página. O navegador entenderá que após o conteúdo deve-se separar uma linha para o próximo conteúdo.


**<hr>** : define uma linha horizontal dentro da sua página.

**<strong>** : define que o conteúdo contido na tag será exibido em negrito. Caso tenha linkado o "reset.css" no início você precisará definir em estilo o "font-weight: bold".

**<em>** : define que o conteúdo contido na tag será exibido em itálico. Serve as mesmas recomendações para a tag **<strong>**, tendo que indicar no estilo o "font-style: italic".

**<footer>** : define o rodapé da sua página. Localizado no ponto mais inferior do site.

(☞ﾟヮﾟ)☞ O símbolo de copyright pode ser desenhado inserindo "©".

## Estilos em CSS3

**"\**nome da tag\**" {}** : define o estilo de uma tag.

**."\**nome da classe\**" {}** : define o estilo de uma classe.

**#**"nome da id" **{}** : define o estilo de uma identificação.

**"**elemento-pai" "elemento-filho" **{}** : especifica a definição para um elemento que está contido em outro.

"elemento pai" > "elemento-filho" {} : selecionará apenas o elemento filho direto do elemento pai.

"elemento-ancora" + "elemento-irmão" {} : selecionará o elemento que está logo após o elemento âncora.

"elemento-ancora" ~ "elementos-após" {} : selecionará todos os elementos após do elemento âncora.

"elemento" "elementos":not("elemento") : selecionar todos os elementos exceto o especificado.

**"\**declaração\**":hover {}** : evento ao passar o mouse sobre o elemento. Caso queira extender o evento a um elemento filho, defini-lo após o comando hover.

"declaração"**:active {}** : evento ao clicar com o mouse.

### Declarações de estilo

**background:** "cor"; : definição de background da tag.

**color:** "cor"; : definição de cor da fonte.

**text-align: "xpx** ou **x%";** : alinhamento do texto dentro da tag.

**text-transform:** "capitalize, uppercase, lowercase, none"; : comando que determinará como capitalizar um elemento de texto (em caixa alta, caixa baixa). **capitalize** : a primeira letra de todas as palavras em caixa alta; **uppercase :** tudo em caixa alta; **lowercase :** tudo em caixa baixa; **none :** impede que modificações de capitalização sejam feitas.

**text-decoration:** "underline, underline dotted, underline dotted red, green wavy underline, underline overline #"color""; : sublinhar, tracejar com pontos, tracejar com ondas, tracejar baixo e cima.

**font-size: "xpx"** : tamanho da fonte.

**font-weight: "**100 à 900"; ****: peso do texto (colocá-lo em negrito ou clarear).

**font-family: "**fonte"; : determina a fonte a ser usada.

**font-style: "italic, oblique, normal, oblique "\**angulodeg"\**";  :** determina como a fonte será estilizada a partir da **font-family**. Dentro do **oblique** você poderá determinar o ângulo de inclinação que a fonte terá.

**border:** "solid, dashed "color", "tamanho" solid, thick double #"color", 4mm ridge rgba(0,0,0,.0)"; : significa a borda do elemento. Sendo o "solid" uma linha padrão ao entorno do elemento; "dashed "color" uma linha tracejada; "tamanho" solid uma forma de você controlar o tamanho da borda; "thick double "color" a borda será duplicada; "4mm ridge rgba(...) a borda será estilizada tipo 3d. Pode ser especificada com "-color : definir a cor da borda, -style : estilo para a borda, -width : peso da borda; -radius : arredondamento da borda; esses valores podem ser acrescidos de determinações para os lados, cima e baixo.

**margin: "**1em, 10% 0, 10px 50px 20px, 10px 50px 30px 0, 0"; : do inglês "margem". Espaçamento externo entorno do elemento. 1 parâmetro: cima, baixo e laterais; 2 parâmetros: cima e baixo, laterais; 3 parâmetros: cima, laterais, baixo; 4 parâmetros: cima, direita, baixo, esquerda. Pode ser especificada com "-bottom, -left, -right, -top" após o comando **margin**.

**margin: 0 auto;** : atributo para gerar automaticamente a centralização do elemento na tela.

**padding: "**1em, 10% 0, 10px 50px 20px, 10px 50px 30px 0, 0"; : do inglês "acolchoado". Espaçamento interno entorno do elemento. 1 parâmetro: cima, baixo e laterais; 2 parâmetros: cima e baixo, laterais; 3 parâmetros: cima, laterais, baixo; 4 parâmetros: cima, direita, baixo, esquerda. Pode ser especificada com "-bottom, -left, -right, -top" após o comando **padding**.

**width** "medida"; **:** largura.

**height** "medida"; **:** altura.

**display** "inline, block, inline-block"; : a forma como vamos renderizar o elemento na tela.

**vertica-align: ...;** : alinhamento em relação a um elemento de linha que esteja ao seu lado.

position: "static, fixed, relative, absolute, sticky"; : definir a posição do elemento na tela. "static": posição de acordo com o fluxo normal do documento, mudanças de posição não são aceitas; "fixed": elemento fixo na página, independente do scroll;  "relative": o elemento é posicionado de acordo com o fluxo normal do documento, porém você poderá fazer alterações utilizando top, right, bottom, left; "absolute" o elemento é removido do fluxo normal do documento, e se mantém absoluto de acordo com os outros elementos; "sticky":  vem da ideia de adesivo, o elemento se move conforme a barra de rolagem desce, quando chegar na posição do elemento, ele fica fixo.