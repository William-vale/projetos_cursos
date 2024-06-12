import React from "react";

export interface IInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    errorMessage?: string;
}

export interface IFormLogin {
    email: string;
    password: string;
}

export const defaultValues: IFormLogin = {
    email: ' ',
    password: ' '
}