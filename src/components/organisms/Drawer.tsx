import { useDrawer } from '@/contexts/DrawerContext';
import { CSSObject } from '@emotion/react';
import { Close, Menu } from '@mui/icons-material';
import { Box, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Drawer as MuiDrawer, Theme, styled, useMediaQuery, useTheme } from '@mui/material'
import React from 'react';
import { NavLink as NavLinkBase, NavLinkProps } from 'react-router-dom';

const drawerWidth = 240;

const NavLink = React.forwardRef<HTMLAnchorElement, NavLinkProps>((props, ref) => (
    <NavLinkBase
        ref={ref}
        {...props}
    />
))

const openedMixin = (theme: Theme): CSSObject => ({
    width: drawerWidth,
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen
    }),
    overflowX: 'hidden'
});

const closedMixin = (theme: Theme): CSSObject => ({
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen
    }),
    overflowX: 'hidden',
    width: `calc(${theme.spacing(5)} + 1px)`,
    [theme.breakpoints.up("sm")]: {
        width: `calc(${theme.spacing(8)} + 1px)`
    }
});

const DrawerHeader = styled(Box)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1.5),
    transition: theme.transitions.create('all', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.short
    }),
    ...theme.mixins.toolbar
}));

const MiniDrawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    '& > .MuiDrawer-paper': {
        border: 0
    },
    ...(open && {
        ...openedMixin(theme),
        '& .MuiDrawer-paper': openedMixin(theme)
    }),
    ...(!open && {
        ...closedMixin(theme),
        '& .MuiDrawer-paper': closedMixin(theme)
    })
}));

const NavLinkItem = styled(ListItemButton)(({ theme }) => ({
    minHeight: 48,
    px: 2.5,
    transition: theme.transitions.create('all', {
        easing: theme.transitions.easing.easeIn,
        duration: '.3s'
    }),
    margin: theme.spacing(0.5, 0),
    borderRadius: theme.shape.borderRadius,
    backgroundColor: "white",
    "& .nav-text": {
        color: theme.palette.primary[500],
    },
    "&:hover": {
        filter: "brightness(0.95)"
    },
    "&.active": {
        "& .nav-text": {
            color: theme.palette.primary[700],
        },
        backgroundColor: theme.palette.primary[100]
    }
}));

interface DrawerProps {
    anchor?: 'left' | 'right';
    header?: React.ReactElement | React.ReactElement[];
    items: {
        icon: React.ReactElement,
        name: string,
        path: string
    }[]
}

const Drawer = (props: DrawerProps) => {

    const { items, anchor, header } = props;

    const theme = useTheme();

    const { open, setopen } = useDrawer();

    const matchMD = useMediaQuery(theme.breakpoints.down("md"));

    const handleOpen = () => setopen(true);
    const handleClose = () => setopen(false);

    return (
        <>
            <Box component='nav' sx={{ flexShrink: { md: 0 }, zIndex: 100 }}>
                {
                    !matchMD ?
                        <MiniDrawer anchor={anchor} variant='permanent' open={open} elevation={0}>
                            <DrawerHeader sx={{
                                justifyContent: !open ? 'center' : 'flex-end'
                            }}>
                                <IconButton onClick={open ? handleClose : handleOpen}>
                                    {
                                        !open ? <Menu /> : <Close />
                                    }
                                </IconButton>
                            </DrawerHeader>
                            {
                                header && <DrawerHeader sx={{
                                    justifyContent: 'center',
                                    opacity: open ? 1 : 0
                                }}>
                                    {
                                        React.Children.toArray(header).map((element) => (
                                            <>{element}</>
                                        ))
                                    }
                                </DrawerHeader>
                            }
                            <List
                                sx={{
                                    padding: theme.spacing(1),
                                    transition: theme.transitions.create('all', {
                                        easing: theme.transitions.easing.easeIn,
                                        duration: '.3s'
                                    }),
                                    "&>*": {
                                        transition: theme.transitions.create('all', {
                                            easing: theme.transitions.easing.easeIn,
                                            duration: '.3s'
                                        })
                                    }
                                }}>
                                {
                                    items.map((element, index) => {
                                        return (
                                            <ListItem key={index} disablePadding sx={{ display: 'block' }}>
                                                <NavLinkItem
                                                    LinkComponent={NavLink}
                                                    to={element.path}
                                                    sx={{
                                                        justifyContent: open ? 'initial' : 'center',
                                                    }}>
                                                    <ListItemIcon
                                                        className='nav-text'
                                                        sx={{
                                                            minWidth: 0,
                                                            mr: open ? 3 : 'auto',
                                                            justifyContent: 'center'
                                                        }}
                                                    >{element.icon}</ListItemIcon>
                                                    <ListItemText className='nav-text' primary={element.name} sx={{
                                                        opacity: open ? 1 : 0
                                                    }} />
                                                </NavLinkItem>
                                            </ListItem>
                                        );
                                    })
                                }
                            </List>
                        </MiniDrawer>
                        :
                        <MuiDrawer
                            sx={{ "& .MuiPaper-root": { width: '100%', maxWidth: 540 } }}
                            anchor={anchor}
                            open={open}
                            elevation={0}>
                            <DrawerHeader>
                                <IconButton onClick={open ? handleClose : handleOpen}>
                                    <Close />
                                </IconButton>
                            </DrawerHeader>
                            {
                                header && <DrawerHeader sx={{
                                    justifyContent: 'center',
                                    opacity: open ? 1 : 0
                                }}>
                                    {
                                        React.Children.toArray(header).map((element) => (
                                            <>{element}</>
                                        ))
                                    }
                                </DrawerHeader>
                            }
                            <List
                                sx={{
                                    padding: theme.spacing(1),
                                    transition: theme.transitions.create('all', {
                                        easing: theme.transitions.easing.easeIn,
                                        duration: '.3s'
                                    }),
                                    "&>*": {
                                        transition: theme.transitions.create('all', {
                                            easing: theme.transitions.easing.easeIn,
                                            duration: '.3s'
                                        })
                                    }
                                }}>
                                {
                                    items.map((element, index) => {
                                        return (
                                            <ListItem key={index} disablePadding sx={{ display: 'block' }}>
                                                <NavLinkItem
                                                    LinkComponent={NavLink}
                                                    onClick={handleClose}
                                                    to={element.path}
                                                    sx={{
                                                        justifyContent: open ? 'initial' : 'center',
                                                    }}>
                                                    <ListItemIcon
                                                        className='nav-text'
                                                        sx={{
                                                            minWidth: 0,
                                                            mr: open ? 3 : 'auto',
                                                            justifyContent: 'center'
                                                        }}
                                                    >{element.icon}</ListItemIcon>
                                                    <ListItemText className='nav-text' primary={element.name} sx={{
                                                        opacity: open ? 1 : 0
                                                    }} />
                                                </NavLinkItem>
                                            </ListItem>
                                        );
                                    })
                                }
                            </List>
                        </MuiDrawer>
                }
            </Box>
        </>
    )
}

export default Drawer