import { Container, Entradas, Inputs, Titulo, Button, MessageOutput } from "./style";
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

const schema = yup.object({
  email: yup.string().email("E-mail inválido").required("Campo Obrigatório!"),
  password: yup.string().min(6, "no minimo 6 caracteres").required("Campo Obrigatório!"),
}).required();
type FormData = yup.InferType<typeof schema>;

const Login = (): JSX.Element => {
  const { register, handleSubmit, formState: { errors, isDirty, isValid }} = useForm<FormData>({
    resolver: yupResolver(schema)
  });
  const onSubmit = (data: FormData) => console.log(data);

  console.log({isDirty, isValid});

  return (
    <Container>
      <Titulo>Login</Titulo>
      <Entradas onSubmit={handleSubmit(onSubmit)}>
        <Inputs placeholder="Email" type="email" {...register("email", {required: true})}/>
        <MessageOutput>{errors.email?.message}</MessageOutput>
        <Inputs placeholder="Senha" type="password" {...register("password", { max: 15, min: 6, maxLength: 15, required: true})}/>
        <MessageOutput>{errors.password?.message}</MessageOutput>
        <Button type="submit" disabled={!isDirty || !isValid}>Entrar</Button>
      </Entradas>
    </Container>
  );
};

export default Login;
