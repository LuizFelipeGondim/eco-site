import * as Yup from 'yup'

const UserLoginValidations = Yup.object().shape({
    
    email: Yup.string()
        .required('O e-mail é obrigatório')
        .email('Digite um e-mail válido'),

    password: Yup.string()
        .required('A senha é obrigatória')
        .min(8, 'No mínimo 8 dígitos'),
})

export default UserLoginValidations