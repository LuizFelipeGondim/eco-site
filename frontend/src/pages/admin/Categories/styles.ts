import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    padding: 25px;

    form {
        display: flex;
        flex-direction: column;
        width: 350px;
        max-height: 270px;
        padding: 25px;
        background-color: #fff;
        margin-right: 25px;
        border-radius: 8px;
        
        .error {
            display: block;
            width: 100% !important;
            background-color: var(--red);
            opacity: 0.9;
            color: #fff;
            padding: 5px;
            border-radius: 5px;
            margin-top: 5px;
        }

        h3 {
            margin-bottom: 15px;
        }

        hr {
            margin-bottom: 15px;
            border: 1px solid var(--medium-gray)
        }

        input {
            margin: 8px 0px;
        }

        .descricao {
            display: flex;
            align-items: baseline;
            margin-bottom: 15px;

            span {
                color: var(--dark);
                font-size: 12px; 
                margin-left: 5px;
            }
        }
    }

    .table {
        background-color: #fff;
        flex: 1;
        padding: 25px;
        border-radius: 8px;
        font-size: 15px;
        box-shadow: 0px 24px 64px rgba(0, 0, 0, 0.04);

        .table-header {
            display: flex;
            justify-content: space-between;
        }

        hr {
            margin: 15px 0px 10px 0px;
            border: 1px solid var(--medium-gray)
        }

        table {
            width: 100%;

            tr{
                height: 70px;
            }

            td {
                max-width: 110px;
                word-wrap: break-word;
                padding: 0px 16px;

                input {
                    height: 20px;
                    width: 20px;
                    margin-bottom: 0px;
                    cursor: pointer;
                }
            }

            thead {
                background-color: var(--gray);

                td {
                    font-weight: 500;
                }
            }

            tbody {
                background-color: #fff;

                img {
                    height: 22px;
                    transition: 0.5s;
                    cursor: pointer;

                    & + img {
                        margin-left: 10px;
                    }

                    &:hover {
                        opacity: 0.8;
                    }
                }
            }
        }
        
        .table-footer {
            display: flex;
            justify-content: space-between;
            padding: 16px 20px;
            background-color: #fff;
            border-radius: 0px 0px 8px 8px;

            div {
                display: flex;
                justify-content: space-between;
                width: 300px;
                align-items: center;

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

            & > button {
                background-color: var(--red);
                width: 150px;
            }

            @media (max-width: 510px) {
                & {
                    flex-direction: column-reverse;
                    align-items: center;
                }

                & > button {
                    margin-bottom: 15px;
                    width: 80%;
                }
            }
        }
    }

    @media (max-width: 1080px) {

        & {
            flex-direction: column;
        }

        .table {
            width: 100%;
        }

        form {
            width: 100%;
            margin-bottom: 25px;
        }
    }

    @media (max-width: 700px) {

        table {
            display: none;
        }

    }

`
export const Cards = styled.div`
    margin-top: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    display: none;

    .card {
        width: 280px;
        padding: 20px;
        background-color: #fff;
        margin: 0px 5px 20px 5px;
        box-shadow: 0px 24px 64px rgba(0, 0, 0, 0.04);

        .card-header {
            display: flex;
            justify-content: space-between; 

            div {
                display: flex;
                align-items: center;

                h4 {
                    margin-left: 10px;
                }

                span {
                    font-size: 12px;
                }
            }

            img {
                & + img {
                    margin-left: 10px;
                }
            }
        }

        .card-body {
            margin-top: 15px;

            li {
                padding: 12px 0px;
                border-top: 1px solid var(--gray);
            }
        }
    }

    @media (max-width: 700px) {

        & {
            display: flex !important;
        }

    }
`


