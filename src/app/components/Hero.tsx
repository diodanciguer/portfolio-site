'use client';

import { Box, Button, Container, Typography, useTheme } from '@mui/material';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Hero() {
  const theme = useTheme();
  
  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projetos');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Box 
      component="section" 
      sx={{ 
        py: { xs: 8, md: 12 },
        display: 'flex',
        alignItems: 'center',
        minHeight: 'calc(100vh - 64px)',
        position: 'relative',
        overflow: 'hidden',
        background: theme => `linear-gradient(135deg, ${theme.palette.background.default} 0%, ${theme.palette.background.paper} 100%)`,
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: 'radial-gradient(circle at 25% 25%, rgba(37, 99, 235, 0.05) 0%, transparent 50%), radial-gradient(circle at 75% 75%, rgba(139, 92, 246, 0.05) 0%, transparent 50%)',
          zIndex: 0
        }
      }}
    >
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <Box 
          sx={{ 
            display: 'flex', 
            flexDirection: { xs: 'column', md: 'row' },
            alignItems: 'center',
            gap: 6
          }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            style={{ flex: '1 1 50%', textAlign: 'center' }}
          >
            <Box 
              sx={{ 
                position: 'relative',
                width: { xs: 220, sm: 280, md: 320 },
                height: { xs: 220, sm: 280, md: 320 },
                borderRadius: '50%',
                overflow: 'hidden',
                mx: 'auto',
                mb: 3,
                boxShadow: '0 20px 40px rgba(0,0,0,0.15)',
                border: '5px solid white',
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(45deg, rgba(37, 99, 235, 0.2), rgba(139, 92, 246, 0.2))',
                  zIndex: 1
                }
              }}
            >
              <Image
                src="/images/Diego.jpeg"
                alt="Diego Danciguer"
                fill
                style={{ objectFit: 'cover' }}
                priority
              />
            </Box>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
            style={{ flex: '1 1 50%' }}
          >
            <Typography 
              variant="h2" 
              component="h1" 
              gutterBottom
              sx={{ 
                fontWeight: 'bold',
                fontSize: { xs: '2.5rem', md: '3.5rem' },
                color: theme.palette.mode === 'light' ? '#1d4ed8' : '#60a5fa',
                mb: 2
              }}
            >
              Diego Danciguer
            </Typography>
            
            <Typography 
              variant="h4" 
              component="h2" 
              color="primary"
              gutterBottom
              sx={{ mb: 3, fontWeight: 'medium' }}
            >
              Desenvolvedor Full-Stack
            </Typography>
            
            <Typography 
              variant="body1" 
              paragraph
              sx={{ mb: 4, fontSize: '1.1rem', maxWidth: '500px' }}
            >
              Especializado em criar experiências digitais excepcionais com foco em performance, 
              usabilidade e design moderno. Transformando ideias em soluções tecnológicas elegantes.
            </Typography>
            
            <Box sx={{ display: 'flex', gap: 2 }}>
              <Button 
                variant="contained" 
                size="large" 
                onClick={scrollToProjects}
                sx={{ 
                  px: 4, 
                  py: 1.5,
                  fontSize: '1.1rem',
                  background: 'linear-gradient(45deg, primary.main, secondary.main)',
                  fontWeight: 'bold',
                  '&:hover': {
                    background: 'linear-gradient(45deg, primary.dark, secondary.dark)',
                    transform: 'translateY(-3px)',
                    boxShadow: '0 10px 20px rgba(0,0,0,0.15)'
                  }
                }}
              >
                Ver Projetos
              </Button>
              
              <Button 
                variant="outlined" 
                size="large" 
                href="#contato"
                sx={{ 
                  px: 4, 
                  py: 1.5,
                  fontSize: '1.1rem',
                  fontWeight: 'medium'
                }}
              >
                Contato
              </Button>
            </Box>
          </motion.div>
        </Box>
      </Container>
    </Box>
  );
} 