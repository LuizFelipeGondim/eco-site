import styled from 'styled-components'

export const Content = styled.main`
    height: 100%;

    header {
        background: linear-gradient(277.67deg, #08AEEA -5.11%, #11A68C 27.36%, #15A261 59.71%, #4BD648 94.41%);
        height: 220px;
        color: #fff;
        padding: 10px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        div {
            width: 95%;
            max-width: 380px;

            h1 {
                margin-bottom: 5px;
            }
        }
    }

    main {
        margin-bottom: 40px;
        padding: 10px;
    }

    footer {
        padding: 10px;
        height: 170px;
        background-color: var(--gray);
        display: flex;
        flex-direction: column;
        align-items: center;

        span {
            font-size: 17px;
            font-weight: 500;
        }

        .social-medias {
            display: flex;
            justify-content: space-between;
            margin-top: 20px;
            width: 150px;

            img {
                height: 40px;
                width: 40px;
                background-color: var(--dark-gray);
                padding: 7px;
                border-radius: 8px;
                transition: 0.8s;

                &:hover {
                    opacity: 0.7;
                }
            }
        }

        ul {
            display: flex;
            justify-content: center;
            padding: 25px;

            li {

                text-align: center;
                padding: 0px 10px;

                & + li {
                    border-left: 1px solid var(--dark);
                }

                a {
                    display: block;
                    font-size: 15px;
                    margin-top: 4px;
                    color: var(--dark);

                    &:hover {
                        opacity: 0.8;
                    }
                }

            }
        }
    }

    @media (max-width: 400px) {
        ul {
            flex-direction: column;

            li {
                & + li {
                    border-left: 0 !important;
                    margin-top: 10px;
                }
            }
        }
    }
`

export const Form = styled.form`
    margin: auto;
    margin-top: -82px;
    width: 95%;
    max-width: 380px;
    background-color: #fff;
    border-radius: 8px;
    box-shadow: 0px 4px 8px rgba(8, 35, 48, 0.24);
    padding: 35px 30px;
    display: flex;
    flex-direction: column;

    label {
        margin: 10px 0px;
    }

    div {
        display: flex;
        width: 100%;
        justify-content: center;

        a {
            font-size: 11px;
        }

        img {
            width: 80px;
        }
    }

    .footer {
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        margin-top: 5px;
        
        button {
            margin-top: 10px;
        }
    }

`