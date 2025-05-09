'use client';

import { useState } from 'react';
import { 
  Box, 
  Button, 
  Card, 
  CardActions, 
  CardContent, 
  CardMedia, 
  Chip, 
  Container,
  Typography 
} from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchIcon from '@mui/icons-material/Launch';
import { motion } from 'framer-motion';

// Dados dos projetos
const projectsData = [
  {
    id: 1,
    title: 'E-commerce Platform',
    description: 'Plataforma de e-commerce completa com painel administrativo, pagamentos e gestão de estoque.',
    image: '/projects/ecommerce.jpg',
    technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    githubUrl: 'https://github.com/username/ecommerce',
    demoUrl: 'https://ecommerce-demo.com'
  },
  {
    id: 2,
    title: 'Task Management App',
    description: 'Aplicativo de gerenciamento de tarefas com recursos de colaboração em tempo real.',
    image: '/projects/taskapp.jpg',
    technologies: ['Next.js', 'TypeScript', 'Firebase', 'Material-UI'],
    githubUrl: 'https://github.com/username/task-app',
    demoUrl: 'https://task-app-demo.com'
  },
  {
    id: 3,
    title: 'Blog CMS',
    description: 'Sistema de gerenciamento de conteúdo para blogs com editor WYSIWYG e SEO integrado.',
    image: '/projects/blog.jpg',
    technologies: ['React', 'GraphQL', 'PostgreSQL', 'AWS'],
    githubUrl: 'https://github.com/username/blog-cms',
    demoUrl: 'https://blog-cms-demo.com'
  },
  {
    id: 4,
    title: 'Weather Dashboard',
    description: 'Dashboard de previsão do tempo com visualizações de dados e alertas personalizados.',
    image: '/projects/weather.jpg',
    technologies: ['React', 'D3.js', 'Weather API', 'Tailwind CSS'],
    githubUrl: 'https://github.com/username/weather-dashboard',
    demoUrl: 'https://weather-dashboard-demo.com'
  }
];

// Imagens de fallback para os projetos
const fallbackImages = {
  ecommerce: 'https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  taskapp: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  blog: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  weather: 'https://images.unsplash.com/photo-1534088568595-a066f410bcda?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
};

export default function Projects() {
  const [filter, setFilter] = useState<string | null>(null);
  
  // Extrair todas as tecnologias únicas de todos os projetos
  const allTechnologies = Array.from(
    new Set(projectsData.flatMap(project => project.technologies))
  ).sort();
  
  // Filtrar projetos com base na tecnologia selecionada
  const filteredProjects = filter
    ? projectsData.filter(project => project.technologies.includes(filter))
    : projectsData;

  // Função para obter a imagem correta ou usar fallback
  const getProjectImage = (project: typeof projectsData[0]) => {
    const index = project.id;
    switch(index) {
      case 1: return fallbackImages.ecommerce;
      case 2: return fallbackImages.taskapp;
      case 3: return fallbackImages.blog;
      case 4: return fallbackImages.weather;
      default: return 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80';
    }
  };

  return (
    <Box 
      id="projetos" 
      component="section" 
      sx={{ 
        py: { xs: 6, md: 10 },
        bgcolor: 'background.paper'
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
              mb: 2,
              textAlign: 'center',
              fontWeight: 'bold'
            }}
          >
            Projetos
          </Typography>
          
          <Typography 
            variant="subtitle1" 
            color="text.secondary" 
            align="center" 
            sx={{ mb: 4 }}
          >
            Alguns dos meus trabalhos recentes
          </Typography>
          
          {/* Filtros de tecnologia */}
          <Box 
            sx={{ 
              display: 'flex', 
              flexWrap: 'wrap', 
              justifyContent: 'center',
              gap: 1,
              mb: 5
            }}
          >
            <Chip 
              label="Todos" 
              color={filter === null ? 'primary' : 'default'} 
              onClick={() => setFilter(null)}
              sx={{ 
                m: 0.5,
                fontWeight: 500,
                px: 2,
                py: 2.5
              }}
            />
            {allTechnologies.map(tech => (
              <Chip 
                key={tech} 
                label={tech} 
                color={filter === tech ? 'primary' : 'default'}
                onClick={() => setFilter(tech === filter ? null : tech)}
                sx={{ 
                  m: 0.5,
                  fontWeight: 500,
                  px: 2,
                  py: 2.5
                }}
              />
            ))}
          </Box>
          
          {/* Grid de projetos */}
          <Box 
            sx={{ 
              display: 'grid',
              gridTemplateColumns: {
                xs: '1fr',
                sm: '1fr 1fr',
                md: '1fr 1fr',
                lg: 'repeat(3, 1fr)'
              },
              gap: 4
            }}
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card 
                  sx={{ 
                    height: '100%', 
                    display: 'flex', 
                    flexDirection: 'column',
                    transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      boxShadow: 8
                    }
                  }}
                >
                  <CardMedia
                    component="img"
                    height="200"
                    image={getProjectImage(project)}
                    alt={project.title}
                    sx={{
                      objectFit: 'cover',
                    }}
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h3" sx={{ fontWeight: 'bold', color: 'primary.main' }}>
                      {project.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" paragraph>
                      {project.description}
                    </Typography>
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5, mt: 2 }}>
                      {project.technologies.map(tech => (
                        <Chip 
                          key={`${project.id}-${tech}`} 
                          label={tech} 
                          size="small" 
                          variant="outlined"
                          sx={{ 
                            fontWeight: 500,
                            '&:hover': {
                              backgroundColor: 'primary.light',
                              color: 'white'
                            }
                          }}
                        />
                      ))}
                    </Box>
                  </CardContent>
                  <CardActions sx={{ p: 2, pt: 0 }}>
                    <Button 
                      size="small" 
                      startIcon={<GitHubIcon />}
                      href={project.githubUrl}
                      target="_blank"
                      color="primary"
                      variant="text"
                    >
                      GitHub
                    </Button>
                    <Button 
                      size="small" 
                      startIcon={<LaunchIcon />}
                      href={project.demoUrl}
                      target="_blank"
                      color="secondary"
                      variant="contained"
                      sx={{ ml: 'auto' }}
                    >
                      Demo
                    </Button>
                  </CardActions>
                </Card>
              </motion.div>
            ))}
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
} 