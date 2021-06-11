import * as Yup from 'yup'

const CategoryValidations = Yup.object().shape({
    
    category_name: Yup.string()
        .matches(/^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$/, 
            'Não é permitido caracteres como: ., /, !, ?, *, & e ,')
        .required('Digite algo para enviar')
})

export default CategoryValidations