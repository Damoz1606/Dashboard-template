import { Dict } from "@/types"
import { CSSObject } from "@emotion/react"

type StyleFunctionProps = {
    colorScheme: string,
    colorMode: "light" | "dark",
    orientation: "portrait" | "landscape",
    theme: Dict,
    [key: string]: any
}

type OrientationFunctionProps = {
    orientation?: "vertical" | "horizontal",
    vertical: CSSObject,
    horizontal: CSSObject
}

const mode = (light: any, dark: any) => {
    return (props: Dict | StyleFunctionProps) =>
        props.colorMode === 'dark' ? dark : light;
}

const orientation = (options: OrientationFunctionProps) => {
    const { orientation = "horizontal", vertical, horizontal } = options;
    return orientation === "horizontal" ? horizontal : vertical;
}

export { mode, orientation }