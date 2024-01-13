import DefaultLayout from '../../layouts/layout.default';
import { AppBar, Box, Button, List, ListItemButton, ListItemText, Toolbar, Typography } from '@mui/material';

const AccountScreen = () => {
    return (
        <DefaultLayout>
            <Box>
                <AppBar position="static">
                    <Toolbar>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            SomeProjectName
                        </Typography>
                        <Button color="inherit">Войти</Button>
                        <Button color="inherit">Регистрация</Button>
                    </Toolbar>
                </AppBar>
            </Box>
            <Box style={{ height: '100%' }}>
                <List component="nav">
                    <ListItemButton component='a'>
                        <ListItemText primary="Сделки" />
                    </ListItemButton>
                    <ListItemButton component='a'>
                        <ListItemText primary="История" />
                    </ListItemButton>
                    <ListItemButton component='a'>
                        <ListItemText primary="Кошельки" />
                    </ListItemButton>
                    <ListItemButton component='a'>
                        <ListItemText primary="Рефералы" />
                    </ListItemButton>
                    <ListItemButton component='a'>
                        <ListItemText primary="Поддержка" />
                    </ListItemButton>
                </List>
            </Box>
        </DefaultLayout>
    )
}

export default AccountScreen