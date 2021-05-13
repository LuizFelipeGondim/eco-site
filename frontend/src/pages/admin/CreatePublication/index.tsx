import React from 'react'
import { Editor } from '@tinymce/tinymce-react'

import SidebarGeneric from  '../../../components/CMS/SidebarGeneric'
import MainContentGeneric from  '../../../components/CMS/MainContentGeneric'
import { Container, SideOptions, Form } from './styles'

const CreatePublicationCMS: React.FC = () => {

    return (
        <>
            <SidebarGeneric></SidebarGeneric>
            <MainContentGeneric>
                <h1>Perfil do usuário</h1>
                <Container>  
                    
                    <Form encType="multipart/form-data">
                        <div>
                            <h3>Editar informações</h3>
                            <hr/>
                        </div>
                        <Editor
                            init={{
                            height: 500,
                            menubar: false,
                            plugins: [
                                'advlist autolink lists link image charmap print preview anchor',
                                'searchreplace visualblocks code fullscreen',
                                'insertdatetime media table paste code help wordcount'
                            ],
                            toolbar: 'undo redo | formatselect | ' +
                            'bold italic backcolor | alignleft aligncenter ' +
                            'alignright alignjustify | bullist numlist outdent indent | ' +
                            'removeformat | help',
                            content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
                            }}
                        />
                    </Form>
                    <SideOptions>
                        <div>
                            <h3>Outras informações</h3>
                            <hr/>
                        </div>
                        <div className="categories">
                            <li>dsd</li>
                            <li>dad</li>
                            <li>ada</li>
                        </div>
                    </SideOptions>
                </Container>
            </MainContentGeneric>
        </>
    )
}

export default CreatePublicationCMS
