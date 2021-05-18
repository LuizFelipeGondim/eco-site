import * as Yup from 'yup'
import 'yup-phone'

const UserRegisterValidations = Yup.object().shape({
    name: Yup.string()
        .required('O nome é obrigatório'),

    last_name: Yup.string(),

    email: Yup.string()
        .required('O e-mail é obrigatório')
        .email('Digite um e-mail válido'),

    password: Yup.string()
        .min(8, 'No mínimo 8 dígitos'),
        
    confirm_password: Yup.string()
        .required('A senhas devem ser iguais')
        .oneOf([Yup.ref('password'), null], 'As senhas devem ser iguais'),
        
    //Ver melhor forma para colocar o número de telefone.
    whatsapp: Yup.string()
        .phone('BR', true, 'O número é inválido')
        .required('O número é obrigatório'),

    uf: Yup.string(),

    city: Yup.string(),
})

export default UserRegisterValidations