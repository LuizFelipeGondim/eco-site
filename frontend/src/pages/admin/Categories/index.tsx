import React, { useCallback, useEffect } from 'react'
import { Form, Formik } from 'formik'

import alert from '../../../assets/adminSVG/alert.svg'
import excluir from '../../../assets/adminSVG/excluir.svg'
import left from '../../../assets/adminSVG/left.svg'
import right from '../../../assets/adminSVG/right.svg'

import SidebarGeneric from  '../../../components/CMS/SidebarGeneric'
import MainContentGeneric from  '../../../components/CMS/MainContentGeneric'
import { Container, Cards } from './styles'
import { InputField } from '../../../components/Input'
import CategoryValidations from '../../../validations/CategoryValidations'
import api from '../../../services/api'
import { useToast } from '../../../context/ToastContext'
import useCategories from '../../../context/Pagination/useCategories'
import { Input } from '../../../components/Input/styles'
import usePagination from '../../../context/Pagination/usePagination'


interface FormData {
    category_name: string
}

const CategoriesCMS: React.FC = () => {
    const limit = 5
    const { actualPage, handleAfterPage, handleBeforePage } = usePagination()
    const { addToast } = useToast()
    const { 
        categories, 
        fetchCategories, 
        totalCategories,
        categoriesLength,
        setCategories,
        setName,
        name
    } = useCategories()

    const countAllCategorias = categoriesLength === undefined ? 0 : categoriesLength
    const pageLimit = Math.ceil(countAllCategorias/limit)

    useEffect(() => {
        fetchCategories(actualPage - 1, limit, name)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [actualPage, name])

    const handleDeleteCategory = useCallback((id: string) => {
        api.delete(`eco-admin/categories/delete/${id}`)

        const data = categories.filter(category => id !== category.id)

        setCategories(data)
    }, [setCategories, categories])

    const handleChangeName = useCallback((event) => {
        setName(event.target.value)
    }, [setName])

    const handleSubmit = useCallback( async (data: FormData) => {
        try {
            await api.post('eco-admin/categories/create', data)

            addToast({
                type: 'success',
                title: 'Categoria cadastrada!',
                description: 'A categoria foi cadastrada com sucesso.'
            })

            window.location.reload()

        } catch (err) {
            addToast({
                type: 'error',
                title: 'Erro na autenticação',
                description: 'Ocorreu um erro ao fazer login, cheque as credenciais.',
            })
        }
        
    }, [addToast])

    return (
        <>
            <SidebarGeneric></SidebarGeneric>
            <MainContentGeneric>
                <h1>Categorias</h1>
                <Container>
                <Formik
                        initialValues={{
                            category_name: ''
                        }}
                        validationSchema={CategoryValidations}
                        onSubmit={handleSubmit}

                    >
                        {() => (
                            <Form>
                                <h3>Adicionar categorias</h3>
                                <hr/>
                                <InputField label="Nome da categoria" name="category_name" type="text" placeholder="Insira a categoria"/>
                                <div className="descricao">
                                    <img src={alert} alt=""/>
                                    <span>Nome que irá aparecer junto com a publicação.</span>
                                </div>

                                <button type="submit">Salvar</button>

                            </Form>
                        )}
                    </Formik>  

                    <div className="table">
                        <div className="table-header">
                            <h3>Categorias</h3>
                            <p>Todos ({totalCategories})</p>
                        </div>
                        <hr/>
                        <form method="get">
                            <Input type="text" placeholder="Pesquise aqui!" onChange={handleChangeName}/>
                        </form>

                        <Cards>
                            {categories.map((category => {
                                return(

                                    <div className="card" key={category.id}>
                                        <div className="card-header"> 
                                            <div>
                                                <input type="checkbox"/>
                                                <h4>
                                                    {category.category_name}
                                                </h4>
                                            </div>

                                            <div className="card-options">    
                                                <img src={excluir} alt="excluir"/>
                                            </div>
                                        </div>
                                        <ul className="card-body">
                                            <li>NÚMERO DE USO: 2 </li>
                                        </ul>
                                    </div>
                                )

                            }))}
                            
                            
                        </Cards>

                        <table>
                            <thead>
                                <tr>
                                    <td>NOME</td>
                                    <td>NÚMERO DE USO</td>
                                    <td>OPÇÕES</td>
                                </tr>
                            </thead>
                            <tbody>
                                {categories.map((category => {
                                    return (
                                        <tr key={category.id}>
                                            <td>{category.category_name}</td>
                                            <td>2</td>
                                            <td>
                                                <span onClick={() => handleDeleteCategory(category.id)}>
                                                    <img src={excluir} alt="excluir"/>
                                                </span>
                                            </td>
                                        </tr>
                                    )
                                }))}
                                
                            </tbody>
                        </table>
                        <div className="table-footer">
                            <div>
                                <button onClick={handleBeforePage}>
                                    <img src={left} alt=""/>
                                </button>
                                <p>Anterior</p>
                                <p> {actualPage} de {pageLimit} </p>
                                <p>Próximo</p>
                                <button onClick={() => handleAfterPage(pageLimit)}>
                                    <img src={right} alt=""/>    
                                </button>
                            </div>
                        </div>
                    </div>
                </Container>
            </MainContentGeneric>
        </>
    )
}

export default CategoriesCMS
