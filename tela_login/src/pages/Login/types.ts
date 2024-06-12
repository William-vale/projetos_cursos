import React from "react";
import { Control } from "react-hook-form";

export interface IInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    control: Control<any, any>
}

