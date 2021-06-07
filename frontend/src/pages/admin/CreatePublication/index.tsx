import React, { ChangeEvent, FormEvent, useCallback, useEffect, useState } from 'react'
import { CKEditor } from '@ckeditor/ckeditor5-react'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'
import MultiSelect from "react-multi-select-component"

import { InputField } from '../../../components/Input'
import SidebarGeneric from  '../../../components/CMS/SidebarGeneric'
import MainContentGeneric from  '../../../components/CMS/MainContentGeneric'
import { Container, SideOptions, Editor } from './styles'
import api from '../../../services/api'
import { useToast } from '../../../context/ToastContext'



interface CategoryResponse {
    category_name: string
}

interface CategoryArray {
    value: string
    label: string
}


const CreatePublicationCMS: React.FC = () => {
    const { addToast } = useToast()

    const [content, setContent] = useState('')
    const [categories, setCategories] = useState<CategoryArray[]>([])
    const [selectedOptions, setSelectedOptions] = useState([])
    const [tags, setTags] = useState<string[]>([])
    const [mainImage, setMainImage] = useState<FormData>()

    const [formData, setFormData] = useState({
        title: '',
        subtitle:'',
    })

    const handleUploadFile = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            const data = new FormData()
            data.append('main_image', e.target.files[0])
            setMainImage(data)
        }
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

        setFormData({ ...formData, [name]: value });
    }

    const handleChangeContent = useCallback((evt, editor) => {
        const dataContent = editor.getData()
        setContent(dataContent)
    }, [])


    const handleSubmit = useCallback( async (event: FormEvent) => {
        event.preventDefault()
        
        const data = {
            title: formData.title,
            subtitle: formData.subtitle,
            main_image: mainImage,
            categories: selectedOptions,
            tags,
            content,
        }
        console.log(data)
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
        
    }, [tags, content, selectedOptions, addToast, mainImage])

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
                                        <input type="text" onChange={handleInputChange}  name="title" placeholder="Digite o título"/> 
                                    </div>

                                    <div className="input">
                                        <input type="text" onChange={handleInputChange} name="subtitle" placeholder="Digite o subtítulo"/> 
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

export default CreatePublicationCMS


