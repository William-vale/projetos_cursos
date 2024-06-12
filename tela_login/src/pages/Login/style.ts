import styled from "styled-components";

export const Container = styled.div`
    min-width: 500px;
    min-height: 350px;
    border-radius: 15px;
    background-color: white;
    padding: 30px;
`;

export const Titulo = styled.h1`
    color: #822597;
    font-size: 40px;
    font-family: 'Opens Sans';
`;

export const Entradas = styled.span`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 25px;
`;

export const Inputs = styled.input`
    outline: none;
    width: 100%;
    height: 45px;
    border: 1px solid gray;
    border-radius: 25px;
    margin-top: 20px;
    padding: 20px;

    &::placeholder {
       font-size: 18px;
       color: rgb(150, 150, 150);
    }
`;

export const Button = styled.button`
    width: 100%;
    height: 45px;
    border: none;
    border-radius: 25px;
    margin-top: 20px;
    background-color: #742187;
    color: white;
    font-size: 18px;

    &:hover{
        border: 3px solid black;
    } 
`;