import styled from 'styled-components'

interface ImageProps{
    image: string
}

export const Main = styled.main`
    margin-top: 100px;
    min-height: calc(100vh);
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: center;
    background-color: #F7F9FA;
`

export const Container = styled.div`
    margin-top: 40px;
    min-height: calc(100vh);
    max-width: 1400px;

    .fade {
        
        width: 100%;
        max-width: 1200px;
        margin: 0px 20px;
        height: 380px;

        @media (max-width: 1290px) {
            & {
                max-width: 850px;
            }
        }

        @media (max-width: 930px) {
            & {
                max-width: 600px;
            }
        }

        @media (max-width: 680px) {
            & {
                max-width: 250px;
            }
        }

        .info {
            position: absolute;
            margin: -120px 0px 0px 40px;
            
            .categories {
                display: flex;
                justify-content: flex-start;
                flex-wrap: wrap;
                margin-bottom: 10px;

                .category {
                    color: var(--green);
                    margin-right: 8px;
                    font-weight: 500;
                }
            }

            h1, p {
                color: #fff;
            }

            h1 {
                font-size: 30px;
                margin-bottom: 5px;
            }
        }
    }

`

export const Image = styled.div<ImageProps>`
    width: 100%;
    height: 150px;
    background-image: url(${(props) => props.image});
    background-position: center;
    background-size: cover;
    border-radius: 10px 10px 0px 0px;

`

export const Fade = styled.div<ImageProps>`
    background-image: url(${(props) => props.image});
    background-position: center;
    background-size: cover;
    border-radius: 10px;
    height: 380px;
    max-width: 1200px;
    position: relative;

    @media (max-width: 1290px) {
        & {
            width: 850px;
            max-width: 850px;
        }
    }

    @media (max-width: 930px) {
        & {
            width: 600px;
            max-width: 600px;
        }
    }

    @media (max-width: 680px) {
        & {
            width: 250px;
            max-width: 250px;
        }
    }
`

export const MainContent = styled.div`
    display: flex;
    width: 100%;
    max-width: 1200px;
    display: flex;
    justify-content: center;
    margin-bottom: 40px;

    

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
        width: 250px !important;
        height: 300px;
        border-radius: 5px;
        background: #FDFDFD;
        margin: 30px 0px;


        &:hover {
            box-shadow: 0px 24px 64px rgba(0, 0, 0, 0.04);
        }

        .info {
            padding: 15px;

            .categories {
                display: flex;
                justify-content: flex-start;
                flex-wrap: wrap;
                margin-bottom: 10px;

                .category {
                    color: var(--green);
                    margin-right: 8px;
                    font-weight: 500;
                }
            }

            h3 {
                font-size: 18px;
                margin-bottom: 10px;
            }

            p {
                color: var(--text-color);
                margin-bottom: 15px;
            }

            & > div {
                display: flex;
                justify-content: space-between;
                align-items: center;
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

export const Doubt = styled.div`
    width: 100%;
    height: 200px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin-top: 10px;
    padding: 20px;

    background-color: var(--green);


    h1, p {
        color: #fff !important;
    }

    p {
        margin: 25px 0px;
        width: 45%;
        text-align: center;
    }

    a {
        padding: 10px 20px;
        border-radius: 8px;
        background-color: #fff;
        color: var(--green);

        &:hover {
            color: #fff;
            background-color: var(--green);
            border: 1px solid #fff;
        }
    }

    @media (max-width: 750px) {
        & {
            height: auto;
        }
    }
`
