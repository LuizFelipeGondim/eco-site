import styled from 'styled-components'

export const HeaderContent = styled.div`
    width: 100%;
    padding: 0px 20px;

    .top {
        width: 100%;
        display: flex;
        justify-content: space-between;

        select {
            margin-right: 20px;
            width: 80px;
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

                &:focus {
                    border: 1px solid var(--green);
                }
            }
        }

        .filter {
            display: flex;
            width: 620px;
            justify-content: space-between;
            margin-left: 15px;

            select {
                width: 145px;
            }
        }
    }
`
export const Table = styled.div`
    padding: 0px 20px;
    
    
    .info {
        width: 100%;
        display: flex;
        justify-content: space-between;
        background-color: #fff;
        padding: 16px 20px;
        border-radius: 8px 8px 0px 0px;

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
        }
    }

`