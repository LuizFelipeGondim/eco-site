import styled from 'styled-components'

export const HeaderContent = styled.div`
    width: 100%;
    padding: 0px 20px;
    max-width: 1400px;

    .top {
        width: 100%;
        display: flex;
        margin-bottom: 25px;
        justify-content: space-between;

        div {
            display: flex;
            width: 250px !important;
            justify-content: flex-end;

            a {
                width: 105px;
                color: #fff;
                background-color: var(--green);
                border: none;
                height: 44px;
                border-radius: 5px;
                padding: 14px 20px;
                cursor: pointer;
                transition: 1s opacity ease;
                font-weight: 500 !important;

                &:hover{
                    opacity: 0.7;
                }
            }
        }
        @media (max-width: 400px) {
            div {
                flex-direction: column-reverse;
                align-items: baseline;

                button {
                    margin-bottom: 10px;
                }
            }
        }
    }

    hr {
        margin: -10px 0px 20px 0px;
        border: 1px solid var(--medium-gray)
    }

    .bottom {
        width: 100%;
        display: flex;
        justify-content: space-between;

        form {
            input {
                width: 280px;
                margin-bottom: 25px;

                &:focus {
                    border: 1px solid var(--green);
                }
            }
        }

        @media (max-width: 1180px) {

            & {
                flex-direction: column;
            }
        }
    }
`
export const Table = styled.div`
    padding: 0px 20px;
    font-size: 15px;
    max-width: 1400px;

    .img-avatar {
        border-radius: 50%;
        width: 25px;
        height: 25px;
        margin-right: 5px;
    }

    input[type=checkbox] {
                height: 20px;
                width: 20px;
                margin-bottom: 0px;
                cursor: pointer;
            }

    .info {
        width: 100%;
        display: flex;
        justify-content: space-between;
        background-color: #fff;
        padding: 16px 20px;
        border-radius: 8px 8px 0px 0px;
        flex-wrap: wrap;

        .results {
            display: flex;
            width: 300px;
            align-items: center;
            justify-content: space-between;
        }

        .results-per-page {
            display: flex;
            align-items: center;
            justify-content: space-between;

            input {
                margin: 0;
                width: 70px;
            }

            span {
                font-size: 15px;
                margin-right: 10px;
            }
        }

        @media (max-width: 630px) {

            .results-per-page {
                margin-top: 25px;
            }

        }

    }

    table {
        width: 100%;

        tr{
            height: 70px;
        }

        td {
            word-wrap: break-word;
            padding: 0px 16px;

        }
        
        .avatar{
            padding: 0px 10px !important;
            display: flex;
            align-items: center;
            margin-top: 23px;
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

        @media (max-width: 1180px) {

            & {
                display: none;
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

    @media (max-width: 1180px) {

        & {
            display: flex;
        }

    }
`