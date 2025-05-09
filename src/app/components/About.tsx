'use client';

import { Box, Button, Chip, Container, Grid, Paper, Typography } from '@mui/material';
import DownloadIcon from '@mui/icons-material/Download';
import { motion } from 'framer-motion';

// Lista de habilidades técnicas
const skills = [
  'JavaScript', 'TypeScript', 'React', 'Next.js', 'Node.js', 
  'Express', 'MongoDB', 'PostgreSQL', 'GraphQL', 'REST API', 
  'Material-UI', 'Tailwind CSS', 'Git', 'Docker', 'AWS', 
  'CI/CD', 'Jest', 'React Testing Library'
];

export default function About() {
  return (
    <Box 
      id="sobre" 
      component="section" 
      sx={{ 
        py: { xs: 6, md: 10 },
        bgcolor: 'background.default'
      }}
    >
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Typography 
            variant="h3" 
            component="h2" 
            gutterBottom
            sx={{ 
              mb: 4,
              textAlign: 'center',
              fontWeight: 'bold'
            }}
          >
            Sobre Mim
          </Typography>

          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, gap: 4 }}>
            <Paper 
              elevation={0} 
              sx={{ 
                p: 4, 
                height: '100%',
                bgcolor: 'background.paper',
                borderRadius: 2,
                transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
                '&:hover': {
                  transform: 'translateY(-5px)',
                  boxShadow: 6
                }
              }}
            >
              <Typography variant="h5" gutterBottom sx={{ fontWeight: 'medium', color: 'primary.main' }}>
                Quem sou eu
              </Typography>
              <Typography paragraph>
                Sou um desenvolvedor Full-Stack apaixonado por criar aplicações web modernas e eficientes. 
                Com experiência em desenvolvimento front-end e back-end, busco sempre as melhores práticas 
                e tecnologias para entregar produtos de alta qualidade.
              </Typography>
              <Typography paragraph>
                Tenho formação em Ciência da Computação e experiência em projetos que vão desde pequenas 
                aplicações até sistemas complexos. Meu foco está em criar interfaces intuitivas e responsivas, 
                além de APIs robustas e escaláveis.
              </Typography>
              <Box sx={{ mt: 3 }}>
                <Button 
                  variant="outlined" 
                  startIcon={<DownloadIcon />}
                  href="/cv-diego-danciguer.pdf"
                  target="_blank"
                  download
                  size="large"
                >
                  Download CV
                </Button>
              </Box>
            </Paper>
            
            <Paper 
              elevation={0} 
              sx={{ 
                p: 4, 
                height: '100%',
                bgcolor: 'background.paper',
                borderRadius: 2,
                transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
                '&:hover': {
                  transform: 'translateY(-5px)',
                  boxShadow: 6
                }
              }}
            >
              <Typography variant="h5" gutterBottom sx={{ fontWeight: 'medium', mb: 3, color: 'primary.main' }}>
                Habilidades
              </Typography>
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                {skills.map((skill) => (
                  <Chip 
                    key={skill} 
                    label={skill} 
                    color="primary" 
                    variant="outlined" 
                    sx={{ 
                      m: 0.5, 
                      fontWeight: 500,
                      '&:hover': {
                        backgroundColor: 'primary.main',
                        color: 'white'
                      }
                    }}
                  />
                ))}
              </Box>
            </Paper>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
} 