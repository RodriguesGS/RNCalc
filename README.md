# RNCalc 🧮

Este projeto consiste no desenvolvimento de uma calculadora mobile com interface interativa, criada em React Native com Expo para realizar operações matemáticas básicas por meio de botões e atualização dinâmica do visor.

A aplicação permite ao usuário realizar cálculos com as seguintes operações:

* `+` soma
* `-` subtração
* `*` multiplicação
* `/` divisão
* `%` módulo

Além disso, o sistema também oferece funcionalidades auxiliares, como limpeza completa da operação e remoção do último caractere digitado.

---

## Objetivo do projeto

O objetivo principal deste projeto é praticar conceitos fundamentais do desenvolvimento mobile com React Native em um cenário simples, mas completo, envolvendo lógica de programação e construção de interface.

---

## Visão geral da aplicação

A calculadora foi desenvolvida para permitir que o usuário realize operações matemáticas básicas por meio de uma interface simples e intuitiva.

### Funcionalidades disponíveis

* inserção de dígitos de `0` a `9`
* inserção de números decimais com `.`
* seleção de operações matemáticas
* exibição do resultado ao clicar em `=`
* limpeza completa do visor com `AC`
* exclusão do último caractere com `⌫`
* tratamento de divisão por zero com mensagem de erro

---

## Tecnologias utilizadas

* React Native
* Expo

---

## Organização das pastas

### `app/`

Contém os arquivos principais da aplicação e as rotas do projeto.

### `app/components/`

Contém os componentes reutilizáveis da calculadora, como:

* `Button.tsx`
* `Calculator.tsx`

### `docs/`

Pasta destinada à documentação complementar do projeto.

### `docs/design/`

Contém materiais relacionados ao protótipo e ao planejamento visual da interface.

### `docs/design/assets/`

Armazena as imagens utilizadas na documentação visual do projeto.

### `docs/requirements/`

Contém os documentos de requisitos e escopo do sistema.

---

## Como executar

### 1. Clone o repositório

```bash
git clone https://github.com/RodriguesGS/RNCalc.git
```

### 2. Acesse a pasta do projeto

```bash
cd RNCALC/app
```

### 3. Instale as dependências

```bash
npm install
```

### 4. Execute o projeto

```bash
npx expo start
```

---

## Licença

Este projeto foi desenvolvido para fins acadêmicos e de aprendizado.
