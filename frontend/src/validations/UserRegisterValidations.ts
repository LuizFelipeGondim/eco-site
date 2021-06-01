import * as Yup from 'yup'
import 'yup-phone'

const UserRegisterValidations = Yup.object().shape({
    first_name: Yup.string()
        .required('O nome é obrigatório'),

    last_name: Yup.string(),

    email: Yup.string()
        .required('O e-mail é obrigatório')
        .email('Digite um e-mail válido'),

    password: Yup.string()
        .required('A senha é obrigatória')
        .min(8, 'No mínimo 8 dígitos'),
        
    confirm_password: Yup.string()
        .required('A senhas devem ser iguais')
        .oneOf([Yup.ref('password'), null], 'As senhas devem ser iguais'),
        
    //Ver melhor forma para colocar o número de telefone.
    whatsapp: Yup.string()
        .required('O número é obrigatório')
        .phone('BR', true, 'O número é inválido'),

    uf: Yup.string(),

    city: Yup.string(),
})

export default UserRegisterValidations