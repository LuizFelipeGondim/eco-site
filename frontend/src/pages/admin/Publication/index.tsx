import React, { ChangeEvent, FormEvent, useCallback, useEffect, useState } from 'react'
import { CKEditor } from '@ckeditor/ckeditor5-react'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'
import MultiSelect from "react-multi-select-component"
import { useRouteMatch } from 'react-router-dom'

import SidebarGeneric from  '../../../components/CMS/SidebarGeneric'
import MainContentGeneric from  '../../../components/CMS/MainContentGeneric'
import { Container, SideOptions, Editor } from './styles'
import api from '../../../services/api'
import { useToast } from '../../../context/ToastContext'
import { Input } from '../../../components/Input/styles'

interface RouteParams {
    id: string
}

interface PublicationResponse {
    id: string
    title: string
    subtitle: string
    content: string
    
}

interface CategoryResponse {
    category_name: string
}

interface CategoryArray {
    value: string
    label: string
}


const PublicationCMS: React.FC = () => {
    const { addToast } = useToast()
    
    const [content, setContent] = useState('')
    const [categories, setCategories] = useState<CategoryArray[]>([])
    const [selectedOptions, setSelectedOptions] = useState([])
    const [tags, setTags] = useState<string[]>([])
    const [mainData, setMainData] = useState<FormData>()
    const [formInputData, setFormInputData] = useState({
        title: '',
        subtitle:'',
    })
    
    const { params } = useRouteMatch<RouteParams>()

    useEffect(() => {

        if (params) {
            api.get(`publications/${params.id}`).then((response) => {
                console.log(response.data)
            }).catch((err) =>{
                console.log(err)
            })
        }

    }, [params])

    const handleUploadFile = useCallback((event) => {
        const data = new FormData()
        data?.append('main_image', event.target.files[0])
        setMainData(data)

    }, [])

	const removeTags = useCallback( indexToRemove => {
        const tagsFiltered = tags.filter((_, index) => index !== indexToRemove)
		setTags(tagsFiltered);
    }, [tags])
    
	const addTags = useCallback(event => {
		if (event.target.value !== "") {
			setTags([...tags, event.target.value])
			event.target.value = ""
        }
        
    }, [tags])

    useEffect(() => {
        api.get<CategoryResponse[]>('eco-admin/categories')
        .then(response => { 
            setCategories(response.data.map(category => {
                let item = {
                    value: category.category_name,
                    label: category.category_name
                }

                return item
            })) 
        })
    }, [])

    function handleInputChange(event: ChangeEvent<HTMLInputElement>){
        const { name, value } = event.target;

        setFormInputData({ ...formInputData, [name]: value });
    }

    const handleChangeContent = useCallback((evt, editor) => {
        const dataContent = editor.getData()
        setContent(dataContent)
    }, [])


    const handleSubmit = useCallback( async (event: FormEvent) => {
        event.preventDefault()
        const data = mainData
        
        const categoriesData = selectedOptions.map(category => {
            for (var value in category){
                return category[value]     
            }
        })

        

        data?.append('title', formInputData.title)
        data?.append('subtitle', formInputData.subtitle)
        data?.append('categories', categoriesData as any)
        data?.append('tags', tags as any)
        data?.append('content', content)

        try {
            await api.post('eco-admin/publications/create', data)

            addToast({
                type: 'success',
                title: 'Publicação Realizada!',
                description: 'Sua publicação foi cadastrada com sucesso.'
            })

        } catch (err) {
            addToast({
                type: 'error',
                title: 'Erro no cadastro!',
                description: 'Ocorreu um erro ao fazer a publicação, tente novamente.'
            })
        }
        
    }, [tags, content, selectedOptions, addToast, formInputData, mainData])

    return (
        <>
            <SidebarGeneric></SidebarGeneric>
            <MainContentGeneric>
                <h1>Adicionar Publicação</h1>
                <Container>  
                    <Editor>
                        <div>
                            <h3>Escreva sua publicação</h3>
                            <hr/>
                        </div>
                        <CKEditor 
                            editor = {ClassicEditor}
                            data = {''}
                            onChange = {handleChangeContent}
                        />
                    </Editor>
                    
                    <SideOptions>
                        
                                <form encType="multipart/form-data" onSubmit={handleSubmit}>
                                    <div>
                                        <h3>Outras informações</h3>
                                        <hr/>
                                    </div> 
                                    <div className="input">
                                        <Input type="text" onChange={handleInputChange}  name="title" placeholder="Digite o título"/> 
                                    </div>

                                    <div className="input">
                                        <Input type="text" onChange={handleInputChange} name="subtitle" placeholder="Digite o subtítulo"/> 
                                    </div>

                                    <div className="categories">
                                        <label htmlFor="categories">Categorias</label>
                                        <MultiSelect
                                            options={categories}
                                            value={selectedOptions}
                                            onChange={setSelectedOptions}
                                            labelledBy="Select"
                                            className="categories"
                                        />
                                    </div>
                                    
                                    <label>Tags</label>
                                    <div className="tags-input">
                                        
                                        <ul id="tags">
                                            {tags.map((tag, index) => (
                                                <li key={index} className="tag">
                                                    <span className='tag-title'>{tag}</span>
                                                    <span className='tag-close-icon'
                                                        onClick={() => removeTags(index)}
                                                    >
                                                        x
                                                    </span>
                                                </li>
                                            ))}
                                        </ul>
                                        <input
                                            type="text"
                                            onKeyUp={event => event.key === " " ? addTags(event) : null}
                                            placeholder="Aperte espaço para confirmar"
                                        />
                                    </div>

                                    
                                    <input type="file" id="main_image" name="main_image" onChange={handleUploadFile}/> 

                                    <button type="submit" >Enviar</button>

                                </form>
               

                    </SideOptions>
                </Container>
            </MainContentGeneric>
        </>
    )
}

export default PublicationCMS


