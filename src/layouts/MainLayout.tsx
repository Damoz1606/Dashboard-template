import Drawer from '@/components/organisms/Drawer'
import { DrawerProvider } from '@/contexts/DrawerContext';
import { routes } from '@/routes';
import { Box, Typography, useTheme } from '@mui/material'
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
    const theme = useTheme();

    return (
        <DrawerProvider>
            <Box sx={{ display: 'flex', width: '100%', height: '100%', backgroundColor: theme.palette.primary[100], paddingBottom: theme.spacing(1) }} >
                <Drawer items={routes} header={
                    <Typography variant='h4' color={theme.palette.primary[500]}><span style={{ fontWeight: 'bold' }}>Dashboard</span> Template</Typography>
                } />
                <Box sx={{ display: 'block', width: '100%' }}>
                    <Outlet />
                </Box>
            </Box >
        </DrawerProvider>
    )
}

export default MainLayout