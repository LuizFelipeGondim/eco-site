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
            flex-direction: column-reverse;
            align-items: center;
        }
    }
`

export const Sidebar = styled.div`
    
    width: 330px;
    height: 280px;
    margin: 48px 0px 0px 20px;
    border-radius: 8px;

    form {
        max-width: 1000px;
        width: 100%;

        input {
            width: 100%;
            margin-bottom: 15px;
        }
    }
    
    .small-card {
        width: 100%;
        margin-top: 20px;
    
        display: flex;
        background-color: #fff;
        border-radius: 16px;
        transition: 0.5 ease;

        &:hover {
            box-shadow: 0px 24px 64px rgba(0, 0, 0, 0.04);
        }

        .image {
            width: 80px;
            min-height: 80px;
            height: 100%;
            position: relative;
            overflow: hidden;

            img {
                position: absolute;
                height: 100%;
                border-radius: 16px 0px 0px 16px;
            }
        }

        .info {

            padding: 10px;
            display: flex;
            flex-direction: column;
            justify-content: center;

            .info-header {
                display: flex;
                justify-content: space-between;
                margin-bottom: 15px;

                span {
                    color: var(--green);
                    font-size: 12px;
                }

                p {
                    color: var(--text-color);
                    font-size: 12px;
                }
            }

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

        .small-card, h3 {
            display: none
        }

        
    }

`

export const Content = styled.div`

    max-width: calc(1200px - 350px);
    width: 100%;
    border-radius: 8px;

    .card {
        width: 100%;
        height: 300px;
        margin-top: 20px;
    
        display: flex;
        background-color: #fff;
        border-radius: 16px;
        transition: 0.5 ease;
        
        &:hover {
            box-shadow: 0px 24px 64px rgba(0, 0, 0, 0.04);
        }

        .image {
            width: 500px;
            height: 100%;
            position: relative;
            overflow: hidden;
            
            img {
                width: auto;
                position: absolute;
                height: auto;
                border-radius: 16px 0px 0px 16px;
            }

            
        }

        .info {
            padding: 20px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;

            .info-header {
                display: flex;
                justify-content: space-between;

                span {
                    color: var(--green);
                    font-weight: 500;
                }

                p {
                    color: var(--text-color);
                }
            }

            .info-content {
                p {
                    color: var(--text-color);
                    font-size: 14px;
                    margin-top: 10px;
                }
            }

            .info-footer {
                display: flex;
                justify-content: space-between;
                align-items: center;

                p {
                    margin-left: 10px;
                }

                .author {
                    display: flex;
                    align-items: center;
                }
            }
        }
    }

    .pagination {
        width: 100%;
        display: flex;
        justify-content: center;
        margin-top: 25px;

        button {
            width: 140px;
        }
    }

    @media (max-width: 1050px) {
        & {
            min-width: 90%;
        }
    }

    @media (max-width: 720px) {
        .card {
            flex-direction: column;
            height: auto;
            
            .image {
                height: 270px;
                width: 100%;
                border-radius: 16px 16px 0px 0px;

                img {
                    border-radius: 16px 16px 0px 0px;
                    width: 100%;
                }
            }

            .info {
                height: 300px;
            }
        }
    }

    @media (max-width: 380px) {
        .card {
            .info {
                margin-top: -7%;
            }
        }
    }

    @media (max-width: 320px) {
        .card {
            .info {
                margin-top: -20%;
            }
        }
    }
`