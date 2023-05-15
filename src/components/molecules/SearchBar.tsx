import { forwardRef, useState } from 'react'
import { Avatar, Box, Card, Divider, Grid, IconButton, ListItemIcon, Menu, MenuItem, styled, useMediaQuery, useTheme } from '@mui/material'
import { grey } from '@mui/material/colors';
import { InfoOutlined, Logout, Menu as MenuIcon, Notifications, PersonAdd, Search, Settings } from '@mui/icons-material';
import { useDrawer } from '@/contexts/DrawerContext';

const SeachBox = styled(Card)({
    backgroundColor: "white",
    padding: '10px 15px',
    borderRadius: 32,
    boxShadow: '0 0 10px 0px #FFFFFF'
});

const CustomField = styled('input')({
    borderColor: 'transparent',
    backgroundColor: 'transparent',
    width: '100%',
    padding: '7px 12px',
    "&:focus-visible": {
        outline: 'none'
    }
});

const SearchField = forwardRef((_, _ref) => {
    return <>
        <Box sx={{
            width: '100%',
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            backgroundColor: grey[200],
            borderRadius: 16,
            padding: '2.5px 10px',
        }}>
            <Search sx={{ cursor: 'pointer', color: grey[600] }} />
            <CustomField placeholder='Search' />
        </Box>
    </>
});

const SearchBar = () => {

    const theme = useTheme();

    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const { setopen } = useDrawer();

    const matchMD = useMediaQuery(theme.breakpoints.up("md"));

    return (
        <>
            <SeachBox>
                <Grid container spacing={1}>
                    {!matchMD && <Grid item xs={1} display='flex' flexDirection='row' justifyContent='flex-end' alignItems={'center'}>
                        <IconButton onClick={() => setopen(true)}>
                            <MenuIcon sx={{ color: grey[400] }} />
                        </IconButton>
                    </Grid>}
                    <Grid item xs={!matchMD ? 7 : 8} display='flex' alignItems={'center'}>
                        <SearchField />
                    </Grid>
                    <Grid item xs={4} display='flex' flexDirection='row' justifyContent='flex-end' alignItems={'center'} gap={1}>
                        <Notifications sx={{ color: grey[400] }} />
                        <InfoOutlined sx={{ color: grey[400] }} />
                        {/* <Palette sx={{ color: grey[400] }} /> */}
                        <IconButton onClick={handleClick}>
                            <Avatar sx={{ width: 40, height: 40, bgcolor: (theme) => theme.palette.primary.main, cursor: 'pointer' }}></Avatar>
                        </IconButton>
                    </Grid>
                </Grid>
            </SeachBox>
            <Menu
                anchorEl={anchorEl}
                id="account-menu"
                open={open}
                onClose={handleClose}
                onClick={handleClose}
                PaperProps={{
                    elevation: 0,
                    sx: {
                        overflow: 'visible',
                        filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                        mt: 1.5,
                        '& .MuiAvatar-root': {
                            width: 32,
                            height: 32,
                            ml: -0.5,
                            mr: 1,
                        },
                        '&:before': {
                            display: 'block',
                            position: 'absolute',
                            top: 0,
                            right: 14,
                            bgcolor: 'background.paper',
                            transform: 'translateY(-50%) rotate(45deg)',
                            zIndex: 0,
                        },
                    },
                }}
                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
            >
                <MenuItem onClick={handleClose}>
                    <Avatar /> Profile
                </MenuItem>
                <MenuItem onClick={handleClose}>
                    <Avatar /> My account
                </MenuItem>
                <Divider />
                <MenuItem onClick={handleClose}>
                    <ListItemIcon>
                        <PersonAdd fontSize="small" />
                    </ListItemIcon>
                    Add another account
                </MenuItem>
                <MenuItem disableRipple onClick={handleClose}>
                    <ListItemIcon>
                        <Settings fontSize="small" />
                    </ListItemIcon>
                    Settings
                </MenuItem>
                <MenuItem disableRipple onClick={handleClose} sx={{
                    color: theme.palette.red[500]
                }}>
                    <ListItemIcon>
                        <Logout fontSize="small" sx={{ color: theme.palette.red[500] }} />
                    </ListItemIcon>
                    Logout
                </MenuItem>
            </Menu>
        </>
    )
}

export default SearchBar