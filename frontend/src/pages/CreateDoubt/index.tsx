import React, { ChangeEvent, FormEvent, useCallback, useState } from 'react'
import { CKEditor } from '@ckeditor/ckeditor5-react'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'

import { Container, SideOptions, Editor, Main } from './styles'
import api from '../../services/api'
import { useToast } from '../../context/ToastContext'
import { Input } from '../../components/Input/styles'
import { useHistory } from 'react-router-dom'
import Footer from '../../components/Footer'
import Menu from '../../components/Menu'


const CreateDoubt: React.FC = () => {
    const { addToast } = useToast()
    const history = useHistory()
    
    const [content, setContent] = useState('')
    const [tags, setTags] = useState<string[]>([])
    const [title, setTitle] = useState<string>('')

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


    function handleTitleChange(event: ChangeEvent<HTMLInputElement>){
        const { value } = event.target
        setTitle(value)
    }

    const handleChangeContent = useCallback((evt, editor) => {
        const dataContent = editor.getData()
        setContent(dataContent)
    }, [])

    const handleSubmit = useCallback( async (event: FormEvent) => {
        event.preventDefault()

        const data = {
            title,
            tags,
            content
        }

        try {
            await api.post('forum/create', data)

            addToast({
                type: 'success',
                title: 'Dúvida Criada!',
                description: 'Sua dúvida foi cadastrada com sucesso.'
            })

            history.push('/forum')

        } catch (err) {
            addToast({
                type: 'error',
                title: 'Erro no cadastro!',
                description: 'Ocorreu um erro ao cadastrar a sua dúvida, tente novamente mais tarde.'
            })
        }
        
    }, [
        tags, 
        content, 
        addToast, 
        title, 
        history
    ])

    return (
        <>
            <Menu></Menu>
            <Main>
                <Container>  
                    <Editor className="editor">
                        <div>
                            <h3>Escreva sua dúvida</h3>
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
                                <label>Título</label>
                                <Input type="text" onChange={handleTitleChange}  name="title" placeholder="Digite o título"/> 
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

                            <button type="submit" >Enviar</button>

                        </form>
            
                    </SideOptions>
                </Container>
            </Main>
            <Footer></Footer>

        </>
    )
}

export default CreateDoubt


