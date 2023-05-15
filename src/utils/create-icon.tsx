import React from "react";
import { forwardRef } from "react";

/* eslint-disable @typescript-eslint/no-unused-vars */
// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface IconProps
    extends React.SVGAttributes<SVGElement> { }

interface CreateIconOptions {
    viewBox?: string;
    path?: React.ReactElement | React.ReactElement[];
    d?: string;
    displayName?: string;
    defaultProps?: IconProps,
    width?: number
}

function createIcon(options: CreateIconOptions) {

    const { viewBox = "0 0 24 24", d: pathDefinition, displayName, defaultProps = {}, width = 25 } = options;

    const path = React.Children.toArray(options.path);

    const Comp = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
        <svg viewBox={viewBox} ref={ref} width={width} {...defaultProps} {...props}>
            {path.length ? path : <path fill="currentColor" d={pathDefinition} />}
        </svg>
    ));

    if (displayName)
        Comp.displayName = displayName;

    return Comp;
}

export { createIcon }