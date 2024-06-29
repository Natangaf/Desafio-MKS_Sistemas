import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    :root 
    {
        --bg-color-01:      #FFFFFF;
        --bg-color-02:      #EEEEEE;
        --text-color-01:    #2C2C2C;
        --text-color-02:    #000000;
        --blue-color-01:    #0f52ba;
        --blue-color-02:    #1262e0;
        --gray-color-01:    #373737;
    }

    ::selection
    {
        background-color: #3c383680;
    }

    * 
    {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
    }

    body
    {
        font-family: "Montserrat", sans-serif;
        color: var(--text-color-01);
        line-height: 1.5;
    }

    button
    {
        font-family: "Montserrat", sans-serif;
        user-select: none;
    }

    button:focus-visible
    {
        outline: 4px solid #ff4b4b;
    }

    /* -----  ----- ScrollBar -----  ----- */
    
    ::-webkit-scrollbar 
    {
        height: .75em;
        width: 1em;
    }
    
    ::-webkit-scrollbar-track 
    {
        background: var(--bg-color-02);
    }
       
    ::-webkit-scrollbar-thumb 
    {
        background: var(--gray-color-01); 
        box-sizing: border-box;
        cursor: pointer;
    }
    
    ::-webkit-scrollbar-thumb:hover 
    {
        background: #777; 
    }
`;
