import styled from 'styled-components'

interface BannerProps {
    image?: string
}

export const Main = styled.main`
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    margin-top: 100px;

    .overlay {
        z-index: 1;
        width: 100%;
        height: 400px;
        left: 0;
        top: 0;
        position: absolute;
        background: rgba(15, 15, 15, 0.5);
    }
`

export const Banner = styled.div<BannerProps>`
    width: 100%;
    height: 350px;
    background-image: url(${(props) => props.image});
    background-position: center;
    background-size: cover;
    position: relative;
    

    & > div {
        background-color: rgba(0,0,0,0.7) ;
        height: 100%;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        color: #fff;

        .categories {
            margin-bottom: 20px;
            span {
                opacity: 1 !important;
                background: var(--green);
                font-weight: 500;
                color: #fff;
                border-radius: 5px;
                padding: 5px 8px;
                & + span {
                    margin-left: 8px;
                }
            }
        }

        h1 {
            margin-bottom: 10px; 
        }

        & > p {
            margin-bottom: 15px;
        }

        .metadata {
            display: flex;
            p {
                margin-left: 8px;
            }
        }
    }
`

export const Container = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;

    .content {
        margin-top: 20px;
        width: 750px;
        display: flex;
        flex-direction: column;
        align-items: center;

        .tags {
            margin: 30px;
            width: 100%;
            display: flex;
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
            padding-left: 10px;
            margin: 15px 0px;
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
`


