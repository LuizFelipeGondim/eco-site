import styled from 'styled-components'

export const Container = styled.div`

    display: flex;
    padding: 15px;
    max-width: 1400px;

    div {
        
        hr {
            margin: 15px 0px 10px 0px;
            border: 1px solid var(--medium-gray)
        }
    }

    @media (max-width: 1100px) {
        & {
            flex-direction: column-reverse;
            align-items: center;
            padding: 10px;
        }
    }
`

export const SideOptions = styled.div`
    
    width: 25%;
    max-width: 280px;
    min-width: 170px;
    background-color: #fff;
    margin-left: 15px;
    border-radius: 8px;
    padding: 15px;
    box-shadow: 0px 24px 64px rgba(0, 0, 0, 0.04);

    label{
        margin: 10px 0px;
    }

    button {
        margin: 15px 0px 20px 0px;
        width: 170px;
    }

    .input {
        margin-bottom: 15px;
        
        input[name="situation"]{
            margin-right: 10px;
        }

        input[type="file"]{
            background: transparent;
            border: none;
            width: 220px;

            &:focus {
                box-shadow: none;
            }
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
    }

    .categories {
        margin-bottom: 15px;

        .dropdown-container{
            min-height: 50px;
            display: flex;
            align-items: center;
            
            button{
                margin: 0;
                width: auto;
                display: flex;
                align-items: center;
            }
        }

        p {
            color: red;
        }

    }

    .tags-input {
        margin-bottom: 15px;
        display: flex;
        align-items: flex-start;
        flex-wrap: wrap;
        min-height: 50px;
        width: 100%;
        padding: 0 8px;
        border: 1px solid rgb(214, 216, 218);
        border-radius: 6px;
        &:focus-within {
            border: 1px solid #0052cc;
        }
        input {
            flex: 1;
            border: none;
            height: 46px;
            font-size: 14px;
            padding: 4px 0 0 0;
            &:focus {
                outline: transparent;
            }
        }
    }

    #tags {
        display: flex;
        flex-wrap: wrap;
        padding: 0;
        margin: 8px 0 0 0;
    }

    .tag {
        width: auto;
        height: 32px;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #fff;
        padding: 0 8px;
        font-size: 14px;
        list-style: none;
        border-radius: 6px;
        margin: 0 8px 8px 0;
        background: #0052cc;

        .tag-title {
            margin-top: 3px;
        }

        .tag-close-icon {
            display: block;
            width: 16px;
            height: 16px;
            line-height: 16px;
            text-align: center;
            font-size: 14px;
            margin-left: 8px;
            color: #0052cc;
            border-radius: 50%;
            background: #fff;
            cursor: pointer;
        }
    }

    .image{
        width: 100%;
        height: 150px;
        overflow: hidden;
        display: flex;
        align-items: center;
        justify-content: center;

        img{
            width: 100%;
        }
    }

    @media (max-width: 1100px) {
        & {
            width: 100%;
            max-width: 100%;
            margin-right: 15px;
            margin-bottom: 15px;
        }
    }

`

export const Editor = styled.div`

    background-color: #fff;
    flex: 1;
    height: auto;
    max-width: 1000px;
    padding: 25px;
    border-radius: 8px;
    font-size: 15px;
    box-shadow: 0px 24px 64px rgba(0, 0, 0, 0.04);

    ul > li {
        list-style: disc;
        margin-left: 20px;
    }

    ol > li{
        list-style: decimal;
        margin-left: 20px;
    }

    @media (max-width: 1100px) {
        & {
            margin-top: 25px;
            width: 100%;
        }
    }

`
