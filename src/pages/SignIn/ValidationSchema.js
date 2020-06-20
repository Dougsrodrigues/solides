import * as yup from 'yup';

const signInSchema = yup.object().shape({
  email: yup.string().email('E-mail inválido').required('E-mail obrigatório'),
  password: yup
    .string()
    .min(6, 'A senha deve conter pelo menos 6 caracteres')
    .required('Senha obrigatória'),
});

export default signInSchema;
