
# Landing Page - Leadster

![image](https://github.com/filipezaidan/leadster-test-frontend/assets/41112779/6dec283b-f91c-4ea8-a75b-5d0202fa05b7)




Este é um projeto teste para a posição de Desenvolvedor Frontend na empresa [Leadster](https://leadster.com.br/). Neste README, apresentarei minha experiência na execução do teste, destacando as decisões que tomei, a organização do código, as funcionalidades implementadas e, por fim, fornecendo instruções detalhadas para a execução do projeto.

## Decisões tomadas

### Análise do protótipo

No início do projeto, iniciei realizando uma análise do layout fornecido pela empresa para o desenvolvimento do protótipo e identifiquei as estruturas bases como: cabeçalho (Header), seção principal, seção de vídeos, seção dos benefícios da plataforma, rodapé (Footer) e os componentes de cada uma dessas estruturas que seriam implementados posteriormente. Para auxiliar nessa etapa, utilizei a ferramenta [Figma](https://www.figma.com/), onde adicionei algumas anotações relevantes como espaçamentos entre os elementos, cores e os estilos das fontes.

### Configuração do setup do projeto

Para o setup do projeto, utilizei o [template](https://nextjs.org/docs/getting-started/installation) oficial do NextJS  e configurei para utilizar as seguintes: Typescript e ESlint.

>  **Observação**. Como nesse projeto um dos requisitos para o desenvolvimento era utilizar a biblioteca do styled-components para a estilização dos componentes, decidi não optar em configurar o projeto para utilizar o Tailwind CSS.

### Commits

Um dos padrões que costumo e gosta de usar quando faço commits aqui no Github é utilizar o [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/), que estabelece um formato específico para as mensagens de commit, visando tornar o histórico compreensível, consistente e facilitar a geração de changelogs automáticos. A principal vantagem de usar convencional commits é melhorar a clareza e a legibilidade do histórico, principalmente quando estamos trabalhando em equipe, ter uma estrutura padronizada nas mensagens de commit facilita entender as alterações feitas em cada commit e rastrear as mudanças ao longo do tempo.

### Desenvolvimento
  
Durante o processo de desenvolvimento, foquei inicialmente na otimização do código gerado pelo template e na implementação das estruturas que identifiquei durante a análise do protótipo. Nessa fase, meu principal objetivo era garantir a consistência e a estética dos componentes, considerando aspectos como tamanho, cor e fonte. Embora a responsividade não tenha sido uma prioridade inicial, essa abordagem me permitiu gerenciar melhor o tempo, concentrando em etapas menores e mais rápidas de desenvolvimento, o que resultou na conclusão do projeto dentro do prazo estabelecido. 

## Organização do código

A organização do código é fundamental para manter um projeto limpo e de fácil manutenção. Aqui está uma visão geral da estrutura do projeto:

```
- /components: Armazena os componentes reutilizáveis do projeto
- /fonts: Contém as fonts que foram utilizadas desenvolvimento 
- /mocker: Contém arquivos de dados para serem consumidos durante a execução do projeto
```

Além disso, adotei uma abordagem para os componentes, dividindo-os em diretórios individuais com seus respectivos arquivos de estilo e dependências relacionadas.


## Funcionalidades implementadas

No projeto, foram implementadas as seguintes funcionalidades:

1. **Filtro de vídeos**: Na listagem de vídeos, foi adicionada a funcionalidade de filtrar os vídeos com base em categorias.
2. **Paginação**: Foi desenvolvida a lógica para gerar a paginação de forma dinâmica, considerando o número máximo de vídeos por página e a quantidade total de vídeos.

## Instruções para executar o projeto

Para executar o projeto localmente, siga as etapas abaixo:

1. Certifique-se de ter o [Node.js](https://nodejs.org/pt-br/download/current) instalado em sua máquina.
2. Clone o repositório para o seu ambiente de desenvolvimento:
	```git
	git clone https://github.com/filipezaidan/leadster-test-frontend.git 
	```
3. Navegue até o diretório raiz do projeto.
4. Execute o comando `npm install`  para instalar as dependências do projeto.
5. Após a conclusão da instalação, execute o comando `npm run dev`  para iniciar o servidor de desenvolvimento.
6. Abra seu navegador e acesse `http://localhost:3000` para visualizar o projeto em execução.

Certifique-se de ter uma conexão de internet ativa, pois algumas funcionalidades como a renderização dos vídeos do YouTube depende de chamadas a APIs externas.
