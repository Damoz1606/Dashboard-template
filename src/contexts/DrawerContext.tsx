import { useMediaQuery, useTheme } from "@mui/material";
import { createContext, useContext, useState } from "react";

interface DrawerContextProps {
    open: boolean;
    setopen: (value: boolean) => void;
}

const DrawerContext = createContext<DrawerContextProps>({
    open: false,
    setopen: () => { }
});

const DrawerProvider = ({ children }: any) => {

    const theme = useTheme();

    const matchMD = useMediaQuery(theme.breakpoints.down("md"));

    const [open, setopen] = useState<boolean>(!matchMD);
    const value = { open, setopen }
    
    return (
        <DrawerContext.Provider value={value}>
            {children}
        </DrawerContext.Provider>
    );
}

const useDrawer = () => {
    const context = useContext(DrawerContext);
    if (context === undefined) {
        throw new Error("useDrawe")
    }
    return context;
}

const DrawerConsumer = ({ children }: any) => {
    return (
        <DrawerContext.Consumer>
            {
                context => {
                    if (context === undefined) {
                        throw new Error('DrawerConsumer must be used within a DrawerProvider');
                    }
                    return children(context);
                }
            }
        </DrawerContext.Consumer>
    )
}

export { DrawerProvider, useDrawer, DrawerConsumer };