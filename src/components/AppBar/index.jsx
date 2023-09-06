import { Box, Toolbar, Typography, IconButton, AppBar, Button, Divider, List, ListItem, ListItemButton, ListItemText, CssBaseline, Drawer } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import { useId, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

const AppBarComponent = (props) => {

    const navigate = useNavigate();
    const drawerWidth = 240;
    const navItems = [
        {
            id: useId(),
            title: 'Tramos',
            navigate: '/tramos'
        },
        {
            id: useId(),
            title: 'Clientes',
            navigate: '/clientes'
        },
        {
            id: useId(),
            title: 'Top',
            navigate: '/top'
        }
    ];
    const { window } = props;
    const [mobileOpen, setMobileOpen] = useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };

    const handleNavigate = (path) => {
        navigate(path)
    }

    const container = window !== undefined ? () => window().document.body : undefined;

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
            <Typography
                variant="h6"
                sx={{ my: 2 }}
                onClick={() => handleNavigate('/')}
            >
                InfoDesign
            </Typography>
            <Divider />
            <List>
                {navItems.map((item) => (
                    <ListItem key={item.id} disablePadding>
                        <ListItemButton onClick={() => handleNavigate(item.navigate)} sx={{ textAlign: 'center' }}>
                            <ListItemText primary={item.title} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar component="nav">
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography
                        variant="h6"
                        component="div"
                        sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
                        onClick={() => handleNavigate('/')}
                    >
                        InfoDesign
                    </Typography>
                    <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                        {navItems.map((item) => (
                            <Button onClick={() => handleNavigate(item.navigate)} variant='outlined' key={item.id} sx={{ color: '#fff', marginRight: 1 }}>
                                {item.title}
                            </Button>
                        ))}
                    </Box>
                </Toolbar>
            </AppBar>
            <nav>
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
            </nav>
        </Box>
    )
}

AppBarComponent.propTypes = {
    window: PropTypes.func,
};

export default AppBarComponent