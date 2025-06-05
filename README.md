# Portfólio de Diego Danciguer

Site de portfólio pessoal desenvolvido com React, Next.js e Material-UI.

## Tecnologias Utilizadas

- React 19
- Next.js 15
- Material-UI 7
- Framer Motion
- TypeScript

## Funcionalidades

- Design responsivo
- Tema claro/escuro
- Animações suaves
- Seções: Hero, Sobre, Projetos, Contato
- Formulário de contato com validação

## Como Executar Localmente

1. Clone o repositório:
   ```bash
   git clone https://github.com/diodanciguer/portfolio-site.git
   cd portfolio-site
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```

3. Execute o servidor de desenvolvimento:
   ```bash
   npm run dev
   ```

4. Acesse `http://localhost:3000` no navegador.

## Testes

Para rodar os testes da aplicação:

```bash
npm test
```

## Deploy no Servidor

### Pré-requisitos

- Servidor Ubuntu
- Node.js 20+
- Nginx
- PM2
- Domínio configurado para apontar para o servidor

### Configuração Inicial do Servidor

1. Crie o diretório para o site:
   ```bash
   sudo mkdir -p /var/www/seu-dominio.com
   sudo chown $USER:$USER /var/www/seu-dominio.com
   ```

2. Clone o repositório:
   ```bash
   cd /var/www/seu-dominio.com
   git clone https://github.com/diodanciguer/portfolio-site.git .
   ```

3. Execute o script de configuração:
   ```bash
   chmod +x server-setup.sh
   ./server-setup.sh
   ```

### Deploy Automático com GitHub Actions

O projeto está configurado para fazer deploy automático quando houver push na branch `main`. Para configurar:

1. No GitHub, vá para o repositório > Settings > Secrets and variables > Actions
2. Adicione novos secrets:
   - Nome: `SSH_PRIVATE_KEY`
   - Nome: `HOST`
   - Nome: `USERNAME`

Após configurar, cada push para a branch `main` irá:
1. Construir o projeto
2. Conectar ao servidor via SSH
3. Atualizar o código
4. Reiniciar a aplicação

## Estrutura do Projeto

```
portfolio-frontend/
├── public/             # Arquivos estáticos
│   ├── images/         # Imagens
│   └── ...
├── src/
│   ├── app/            # Componentes da aplicação
│   │   ├── components/ # Componentes reutilizáveis
│   │   ├── theme.ts    # Configuração do tema
│   │   └── ...
│   └── ...
├── .github/workflows/  # Configurações de CI/CD
└── ...
```

## Pré-requisitos

- Node.js (v18 ou superior)
- npm ou yarn

## Build para Produção

Para gerar a build de produção:

```bash
npm run build
# ou
yarn build
```

Para iniciar o servidor de produção localmente:

```bash
npm run start
# ou
yarn start
```

## Deploy na VPS

### Pré-requisitos no Servidor

- Ubuntu Server (20.04 LTS ou superior)
- Node.js (v18 ou superior)
- Nginx
- PM2 (gerenciador de processos)

### Passos para Deploy

1. Instale as dependências no servidor:
   ```bash
   sudo apt update
   sudo apt install -y nodejs npm nginx
   sudo npm install -g pm2
   ```

2. Clone o repositório no servidor:
   ```bash
   git clone https://github.com/diodanciguer/portfolio-site.git
   cd portfolio-site
   ```

3. Instale as dependências e faça o build:
   ```bash
   npm install
   npm run build
   ```

4. Configure o PM2 para gerenciar a aplicação:
   ```bash
   pm2 start npm --name "portfolio" -- start
   pm2 save
   pm2 startup
   ```

5. Configure o Nginx:
   ```bash
   sudo nano /etc/nginx/sites-available/seu-dominio.com
   ```

   Adicione a seguinte configuração:
   ```nginx
   server {
       listen 80;
       server_name seu-dominio.com www.seu-dominio.com;

       location / {
           proxy_pass http://localhost:3000;
           proxy_http_version 1.1;
           proxy_set_header Upgrade $http_upgrade;
           proxy_set_header Connection 'upgrade';
           proxy_set_header Host $host;
           proxy_cache_bypass $http_upgrade;
       }
   }
   ```

6. Ative o site e reinicie o Nginx:
   ```bash
   sudo ln -s /etc/nginx/sites-available/seu-dominio.com /etc/nginx/sites-enabled/
   sudo nginx -t
   sudo systemctl restart nginx
   ```

7. Configure o SSL com Certbot:
   ```bash
   sudo apt install -y certbot python3-certbot-nginx
   sudo certbot --nginx -d seu-dominio.com -d www.seu-dominio.com
   ```

## CI/CD com GitHub Actions

Crie um arquivo `.github/workflows/deploy.yml` com o seguinte conteúdo:

```yaml
name: Deploy to VPS

on:
  push:
    branches: [ main ]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - name: SSH and deploy
        uses: appleboy/ssh-action@master
        with:
          host: ${{ secrets.HOST }}
          username: ${{ secrets.USERNAME }}
          key: ${{ secrets.SSH_KEY }}
          script: |
            cd /path/to/danciguer-site/portfolio-frontend
            git pull
            npm install
            npm run build
            pm2 restart portfolio
```

Configure os secrets necessários no GitHub:
- `HOST`: Endereço IP ou domínio da VPS
- `USERNAME`: Nome de usuário SSH
- `SSH_KEY`: Chave SSH privada para acesso

## Variáveis de Ambiente

Crie um arquivo `.env.local` com as seguintes variáveis:

```
NEXT_PUBLIC_FORMSPREE_ID=seu-id-do-formspree
```

## Contribuição

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/nova-feature`)
3. Faça commit das suas alterações (`git commit -m 'Adiciona nova feature'`)
4. Faça push para a branch (`git push origin feature/nova-feature`)
5. Abra um Pull Request