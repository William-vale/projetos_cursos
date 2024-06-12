import { Container, Entradas, Inputs, Titulo, Button } from "./style";

const Login = (): JSX.Element => {
  
  
  return (
    <Container>
      <Titulo>Login</Titulo>
      <Entradas>
        <Inputs placeholder="Email"></Inputs>
        <Inputs placeholder="Senha"></Inputs>
        <Button>Entrar</Button>
      </Entradas>
    </Container>
  );
};

export default Login;
