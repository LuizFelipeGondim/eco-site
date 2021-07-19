import styled from 'styled-components'


export const Main = styled.main`
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    margin-top: 100px;
`

export const Container = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;

    .header {
        margin: 20px 0px;
        width: 750px;

        h1 {
            margin-bottom: 15px;
        }

        div {
            display: flex;
            justify-content: space-between;
            align-items: center;
            flex-wrap: wrap;

            button {
                width: 130px !important;
            }
    
            .resolved {
                border: 1px solid var(--green);
                font-weight: 500;
                color: var(--green);
                border-radius: 5px;
                padding: 5px 8px;
                margin-left: 8px;
            }
        }
    }

    .content, .comments .comment .comment-content {
        margin-top: 20px;
        width: 750px;
        display: flex;
        flex-direction: column;
        align-items: center;

        .tags {
            margin: 30px;
            width: 100%;
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            
            span {
                border: 1px solid var(--green);
                font-weight: 500;
                color: var(--green);
                border-radius: 5px;
                padding: 5px 8px;
                margin-left: 8px;

                &:hover {
                    background-color: var(--green);
                    color: #fff;
                }
            }
        }

        p {
            color: var(--dark);
            font-weight: 400;
            align-self: flex-start;
            font-size: 14px;
        }

        h1, h2, h3 {
            align-self: flex-start;
            font-weight: 500;
        }

        h2 {
            font-size: 30px;
        }

        ul {
            li {
                list-style: disc;
            }
            font-size: 14px;
            margin-left: 20px;
            align-self: flex-start;
        }

        ol {
            li {
                list-style: decimal;
            }
            font-size: 14px;
            margin-left: 20px;
            align-self: flex-start !important;
        }

        blockquote {
            align-self: flex-start;
            border-left: 4px solid var(--green);
            padding: 10px 0px 10px 15px;
        }

        figure > embed {
            width: 700px;
            height: 400px;
        }

        table {
            border: 1px solid #ddd;
            border-collapse: collapse;
            border-spacing: 0;
            min-width: 200px;
            margin: 20px 0px;
            
            td, th {
                padding: 8px !important;
                text-align: center;
            }
            thead{
                background-color: var(--dark-gray) ;
            }
        }
    }

    .comments {
        width: 750px;
        margin: 20px 0px;

        .comment{
            margin: 20px 0px;
        }

        .comment-header{
            display: flex;
            justify-content: space-between;

            div {
                display: flex;
                align-items: center;
                margin-bottom: 10px;

                p{
                    margin: 0px 5px;
                }

                span {
                    color: var(--text-color);
                }
                img {
                    border-radius: 50%;
                    width: 25px;
                    height: 25px;
                }
            }

            & > img {
                cursor: pointer;

                &:hover {
                    opacity: 0.8;
                }
            }
        }
    }

    @media (max-width: 780px) {
        & {
            width: 95% !important;
            justify-content: center;
        }

        .header, .content, .comments{
            width: 100%;
            padding: 20px;
        }

        .comments .comment .comment-content{
            width: 100% !important;
        }
    }

`
export const Editor = styled.div`

    flex: 1;
    width: 100%;
    border-radius: 8px;
    font-size: 15px;
    margin-top: 40px;

    .ck.ck-content.ck-editor__editable.ck-rounded-corners.ck-editor__editable_inline.ck-blurred,
    .ck.ck-content.ck-editor__editable.ck-rounded-corners.ck-editor__editable_inline.ck-focused{
        min-height: 200px;
    }

    ul > li {
        list-style: disc;
        margin-left: 20px;
    }

    ol > li{
        list-style: decimal;
        margin-left: 20px;
    }

    h2 {
        margin-bottom: 20px;
    }

    button {
        margin-top: 20px;
    }


    @media (max-width: 1100px) {
        & {
            margin-top: 25px;
            width: 100%;
        }
    }

`

