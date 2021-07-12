import styled from 'styled-components'

export const Content = styled.main`
    margin-top: 100px;
    min-height: calc(100vh);
    display: flex;
    flex-direction: column;
    align-items: center;
    background: #F7F9FA;
`

export const MainCard = styled.div`
    display: flex;
    justify-content: center;
    background: #FDFDFD;
    margin-top: 50px;
    width: 680px;
    padding: 30px;
    border-radius: 5px;
    box-shadow: 0px 24px 64px rgba(0, 0, 0, 0.04);


    form {
        width: 50%;

        h2 {
            font-size: 35px;
            margin-bottom: 30px;
        }

        input {
            margin: 5px 0px 10px 0px;
        }
        button {
            width: 100%;
        }
    }

    .info {
        width: 50%;
        display: flex;
        flex-direction: column;
        align-items: center;

        h2 {
            font-size: 35px;
        }

        .weather {
            display: flex;
            margin: 20px 0px;
            align-items: center;

            & > div {
                display: flex;
                flex-direction: column;
                align-items: center;
                margin-right: 10px;

                span {
                    font-size: 50px;
                }
            }
        }

        .attributes {
            display: flex;

            span {
                display: flex;
                justify-content: center;
                align-items: center;
                width: 120px;
                margin-right: 10px;
                border-radius: 5px;
                padding: 5px;
                transition: 1s;
                cursor: pointer;

                img {
                    margin-right: 5px;
                }

                &:hover {
                    box-shadow: 0px 4px 8px rgba(8, 35, 48, 0.24);
                }
            }
        }
    }

    @media (max-width: 700px) {
        & {
            flex-direction: column;
        }

        &, .info, form {
            width: 100%;
        }

        .info {
            margin-bottom: 40px;
        } 

        form {
            h2 {
                display: none;
            }
        }
    }
`

export const Cards = styled.div`
    margin-bottom: 30px;
    width: 1220px;

    .slick-next:before, .slick-prev:before {
        color: var(--dark)
    }

    .card {
        display: flex !important;
        flex-direction: column !important;
        align-items: center !important;
        justify-content: center !important;
        width: 250px !important;
        height: 250px;
        border-radius: 5px;
        background: #FDFDFD;
        margin: 30px 0px;


        &:hover {
            box-shadow: 0px 24px 64px rgba(0, 0, 0, 0.04);
        }

        img {
            width: 100px;
        }

        .temperature {

            margin-top: 15px;
            display: flex;

            span + span {
                margin-left: 10px;
            }
            span {
                display: flex;
                

                img {
                    width: 8px;
                }
            }
        }
    }

    @media (max-width: 1290px) {
        & {
            width: 850px;
        }
    }

    @media (max-width: 930px) {
        & {
            width: 600px;
        }
    }

    @media (max-width: 680px) {
        & {
            width: 250px;
        }
    }
`