import {createGlobalStyle } from 'styled-components'

export default createGlobalStyle`

    :root{
        --dark-green: #167510;
        --green: #24B338;
        --light-green: #F2FFF7;
        --dark: #334238;
        --dark-gray: #D7D7D7;
        --medium-gray: #F2F4F5;
        --gray: #F7F9FA;
        --light-gray: #FDFDFD;
        --blue: #007AE9;
        --red: #FF4C61; 
    }

   *{
       margin: 0;
       padding: 0;
       outline: 0;
       box-sizing: border-box;
       list-style: none;
       text-decoration: none;
   }

   body{
       -webkit-font-smoothing: antialiased;
       font: 16px Ubuntu, sans-serif;
   }

   h1, h2, h3, h4, h5, h6 {
       font: Archivo, sans-serif;
       font-weight: 500;
   }

   label {
        color: #1B1B1B;
    }

    input, select {
        height: 50px;
        border-radius: 4px;
        border: 1px solid #E3E3E3;
        background-color: #fff; 
        padding: 0px 15px;
        transition: 1s box-shadow;

        &::placeholder {
            color: #A8A6A6
        }

        &:focus {
            box-shadow: 0px 8px 8px rgba(50, 50, 71, 0.08), 0px 8px 16px rgba(50, 50, 71, 0.06);
        }
       
    }

    button {
        color: #fff;
        background-color: #24B338;
        border: none;
        height: 44px;
        width: 100px;
        border-radius: 5px;
        padding: 12px 20px;
        cursor: pointer;
        transition: 1s opacity ease;

        &:hover{
            opacity: 0.7;
        }
    }
`