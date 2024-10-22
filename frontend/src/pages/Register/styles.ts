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
            max-width: 600px;

            h1 {
                margin-bottom: 5px;
            }
        }
    }

    main {
        margin-bottom: 40px;
        padding: 10px;

        form {
            margin: auto;
            margin-top: -82px;
            width: 95%;
            max-width: 600px;
            background-color: #fff;
            border-radius: 8px;
            box-shadow: 0px 4px 8px rgba(8, 35, 48, 0.24);
            padding: 35px 30px;
            display: flex;
            flex-direction: column;

            label {
                margin: 10px 0px;
            }

            p {
                font-size: 11px;
                margin: 10px 0px;
            }

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

            .input-group-1 {
                display: flex;
                flex-direction: column;
                align-items: flex-start;
                height: 130px;
            }

            .input-group-2 {
                width: 100%;
                display: flex;
                justify-content: space-between;

                & > div {
                    display: flex;
                    flex-direction: column;
                    width: 48%;
                    align-items: flex-start;
                    max-height: 115px;

                    input {
                        width: 100% !important;
                    }
                }
            }

            & > div {
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
                justify-content: flex-end;
                margin-top: 5px;
                
                button {
                    margin-top: 10px;
                    width: 120px;
                }
            }

            @media (max-width: 500px) {
                .input-group-2 {
                    width: 100%;
                    flex-direction: column;

                    div {
                        width: 100%;
                    }
                }
            }
        }
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