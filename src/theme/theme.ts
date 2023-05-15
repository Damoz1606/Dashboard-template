import { ThemeOptions, createTheme } from '@mui/material/styles';
import { globalStyles } from './style';

const primary = globalStyles.colors.blue;

const themeOptions: ThemeOptions = {
    shape: {
        borderRadius: 15
    },
    components: {
        MuiChip: {
            styleOverrides: {
                root: {
                    borderRadius: 7
                }
            }
        },
        MuiTableHead: {
            styleOverrides: {
                root: {
                    "& .MuiTableCell-root": {
                        color: "currentColor"
                    }
                }
            }
        },
        MuiTableBody: {
            styleOverrides: {
                root: {
                    "& .MuiTableCell-root": {
                        border: 0
                    }
                }
            }
        },
        MuiTablePagination: {
            styleOverrides: {
                root: {
                    border: 0
                }
            }
        },
        MuiCard: {
            defaultProps: {
                elevation: 0
            },
            styleOverrides: {
                root: {
                    transition: 'all .3s ease',
                    borderRadius: 25,
                    margin: '1rem',
                    padding: '5px 15px',
                }
            }
        },
        MuiButton: {
            styleOverrides: {
                root: {
                    transition: 'all .5s ease',
                    borderRadius: 10,
                    boxShadow: 'none',
                    paddingRight: '1rem',
                    paddingLeft: '1rem',
                    gap: 2,
                    "&:active": {
                        boxShadow: 'none',
                    },
                    "&:focus": {
                        boxShadow: 'none',
                    },
                    "&:hover": {
                        boxShadow: 'none',
                        filter: 'brightness(0.95)'
                    },
                }
            }
        },
        MuiIconButton: {
            styleOverrides: {
                root: {
                    borderRadius: 16,
                    boxShadow: 'none',
                    paddingRight: '1rem',
                    paddingLeft: '1rem',
                    padding: '7px',
                    gap: 2,
                    "&:active": {
                        boxShadow: 'none',
                    },
                    "&:focus": {
                        boxShadow: 'none',
                    },
                    "&:hover": {
                        boxShadow: 'none',
                    }
                }
            },
        },
        MuiFab: {
            styleOverrides: {
                root: {
                    boxShadow: 'none',
                    paddingRight: '1rem',
                    paddingLeft: '1rem',
                    gap: 2,
                    "&:active": {
                        boxShadow: 'none',
                    },
                    "&:focus": {
                        boxShadow: 'none',
                    },
                    "&:hover": {
                        boxShadow: 'none',
                    }
                }
            },
        }
    },
    palette: {
        mode: 'light',
        background: {
            default: primary[200]
        },
        primary: primary,
        red: globalStyles.colors.red,
        green: globalStyles.colors.green,
        blue: globalStyles.colors.blue

        /* info: globalStyles.colors.blue,
        success: globalStyles.colors.green,
        warning: globalStyles.colors.orange,
        error: globalStyles.colors.red,
        text: globalStyles.colors.text */
    },
    typography: {
        button: {
            fontSize: 13,
            letterSpacing: '0.03em',
        },
        h1: {
            fontSize: 32,
            fontWeight: 500
        },
        h2: {
            fontSize: 28,
            color: "#303030",
            fontWeight: 400
        },
        h3: {
            fontSize: 24,
            color: "#303030"
        },
        h4: {
            fontSize: 20,
            color: "#303030"
        },
        h5: {
            fontSize: 16,
            color: "#303030"
        },
        h6: {
            fontSize: 10,
            color: "#303030"
        },
        body1: {
            fontSize: 15,
            color: "#303030"
        },
        body2: {
            fontSize: 13,
            color: "#303030"
        },
        caption: {
            fontSize: 12,
            color: "#303030"
        },
        overline: {
            fontSize: 12,
            color: "#303030"
        },
    },
};

const theme = createTheme(themeOptions);

export { theme };