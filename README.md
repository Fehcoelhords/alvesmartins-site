# 🛠️ Alves Martins Engenharia - Site Institucional

Este projeto foi desenvolvido utilizando **React**, **TypeScript**, **Vite** e **Tailwind CSS** para criar um site institucional moderno, rápido e focado em engenharia diagnóstica (Avaliação, Inspeção e Patologia).

## Requisitos de Instalação

Certifique-se de ter o [Node.js](https://nodejs.org/) instalado em sua máquina.

## Primeiros Passos

1.  **Clonar o Repositório:**

    ```bash
    git clone [SEU_REPOSITORIO_AQUI]
    cd [pasta-do-projeto]
    ```

2.  **Instalar Dependências:**
    Instale todas as dependências do projeto (incluindo `tailwindcss`, `autoprefixer`, `framer-motion`, `react-router-dom`, `react-icons` e `react-intersection-observer`).

    ```bash
    npm install
    ```

3.  **Variáveis de Ambiente:**
    Crie o arquivo `.env.local` na raiz do projeto (veja a seção de configuração abaixo).

4.  **Iniciar o Servidor de Desenvolvimento:**
    ```bash
    npm run dev
    ```
    O site estará acessível em `http://localhost:5173` (ou porta similar).

## Scripts Disponíveis

| Comando           | Descrição                                            |
| :---------------- | :--------------------------------------------------- |
| `npm run dev`     | Inicia o servidor de desenvolvimento com hot-reload. |
| `npm run build`   | Constrói a aplicação para produção na pasta `dist`.  |
| `npm run preview` | Serve o build de produção localmente para teste.     |

## 🎨 Notas de Design (Tokens)

O design segue uma paleta e tipografia definidas para a marca Alves Martins Engenharia.

| Token                | Cor/Fonte                         | Uso Principal                                         |
| :------------------- | :-------------------------------- | :---------------------------------------------------- |
| `colors.primary`     | `#0A2B4D` (azul-marinho-perolado) | Headers, Background de Hero (Overlay), CTA principal. |
| `colors.accent`      | `#2E6DA4` (azul-claro-acento)     | Botões, Destaques, Links, Hover.                      |
| `colors.light`       | `#F4F6F8` (cinza-claro)           | Background de seções.                                 |
| `fontFamily.heading` | Montserrat                        | Títulos (H1, H2, H3) - Peso Bold.                     |
| `fontFamily.body`    | Inter/Roboto                      | Texto de corpo e parágrafos.                          |

Estes tokens estão configurados em `tailwind.config.js`.

## 🔒 Variáveis de Configuração

### `.env.local`

Para configurar variáveis de ambiente (URLs de serviço, telefones, etc.), crie este arquivo:

```ini
# Variáveis de Ambiente para Alves Martins Engenharia

# O VITE_ prefix é obrigatório para variáveis acessíveis no frontend via import.meta.env
VITE_WHATSAPP_NUMBER=5511999998888
VITE_EMAIL_CONTACT=contato@alvesmartinsengenharia.com.br

# Placeholder para o futuro endpoint do formulário de contato
# Para a versão inicial, o formulário usa 'mailto:', mas deve ser atualizado para um backend seguro.
VITE_CONTACT_FORM_ENDPOINT=/api/v1/contact
```
