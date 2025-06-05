'use client';

import { Box, Container, IconButton, Link, Typography, Divider } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import TwitterIcon from '@mui/icons-material/Twitter';
import { motion } from 'framer-motion';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <Box 
      component="footer" 
      sx={{ 
        py: { xs: 6, md: 8 },
        bgcolor: 'background.paper',
        borderTop: 1,
        borderColor: 'divider',
        backgroundImage: theme => `linear-gradient(to bottom, ${theme.palette.background.default}, ${theme.palette.background.paper})`,
      }}
    >
      <Container maxWidth="lg">
        <Box 
          sx={{ 
            display: 'flex', 
            flexDirection: { xs: 'column', md: 'row' },
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: 4,
            mb: 4
          }}
        >
          <Box sx={{ textAlign: { xs: 'center', md: 'left' } }}>
            <Typography 
              variant="h5" 
              component={Link}
              href="/"
              sx={{ 
                fontWeight: 'bold',
                textDecoration: 'none',
                color: 'text.primary',
                background: 'linear-gradient(45deg, primary.main, secondary.main)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                textFillColor: 'transparent',
                mb: 1,
                display: 'inline-block'
              }}
            >
              Diego Danciguer
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ maxWidth: '400px', mt: 1 }}>
              Desenvolvedor Full-Stack apaixonado por criar soluções digitais elegantes, 
              responsivas e de alto desempenho.
            </Typography>
          </Box>
          
          <Box 
            sx={{ 
              display: 'flex',
              justifyContent: 'center',
              gap: 1
            }}
          >
            <motion.div whileHover={{ y: -5 }} transition={{ duration: 0.2 }}>
              <IconButton 
                aria-label="GitHub" 
                color="inherit" 
                href="https://github.com/diodanciguer" 
                target="_blank"
                sx={{ 
                  bgcolor: 'background.default',
                  '&:hover': {
                    bgcolor: 'primary.main',
                    color: 'white'
                  }
                }}
              >
                <GitHubIcon />
              </IconButton>
            </motion.div>
            
            <motion.div whileHover={{ y: -5 }} transition={{ duration: 0.2 }}>
              <IconButton 
                aria-label="LinkedIn" 
                color="inherit" 
                href="https://linkedin.com/in/diegodanciguer" 
                target="_blank"
                sx={{ 
                  bgcolor: 'background.default',
                  '&:hover': {
                    bgcolor: 'primary.main',
                    color: 'white'
                  }
                }}
              >
                <LinkedInIcon />
              </IconButton>
            </motion.div>
            
            <motion.div whileHover={{ y: -5 }} transition={{ duration: 0.2 }}>
              <IconButton 
                aria-label="Twitter" 
                color="inherit" 
                href="https://twitter.com/username" 
                target="_blank"
                sx={{ 
                  bgcolor: 'background.default',
                  '&:hover': {
                    bgcolor: 'primary.main',
                    color: 'white'
                  }
                }}
              >
                <TwitterIcon />
              </IconButton>
            </motion.div>
            
            <motion.div whileHover={{ y: -5 }} transition={{ duration: 0.2 }}>
              <IconButton 
                aria-label="Email" 
                color="inherit" 
                href="mailto:diego@danciguer.com.br"
                sx={{ 
                  bgcolor: 'background.default',
                  '&:hover': {
                    bgcolor: 'primary.main',
                    color: 'white'
                  }
                }}
              >
                <EmailIcon />
              </IconButton>
            </motion.div>
          </Box>
        </Box>
        
        <Divider sx={{ my: 3 }} />
        
        <Box 
          sx={{ 
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: { xs: 2, sm: 0 }
          }}
        >
          <Typography variant="body2" color="text.secondary">
            &copy; {currentYear} Diego Danciguer. Todos os direitos reservados.
          </Typography>
          
          <Box 
            sx={{ 
              display: 'flex',
              alignItems: 'center',
              gap: 3
            }}
          >
            <Link 
              href="/privacidade" 
              color="inherit" 
              underline="hover" 
              variant="body2"
              sx={{ 
                '&:hover': { 
                  color: 'primary.main' 
                } 
              }}
            >
              Política de Privacidade
            </Link>
            
            <Link 
              href="#" 
              color="inherit" 
              underline="hover" 
              variant="body2"
              sx={{ 
                '&:hover': { 
                  color: 'primary.main' 
                } 
              }}
            >
              Termos de Uso
            </Link>
          </Box>
        </Box>
      </Container>
    </Box>
  );
} 