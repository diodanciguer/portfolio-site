#!/bin/bash

# Script de configuração do servidor para o site de portfólio
# Execute este script no servidor após clonar o repositório

# Atualizar pacotes
sudo apt update && sudo apt upgrade -y

# Instalar Node.js e npm (se ainda não estiverem instalados)
if ! command -v node &> /dev/null; then
  echo "Instalando Node.js..."
  curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
  sudo apt install -y nodejs
fi

# Instalar PM2 globalmente
sudo npm install -g pm2

# Instalar Nginx
sudo apt install -y nginx

# Configurar Nginx
sudo tee /etc/nginx/sites-available/danciguer.com.br > /dev/null << 'EOL'
server {
    listen 80;
    server_name danciguer.com.br www.danciguer.com.br;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
EOL

# Habilitar o site
sudo ln -sf /etc/nginx/sites-available/danciguer.com.br /etc/nginx/sites-enabled/

# Verificar configuração do Nginx
sudo nginx -t

# Reiniciar Nginx
sudo systemctl restart nginx

# Configurar PM2 para iniciar com o sistema
pm2 startup
sudo env PATH=$PATH:/usr/bin pm2 startup systemd -u $USER --hp $HOME

# Iniciar a aplicação com PM2
cd /var/www/danciguer.com.br
npm ci
npm run build
pm2 start npm --name "portfolio" -- start

# Salvar configuração do PM2
pm2 save

echo "Configuração concluída! O site deve estar disponível em http://danciguer.com.br" 