'use client';

import { Box, Button, Container, Typography } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function PrivacyPolicy() {
  return (
    <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Header />
      <Box component="main" sx={{ flexGrow: 1, py: 8 }}>
        <Container maxWidth="md">
          <Box sx={{ mb: 4 }}>
            <Button
              component={Link}
              href="/"
              startIcon={<ArrowBackIcon />}
              sx={{ mb: 4 }}
            >
              Voltar para a página inicial
            </Button>
            
            <Typography variant="h3" component="h1" gutterBottom sx={{ fontWeight: 'bold' }}>
              Política de Privacidade
            </Typography>
            
            <Typography variant="subtitle1" color="text.secondary" paragraph>
              Última atualização: {new Date().toLocaleDateString('pt-BR')}
            </Typography>
          </Box>
          
          <Box sx={{ mb: 4 }}>
            <Typography variant="h5" component="h2" gutterBottom sx={{ fontWeight: 'medium' }}>
              1. Informações coletadas
            </Typography>
            <Typography paragraph>
              Este site coleta apenas as informações fornecidas voluntariamente por você através do formulário de contato,
              como nome, e-mail e mensagem. Não coletamos informações pessoais de identificação automaticamente.
            </Typography>
          </Box>
          
          <Box sx={{ mb: 4 }}>
            <Typography variant="h5" component="h2" gutterBottom sx={{ fontWeight: 'medium' }}>
              2. Uso das informações
            </Typography>
            <Typography paragraph>
              As informações fornecidas através do formulário de contato são utilizadas exclusivamente para responder
              às suas mensagens e solicitações. Não compartilhamos suas informações com terceiros sem o seu consentimento.
            </Typography>
          </Box>
          
          <Box sx={{ mb: 4 }}>
            <Typography variant="h5" component="h2" gutterBottom sx={{ fontWeight: 'medium' }}>
              3. Cookies e tecnologias de rastreamento
            </Typography>
            <Typography paragraph>
              Este site pode utilizar cookies e tecnologias semelhantes para melhorar a experiência do usuário e coletar
              informações sobre como o site é utilizado. Você pode configurar seu navegador para recusar cookies,
              mas isso pode afetar algumas funcionalidades do site.
            </Typography>
          </Box>
          
          <Box sx={{ mb: 4 }}>
            <Typography variant="h5" component="h2" gutterBottom sx={{ fontWeight: 'medium' }}>
              4. Segurança
            </Typography>
            <Typography paragraph>
              Implementamos medidas de segurança para proteger suas informações pessoais. No entanto, nenhum método de
              transmissão pela internet ou armazenamento eletrônico é 100% seguro, e não podemos garantir segurança absoluta.
            </Typography>
          </Box>
          
          <Box sx={{ mb: 4 }}>
            <Typography variant="h5" component="h2" gutterBottom sx={{ fontWeight: 'medium' }}>
              5. Alterações na política de privacidade
            </Typography>
            <Typography paragraph>
              Esta política de privacidade pode ser atualizada ocasionalmente. Recomendamos que você revise periodicamente
              esta página para se manter informado sobre quaisquer alterações.
            </Typography>
          </Box>
          
          <Box>
            <Typography variant="h5" component="h2" gutterBottom sx={{ fontWeight: 'medium' }}>
              6. Contato
            </Typography>
            <Typography paragraph>
              Se você tiver dúvidas sobre esta política de privacidade, entre em contato através do e-mail:
              diego@danciguer.com.br
            </Typography>
          </Box>
        </Container>
      </Box>
      <Footer />
    </Box>
  );
} 