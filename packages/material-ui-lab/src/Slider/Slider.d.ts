import * as React from "react";
import { StandardProps } from "@material-ui/core";
import { ButtonProps } from "@material-ui/core/Button";
import { TransitionProps } from "react-transition-group/Transition";
import { TransitionHandlerProps } from "@material-ui/core/transitions/transition";

export interface SliderProps extends StandardProps<React.HTMLAttributes<HTMLDivElement>> {
    disabled?: boolean;
    reverse?: boolean;
    vertical?: boolean;
    max?: number;
    min?: number;
    step?: number;
    value?: number;
    onChange?: (event: React.ChangeEvent<{}>, value: number) => void;
    onDragEnd?: (event: React.ChangeEvent<{}>) => void;
    onDragStart?: (event: React.ChangeEvent<{}>) => void;
}

declare const Slider: React.ComponentType<SliderProps>;

export default Slider;
