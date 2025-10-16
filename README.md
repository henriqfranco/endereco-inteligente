# 📍 Endereço Inteligente

Sistema de cadastro de endereços com validações automáticas e formatação de campos.

## 📋 Descrição do Projeto

Aplicação web desenvolvida para cadastro de endereços com validações em tempo real e formatação automática dos campos. O projeto implementa boas práticas de validação de formulários usando JavaScript puro.

## ✨ Funcionalidades

### Campos do Formulário

- **CEP** (obrigatório)
  - Formatação automática: `00000-000`
  - Validação com regex usando grupos de captura
  - Aceita apenas números

- **Logradouro** (obrigatório)
  - Mínimo de 5 caracteres
  - Validação de campo vazio

- **Número** (obrigatório)
  - Aceita apenas dígitos numéricos
  - Validação com regex

- **UF** (obrigatório)
  - Exatamente 2 letras maiúsculas
  - Conversão automática para maiúsculo durante digitação
  - Validação com regex

- **Complemento** (opcional)
  - Campo livre para informações adicionais

## 🎯 Validações Implementadas

### ✅ Validações em Tempo Real

1. **Máscara de CEP**: Ao digitar `12345678`, o campo exibe automaticamente `12345-678`
2. **UF Maiúscula**: Qualquer letra digitada é convertida para maiúscula automaticamente
3. **Apenas Números**: O campo "Número" aceita somente dígitos

### ✅ Validações no Envio

- CEP no formato correto (regex: `/^(\d{5})-(\d{3})$/`)
- Logradouro com no mínimo 5 caracteres
- Número contendo apenas dígitos (regex: `/^\d+$/`)
- UF com exatamente 2 letras maiúsculas (regex: `/^[A-Z]{2}$/`)
- Mensagens de erro específicas para cada tipo de validação

## 🚀 Como Utilizar

### Pré-requisitos

- Navegador web moderno (Chrome, Firefox, Edge, Safari)
- Nenhuma dependência externa necessária

### Instalação

1. Clone o repositório:
```bash
git clone https://github.com/henriqfranco/endereco-inteligente.git
```

2. Navegue até o diretório:
```bash
cd endereco-inteligente
```

3. Abra o arquivo `endereco.html` no navegador

### Uso

1. Preencha todos os campos obrigatórios (marcados com *)
2. O CEP será formatado automaticamente enquanto você digita
3. A UF será convertida para maiúsculo automaticamente
4. Clique em "Cadastrar Endereço"
5. Se houver erros, um alerta aparecerá indicando o problema
6. Se tudo estiver correto, você verá: "✅ Endereço cadastrado com sucesso!"

## 📁 Estrutura de Arquivos

```
endereco-inteligente/
│
├── endereco.html    # Página HTML com formulário
├── script.js        # Lógica de validação e formatação
└── README.md        # Documentação do projeto
```

## 🛠️ Tecnologias Utilizadas

- HTML5
- CSS3
- JavaScript (ES6+)
- Regex (Expressões Regulares)

## 🎨 Recursos de Interface

- Design responsivo (mobile-first)
- Gradiente moderno
- Animações suaves nos botões
- Feedback visual nos campos
- Ícones e emojis para melhor UX

## 📝 Exemplos de Uso

### CEP
- ✅ Válido: `12345-678`
- ❌ Inválido: `12345678`, `123-45678`, `abcde-fgh`

### Logradouro
- ✅ Válido: `Rua das Flores`, `Avenida Paulista`
- ❌ Inválido: `Rua`, `Av.` (menos de 5 caracteres)

### Número
- ✅ Válido: `123`, `4567`, `1`
- ❌ Inválido: `12A`, `número 5`, `s/n`

### UF
- ✅ Válido: `SP`, `RJ`, `MG`, `RS`
- ❌ Inválido: `sp`, `São`, `S`, `SPaulo`

## 🧪 Critérios de Aceite

- [x] O campo CEP é formatado automaticamente
- [x] O campo UF é convertido para maiúsculo
- [x] Campos obrigatórios não podem ser enviados em branco
- [x] Mensagens de alerta são exibidas corretamente para entradas inválidas
- [x] O alerta "Endereço cadastrado com sucesso" aparece quando o formulário é válido
- [x] Commit realizado com mensagem descritiva
- [x] Pull Request aberto e vinculado à issue

## 👤 Autor

Desenvolvido como atividade acadêmica.

## 📄 Licença

Este projeto foi desenvolvido para fins educacionais.

## 🔗 Links Úteis

- [Documentação MDN - Formulários](https://developer.mozilla.org/pt-BR/docs/Learn/Forms)
- [Regex101 - Testador de Expressões Regulares](https://regex101.com/)
- [JavaScript Events](https://developer.mozilla.org/pt-BR/docs/Web/Events)

---

⭐ Se este projeto foi útil para você, considere dar uma estrela no repositório!
