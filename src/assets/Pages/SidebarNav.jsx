import React from 'react';
import { NavLink } from 'react-router-dom';
import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { Home, Folder, Code, CodeSharp, Pets, People, SportsEsports } from '@mui/icons-material'; // Iconos de MUI

// Array para definir los enlaces de navegación, hace el código más limpio
const navItems = [
  { text: 'Inicio', icon: <Home />, to: '/' },
  { text: 'Sobre Nosotros', icon: <People />, to: '/aboutus' },
  { text: 'Proyecto 1: HTML', icon: <Code />, to: '/ProyectoHtml1' },
  { text: 'Proyecto 2', icon: <CodeSharp />, to: '/proyecto2' },
  { text: 'Proyecto 3: Registro de Mascotas', icon: <Pets />, to: '/pet-registry' },
  { text: 'Proyecto 4', icon: <SportsEsports />, to: '/proyecto4' },
  { text: 'Proyecto 5: Juego Estrella', icon: <Folder />, to: '/games' },
  { text: 'Proyecto 5: Formulario', icon: <Folder />, to: '/formulario' },
];

function SidebarNav() {
  return (
    <Box
      sx={{
        width: 350,
        flexShrink: 0,
        bgcolor: 'background.paper', // Usa el color de fondo del tema
        borderRight: '1px solid',
        borderColor: 'divider', // Usa el color de borde del tema
      }}
    >
      <List>
        {navItems.map((item) => (
          <ListItem key={item.text} disablePadding>
            <ListItemButton
              component={NavLink}
              to={item.to}
              // El NavLink necesita 'end' para la ruta raíz
              end={item.to === '/'}
              sx={{
                // Estilos para el enlace activo
                '&.active': {
                  bgcolor: 'action.selected', // Color del tema para elementos seleccionados
                  color: 'primary.main',
                  '& .MuiListItemIcon-root': {
                    color: 'primary.main', // Cambia también el color del icono
                  },
                },
              }}
            >
              <ListItemIcon>
                {item.icon}
              </ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
}

export default SidebarNav;