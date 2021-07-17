import styled from 'styled-components'

export const Main = styled.main`
    margin-top: 100px;
    min-height: calc(100vh);
    display: flex;
    justify-content: center;
    padding: 25px;
    width: 100%;
    background-color: var(--gray);


    @media (max-width: 1050px) {
        & {
            flex-direction: column;
            align-items: center;
        }
    }
`

export const Sidebar = styled.div`
    
    width: 330px;
    height: 280px;
    margin: 48px 20px 0px 0px;
    border-radius: 8px;
    display: flex;
    flex-direction: column;

    form {
        max-width: 1000px;
        width: 100%;

        input {
            width: 100%;
            margin: 25px 0px;
        }
    }

    a {
        button {
            width: 100%;
        }
    }

    @media (max-width: 1050px) {
        & {
            width: 100%;
            margin-left: 0 !important;
            height: auto;
            margin-top: 0;
            display: flex;
            justify-content: center;
        }
        
    }

`

export const Content = styled.div`

    margin-top: 80px;
    max-width: calc(1200px - 350px);
    width: 100%;
    border-radius: 8px;

    .card {
        width: 100%;
        margin-top: 20px;
    
        display: flex;
        flex-direction: column;
        background-color: #fff;
        border-radius: 16px;
        padding: 15px;
        transition: 0.5 ease;
        
        &:hover {
            box-shadow: 0px 24px 64px rgba(0, 0, 0, 0.04);
        }



        .info-header {
            display: flex;
        }

        .info-content {
            p {
                color: var(--text-color);
                font-size: 14px;
                margin: 10px 0px;
                max-width: 100%;

                white-space: nowrap; 
                width: 120em; 
                overflow: hidden;
                text-overflow: ellipsis; 

            }
        }

        .info-footer {
            display: flex;
            justify-content: flex-end;
            flex-wrap: wrap;
            align-items: center;

            p {
                margin-left: 10px;
            }

            img {
                border-radius: 50%;
                width: 25px;
                height: 25px;
            }

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

            .author {
                display: flex;
                align-items: center;
            }
        }
    }

    .pagination {
        display: flex;
        justify-content: center;
        margin-top: 20px;
        div {
            display: flex;
            justify-content: space-between;
            align-items: center;
            width: 300px;
            padding: 16px 20px;
            border-radius: 0px 0px 8px 8px;

            button {
                background-color: #fff;
                width: 30px;
                height: 30px;
                padding: 0;

                &:focus {
                    border: 1px solid var(--green);
                }
            }
        }
    }

    @media (max-width: 1050px) {
        & {
            min-width: 90%;
            margin-top: 15px;
        }
    }

    @media (max-width: 720px) {
        .card {
            flex-direction: column;
            height: auto;

        }
    }
`