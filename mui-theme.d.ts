import '@material-ui/material/styles';
declare module '@mui/material/ListItemButtonProps';
import { ReactElement } from 'react';

declare module '@mui/material/ListItemButton' {
    interface ListItemButtonBaseProps {
        to: string;
    }
}

declare module '@mui/material/styles' {

    interface Palette {
        red: PaletteColorOptions,
        blue: PaletteColorOptions,
        green: PaletteColorOptions,
    }

    interface PaletteOptions {
        red?: PaletteColorOptions,
        blue?: PaletteColorOptions,
        green?: PaletteColorOptions,
    }

    interface PaletteColor {
        50?: string;
        100?: string;
        200?: string;
        300?: string;
        400?: string;
        500?: string;
        600?: string;
        700?: string;
        800?: string;
        900?: string;
    }

    interface PaletteColorOptions {
        50?: string;
        100?: string;
        200?: string;
        300?: string;
        400?: string;
        500?: string;
        600?: string;
        700?: string;
        800?: string;
        900?: string;
    }
}
