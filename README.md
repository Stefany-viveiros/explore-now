# ExploreNow

**Plataforma web para descoberta e seleção de pacotes de viagens**

## Sobre o projeto

O **ExploreNow** é uma aplicação web desenvolvida para simular a experiência digital de uma agência de viagens, com foco em facilitar a descoberta, filtragem e consulta de pacotes turísticos.

O projeto foi desenvolvido pensando não apenas em uma apresentação institucional, mas em uma base para evolução de uma plataforma de viagens, permitindo que o usuário encontre opções de acordo com destino, categoria, faixa de preço e promoções.

A aplicação tem como foco experiência do usuário, organização de dados, interatividade e possibilidade de evolução para uma arquitetura com backend, banco de dados, autenticação, pagamentos e automações.

## Objetivo

O objetivo do ExploreNow é tornar a busca por viagens mais simples e direcionada.

Em vez de apresentar apenas uma lista estática de destinos, a aplicação permite que o usuário utilize diferentes filtros para encontrar pacotes de acordo com suas preferências e consulte informações detalhadas antes de demonstrar interesse.

## Funcionalidades implementadas

### Busca e filtragem de pacotes

A página de destinos possui um sistema de filtros que permite combinar diferentes critérios:

* Busca por nome do destino;
* Filtro por categoria;
* Filtro por faixa de preço;
* Filtro de promoções;
* Atualização dinâmica dos resultados;
* Tratamento para situações em que nenhum pacote corresponde aos filtros selecionados.

### Cards dinâmicos de destinos

Os pacotes são carregados a partir de uma estrutura de dados em JSON e utilizados pelo JavaScript para gerar dinamicamente os cards apresentados na interface.

Cada card apresenta informações como:

* Nome do destino;
* Categoria da viagem;
* Preço;
* Itens incluídos;
* Indicador de promoção;
* Imagens;
* Acesso aos detalhes do pacote.

Essa abordagem facilita a manutenção e permite adicionar novos pacotes sem alterar manualmente a estrutura HTML da página.

### Carrossel de imagens

Os pacotes podem possuir múltiplas imagens apresentadas em um carrossel interativo.

O usuário consegue navegar pelas imagens utilizando os controles disponíveis na interface, proporcionando uma visualização mais completa dos destinos.

### Detalhes dos pacotes

Ao selecionar um pacote, o usuário pode visualizar informações mais completas por meio de um modal, incluindo:

* Imagem do destino;
* Categoria;
* Nome;
* Preço;
* Descrição;
* Itens incluídos;
* Acesso à página de contato para demonstrar interesse.

O modal também possui diferentes formas de fechamento, incluindo botão de fechamento, clique na área externa e tecla `ESC`.

### Estrutura de navegação

O projeto possui diferentes páginas que compõem a experiência da aplicação:

* Página inicial;
* Destinos;
* Sobre;
* Contato.

A navegação permite que o usuário percorra o fluxo desde a descoberta dos destinos até o contato com a agência.

## Organização dos dados

Os dados dos pacotes de viagem são mantidos separadamente da lógica da aplicação em uma estrutura JSON.

O JavaScript realiza a leitura dessas informações utilizando `fetch()` e utiliza os dados para gerar dinamicamente os elementos apresentados na interface.

Essa separação entre dados, estrutura e comportamento facilita futuras evoluções, como a substituição do arquivo JSON por uma API ou banco de dados.

## Tecnologias utilizadas

* HTML5
* CSS3
* JavaScript
* JSON
* Git
* GitHub

## Conceitos aplicados

* Manipulação do DOM;
* Eventos JavaScript;
* Renderização dinâmica;
* Filtragem de dados;
* Consumo de dados com `fetch`;
* Modais;
* Carrosséis;
* Formatação de valores monetários;
* Design responsivo;
* Organização de arquivos;
* Interações e estados da interface.

## Próximas evoluções

O ExploreNow foi estruturado pensando em uma evolução progressiva da aplicação.

### Backend

Implementação de uma camada backend para substituir os dados estáticos e permitir o gerenciamento de destinos, pacotes, promoções e informações de clientes.

### Banco de dados

Migração da estrutura de dados para um banco de dados, permitindo maior persistência e escalabilidade das informações.

### Autenticação

Implementação de cadastro e login para possibilitar uma experiência personalizada aos usuários.

### Pagamentos

Desenvolvimento futuro de um fluxo de contratação e pagamento dos pacotes diretamente pela plataforma.

### Automação

Evolução do sistema para automatizar etapas da jornada do cliente, desde a descoberta do pacote até o contato e, futuramente, a contratação.

## Aprendizados

O desenvolvimento do ExploreNow permitiu praticar conceitos relacionados à construção de aplicações web, organização de dados e desenvolvimento de interfaces interativas.

Entre os principais aprendizados estão:

* Organização de projetos frontend;
* Separação entre dados e apresentação;
* Manipulação e filtragem de informações;
* Renderização dinâmica utilizando JavaScript;
* Criação de interações com o usuário;
* Tratamento de estados sem resultados;
* Organização de dados utilizando JSON;
* Estruturação de uma aplicação pensando em futuras integrações;
* Evolução incremental de um projeto.

## Status

**Em desenvolvimento**

O projeto atualmente possui uma experiência frontend funcional para descoberta e consulta de pacotes e está sendo estruturado para futuras integrações com backend, banco de dados, autenticação, pagamentos e automações.

## Autora

**Stefany Viveiros Barboza**

Estudante de Análise e Desenvolvimento de Sistemas e Engenharia da Computação, com interesse em desenvolvimento web, inteligência artificial, automação e construção de soluções digitais.
