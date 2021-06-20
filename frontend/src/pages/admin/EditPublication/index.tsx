import React, { ChangeEvent, FormEvent, useCallback, useEffect, useState } from 'react'
import { CKEditor } from '@ckeditor/ckeditor5-react'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'
import MultiSelect from "react-multi-select-component"
import { useHistory, useParams } from 'react-router-dom'

import SidebarGeneric from  '../../../components/CMS/SidebarGeneric'
import MainContentGeneric from  '../../../components/CMS/MainContentGeneric'
import { Container, SideOptions, Editor } from './styles'
import api from '../../../services/api'
import { useToast } from '../../../context/ToastContext'
import { Input } from '../../../components/Input/styles'

interface Category {
    category_name: string
}

interface CategoryArray {
    value: string
    label: string
}

interface RouteParams {
    slug: string
}
interface PublicationResponse {
    title: string
    id: string
    user_id: string
    created_at: string
    content: string
    slug: string
    main_image: string
    subtitle: string
    categories: Category[]
}

interface TagResponse {
    id: string
    tag_name: string
}

interface Response {
    publication: PublicationResponse
    tags: TagResponse[]
}


const EditPublicationCMS: React.FC = () => {
    const history = useHistory()
    const { addToast } = useToast()
    const { slug } = useParams<RouteParams>()
    
    const [publication, setPublication] = useState<PublicationResponse>()
    const [content, setContent] = useState<string>('')
    const [categories, setCategories] = useState<CategoryArray[]>([])
    const [selectedOptions, setSelectedOptions] = useState([])
    const [tags, setTags] = useState<string[]>([])
    const [title, setTitle] = useState<string>('')
    const [subtitle, setSubtitle] = useState<string>('')
    const [image, setImage] = useState<string>('')

    useEffect(() => {
        api.get<Response>(`/publications/${slug}`)
            .then(response => {
    
                const responseData = Object.values(response.data)
                const allTags = Object.values<TagResponse>(responseData[2])

                const publicationTags = allTags.map(tag => tag.tag_name)

                setImage(responseData[0].main_image)
                setTitle(responseData[0].title)
                setSubtitle(responseData[0].subtitle)
                setPublication(responseData[0])
                setTags(publicationTags)
            })
    }, [slug])
    
    useEffect(() => {
        api.get<Category[]>('eco-admin/categories')
        .then(response => { 
   
            const allcategories = response.data.map(category => {
                return ({
                    value: category.category_name,
                    label: category.category_name
                })
            })

            setCategories(allcategories) 
        })
    }, [])

    const handleUploadFile = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        e.preventDefault()

        if (e.target.files) {
            const data = new FormData();

            
            data?.append('main_image', e.target.files[0])
            console.log(data)
            api.patch(`/eco-admin/publications/main-image/${publication?.id}`, data)
                .then(response => {
                    setImage(response.data.main_image)
                })
        }
        // eslint-disable-next-line array-callback-return
    }, [publication])

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

    const handleTitleChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target;

        setTitle(value);
    }, [])

    const handleSubtitleChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target;

        setSubtitle(value);
    }, [])

    const handleChangeContent = useCallback((evt, editor) => {
        const dataContent = editor.getData()
        setContent(dataContent)
    }, [])

    const handleSubmit = useCallback( async (event: FormEvent) => {
        event.preventDefault()

        const id = publication?.id || 1

        // eslint-disable-next-line array-callback-return
        const categoriesData = selectedOptions.map(category => {
            for (var value in category){
                return category[value]     
            }
        })

        const data = {
            title,
            subtitle,
            categories: categoriesData,
            tags,
            content
        }

        console.log(data)

        try {
            await api.post(`eco-admin/publications/edit/${id}`, data)

            addToast({
                type: 'success',
                title: 'Publicação Realizada!',
                description: 'Sua publicação foi cadastrada com sucesso.'
            })

            history.push('/eco-admin/publications')

        } catch (err) {
            addToast({
                type: 'error',
                title: 'Erro no cadastro!',
                description: 'Ocorreu um erro ao fazer a publicação, tente novamente.'
            })
        }
        
    }, [
        tags, 
        content, 
        selectedOptions, 
        addToast, 
        title,
        subtitle,
        history,
        publication
    ])

    return (
        <>
            <SidebarGeneric></SidebarGeneric>
            <MainContentGeneric>
                <h1>Editar Publicação</h1>
                <Container>  
                    <Editor>
                        <div>
                            <h3>Escreva sua publicação</h3>
                            <hr/>
                        </div>
                        <CKEditor 
                            editor = {ClassicEditor}
                            data = {publication?.content}
                            onChange = {handleChangeContent}
                        />
                    </Editor>
                    
                    <SideOptions>
                        
                        <form onSubmit={handleSubmit}>
                            <div>
                                <h3>Outras informações</h3>
                                <hr/>
                            </div> 
                
                            <div className="input">
                                <label>Título</label>
                                <Input 
                                    type="text" 
                                    onChange={handleTitleChange}  
                                    name="title" 
                                    placeholder="Digite o título"
                                    value={title}
                                /> 
                            </div>

                            <div className="input">
                                <label>Subtítulo</label>
                                <Input 
                                    type="text" 
                                    onChange={handleSubtitleChange} 
                                    name="subtitle" 
                                    placeholder="Digite o subtítulo"
                                    value={subtitle}
                                /> 
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

                                <p>
                                    A(s) categoria(s) da publicação é(são):
                                    {publication?.categories.map(category => 
                                        <span> |{category.category_name}|</span> 
                                    )}
                                    . Selecione-a(s) novamente para mantê-la(s).
                                </p>
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

                            <button type="submit">Editar informações</button>

                        </form>
                        <form encType="multipart/form-data">
                            <div>
                                <h3>Editar banner</h3>
                                <hr/>
                            </div> 
                            <div className="input">
                                <label>Escolha uma imagem</label>
                                <input type="file" id="main_image" name="main_image" onChange={handleUploadFile}/> 
                            </div>
                            <div className="image">
                                <img src={image} alt=""/>
                            </div>

                            <button type="submit">Editar banner</button>
                        </form>

                    </SideOptions>
                </Container>
            </MainContentGeneric>
        </>
    )
}

export default EditPublicationCMS


